const fs = require('fs');
const https = require('https');

// Configuração do Firebase
const FIREBASE_PROJECT_ID = 'financas2026-b7c2a';
const FIREBASE_API_KEY = 'AIzaSyDzC1LY0HzbwIs97P-raB-9nG2Cl4aN4vM';

// Ler o arquivo JSON
const jsonData = fs.readFileSync('./controle-financeiro-2026-01-20 (8).json', 'utf8');
const data = JSON.parse(jsonData);

console.log('📂 JSON carregado com sucesso!');
console.log(`📊 Total de meses encontrados: ${Object.keys(data.monthlyData || {}).length}`);

// Função para fazer requisição POST ao Firebase Auth
function signIn(email, password) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        });

        const options = {
            hostname: 'identitytoolkit.googleapis.com',
            path: `/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(new Error(`Login falhou: ${body}`));
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

// Função para salvar dados no Firestore
function saveToFirestore(idToken, userId, monthKey, monthData) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            fields: {
                income: { doubleValue: monthData.income || 0 },
                expenses: { arrayValue: { values: (monthData.expenses || []).map(exp => ({
                    mapValue: { fields: {
                        id: { doubleValue: exp.id },
                        description: { stringValue: exp.description },
                        amount: { doubleValue: exp.amount },
                        category: { stringValue: exp.category },
                        type: { stringValue: exp.type },
                        date: { stringValue: exp.date },
                    }}
                }))}},
                extraIncomes: { arrayValue: { values: (monthData.extraIncomes || []).map(inc => ({
                    mapValue: { fields: {
                        id: { doubleValue: inc.id },
                        description: { stringValue: inc.description },
                        amount: { doubleValue: inc.amount },
                        date: { stringValue: inc.date }
                    }}
                }))}},
                categories: { mapValue: { fields: Object.keys(monthData.categories || {}).reduce((acc, key) => {
                    acc[key] = { doubleValue: monthData.categories[key] };
                    return acc;
                }, {})}},
                consignados: { arrayValue: { values: (monthData.consignados || []).map(cons => ({
                    mapValue: { fields: {
                        id: { doubleValue: cons.id },
                        nome: { stringValue: cons.nome },
                        valorTotal: { doubleValue: cons.valorTotal },
                        valorParcela: { doubleValue: cons.valorParcela },
                        parcelasPagas: { integerValue: cons.parcelasPagas },
                        parcelasRestantes: { integerValue: cons.parcelasRestantes }
                    }}
                }))}},
                dailyHistory: { mapValue: { fields: Object.keys(monthData.dailyHistory || {}).reduce((acc, key) => {
                    acc[key] = { doubleValue: monthData.dailyHistory[key] };
                    return acc;
                }, {})}}
            }
        });

        const options = {
            hostname: 'firestore.googleapis.com',
            path: `/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${userId}/months/${monthKey}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${idToken}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                if (res.statusCode === 200 || res.statusCode === 201) {
                    resolve();
                } else {
                    reject(new Error(`Erro ao salvar mês ${monthKey}: ${body}`));
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

// Função principal
async function populateFirebase() {
    try {
        // Obter credenciais do usuário
        console.log('\n🔐 Digite suas credenciais do Firebase:');
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const email = await new Promise(resolve => {
            readline.question('Email: ', resolve);
        });

        const password = await new Promise(resolve => {
            readline.question('Senha: ', resolve);
        });

        readline.close();

        console.log('\n🔑 Fazendo login...');
        const authData = await signIn(email, password);
        console.log('✅ Login realizado com sucesso!');

        const idToken = authData.idToken;
        const userId = authData.localId;

        console.log('\n📤 Salvando dados no Firebase...');
        
        let count = 0;
        for (const monthYear in data.monthlyData) {
            const monthKey = monthYear.replace('/', '-');
            const monthData = data.monthlyData[monthYear];
            
            await saveToFirestore(idToken, userId, monthKey, monthData);
            count++;
            console.log(`✓ Mês ${monthYear} salvo (${count}/${Object.keys(data.monthlyData).length})`);
        }

        console.log('\n🎉 SUCESSO! Todos os dados foram salvos no Firebase!');
        console.log(`📊 Total de meses salvos: ${count}`);
        
    } catch (error) {
        console.error('\n❌ Erro:', error.message);
        process.exit(1);
    }
}

populateFirebase();
