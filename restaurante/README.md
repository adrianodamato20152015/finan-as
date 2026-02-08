# 🍖 Sistema de Gestão para Restaurantes

Sistema completo de gestão para **MÚLTIPLOS restaurantes** com perfis de usuário personalizados.

## 🎯 Conceito

**UM ÚNICO sistema + UM ÚNICO Firebase = INFINITOS restaurantes!**

- ✅ Mesmo código para todos os restaurantes
- ✅ Um projeto Firebase para todos
- ✅ Cada restaurante tem seus próprios dados isolados
- ✅ Cada um personaliza: cardápio, preços, cores, logo, etc.

**Exemplo de uso:**
- `seu-app.com?rest=espetaria_do_chefe` → Espetaria do Chefe
- `seu-app.com?rest=pizzaria_bella` → Pizzaria Bella
- `seu-app.com?rest=burger_king` → Burger King

## 📋 Funcionalidades

### Perfis de Usuário:
- **👑 Gerente**: Acesso total - gerencia usuários e visualiza todas as abas
- **📋 Atendimento**: Gestão de pedidos e mesas
- **🍳 Cozinha**: Visualização de pedidos para preparo
- **💰 Caixa**: Fechamento de contas e relatórios

## 🔧 Configuração do Firebase

### ⚠️ IMPORTANTE: Você cria APENAS 1 projeto Firebase!

**Este único projeto servirá TODOS os seus restaurantes clientes!**

### Passo 1: Criar Projeto no Firebase (UMA VEZ SÓ!)

1. Acesse: https://console.firebase.google.com/
2. Clique em "**Adicionar projeto**"

3. **Etapa 1/3 - Nome do projeto:**
   - Digite: `sistema-restaurantes` (ou outro nome genérico)
   - Clique em "**Continuar**"

4. **Etapa 2/3 - Google Analytics:**
   - ❌ **DESMARQUE** a opção "Ativar o Google Analytics neste projeto"
   - Clique em "**Criar projeto**"
   
   **OU** se já marcou:
   - Clique em "**Continuar**"
   - Na próxima tela, deixe qualquer conta (não importa)
   - Clique em "**Criar projeto**"

5. **Aguarde a criação** (leva uns 30 segundos)

6. Clique em "**Continuar**"

**💡 Este será o único projeto Firebase que você vai precisar!**

**⚠️ IGNORE:**
- ❌ Sugestões do Gemini AI
- ❌ Google Analytics (opcional, não precisa)
- ❌ Outras integrações que aparecerem

### Passo 2: Ativar Realtime Database

1. No **menu lateral esquerdo**, clique em "**Realtime Database**"
   - (fica na seção "Criação" ou "Build")

2. Clique no botão "**Criar banco de dados**"

3. **Escolha o local:**
   - Selecione: `us-central1` (Estados Unidos)
   - **OU** qualquer outro mais próximo (southamerica-east1 para Brasil)
   - Clique em "**Avançar**"

4. **Regras de segurança:**
   - Escolha: "**Iniciar no modo de teste**"
   - ⚠️ Isso deixa o banco aberto por 30 dias (depois configuramos segurança)
   - Clique em "**Ativar**"

5. **Aguarde a criação** (uns 10 segundos)

6. ✅ **Pronto!** Você verá uma tela com `null` no banco de dados

**💡 Dica:** A URL do banco aparece no topo, algo como:
`https://sistema-restaurantes-xxxxx.firebaseio.com/`

### Passo 3: Configurar Regras de Segurança

No Realtime Database, vá em "Regras" e cole:

```json
{
  "rules": {
    "restaurantes": {
      "$restauranteId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

**⚠️ IMPORTANTE**: Estas regras são para desenvolvimento. Em produção, use regras mais seguras!

### Passo 4: Obter Credenciais

1. **Clique no ícone de engrenagem ⚙️** (canto superior esquerdo, ao lado de "Visão geral do projeto")

2. No menu que abrir, clique em **"Geral"**

3. **Role a página para baixo** até encontrar a seção **"Seus aplicativos"**
   - Estará escrito: "Não há apps no seu projeto"
   - Você verá ícones: `</>` `📱` `🤖`

4. **Clique no ícone `</>`** (Web)

5. Na tela que abrir:
   - **Apelido do app**: Digite `Sistema Restaurantes`
   - **NÃO marque** "Configurar Firebase Hosting" (por enquanto)
   - Clique em **"Registrar app"**

6. **COPIE o código que aparecer!** 📋
   - Você verá algo assim:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "...",
     databaseURL: "https://...",
     projectId: "...",
     // ... mais linhas
   };
   ```
   - **Copie todo esse bloco!**

7. Clique em **"Continuar no console"**

### Passo 5: Configurar os Arquivos

Abra `index.html` e `app.html` e substitua:

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY",              // ← Cole aqui
    authDomain: "SEU_PROJECT.firebaseapp.com",
    databaseURL: "https://SEU_PROJECT.firebaseio.com",
    projectId: "SEU_PROJECT",
    storageBucket: "SEU_PROJECT.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

### Passo 6: Criar Primeiro Usuário (Gerente)

**Onde fazer isso:**
1. Volte para o **Firebase Console** (https://console.firebase.google.com/)
2. Clique no seu projeto **"sistema-restaurantes-b8ee9"**
3. No menu lateral esquerdo, clique em **"Realtime Database"**
4. Clique na aba **"Data"** (Dados) no topo
5. Você verá a URL do banco e abaixo a estrutura (inicialmente vazia com `null`)

**Estrutura que vamos criar:**

```
restaurantes/
  └── espetaria_do_chefe/
      └── usuarios/
          └── admin/
              ├── nome: "Administrador"
              ├── perfil: "gerente"
              └── senha: "123456"
```

⚠️ **ATENÇÃO:** 
- Use `espetaria_do_chefe` (com underline `_`, SEM espaços!)
- Use `usuarios` (sem acento)
- Use EXATAMENTE esses nomes, respeitando maiúsculas e minúsculas

**Como fazer no Firebase Console:**

1. **Criar a estrutura de pastas:**
   - Clique no `+` ao lado da raiz (onde está `null`)
   - Digite: `restaurantes` (sem valor)
   - Clique no `+` ao lado de `restaurantes`
   - Digite: `espetaria_do_chefe` (sem valor)
   - Clique no `+` ao lado de `espetaria_do_chefe`
   - Digite: `usuarios` (sem valor)
   - Clique no `+` ao lado de `usuarios`
   - Digite: `admin` (sem valor)

2. **Adicionar os dados do usuário admin:**
   - Clique no `+` ao lado de `admin`
   - **Name:** `nome` | **Value:** `Administrador` | Clique em `+` (adicionar)
   - Clique no `+` ao lado de `admin` novamente
   - **Name:** `perfil` | **Value:** `gerente` | Clique em `+`
   - Clique no `+` ao lado de `admin` novamente
   - **Name:** `senha` | **Value:** `123456` | Clique em `+`

3. **Verificar se está correto:**
   ```
   restaurantes
     └── espetaria_do_chefe
         └── usuarios
             └── admin
                 ├── nome: "Administrador"
                 ├── perfil: "gerente"
                 └── senha: "123456"
   ```

---

## 🧪 Testando o Sistema pela Primeira Vez

### Abrir o aplicativo:

1. **Abra o arquivo `index.html`** no seu navegador
   - Caminho: `/workspaces/finan-as/restaurante/index.html`
   - Ou digite na URL: `http://localhost:5500/restaurante/index.html?rest=espetaria_do_chefe`

2. **Faça login:**
   - **Usuário:** `admin`
   - **Senha:** `123456`

3. **Se funcionar:**
   - ✅ Você verá a tela principal com 4 abas
   - ✅ Na aba "👥 Usuários" você pode criar novos funcionários
   - ✅ Teste criar um usuário de atendimento, cozinha e caixa

4. **Se NÃO funcionar:**
   - Aperte `F12` para abrir o Console do navegador
   - Veja se há erros em vermelho
   - Me envie uma mensagem para eu te ajudar!

**💡 Dica:** Quando der certo, você pode criar os outros usuários (atendimento, cozinha, caixa) usando a própria aba "Usuários" do sistema!

---

## 🏪 Como Adicionar Novos Restaurantes (DEPOIS de testar)

### Quando vender o sistema para um novo cliente:

**❌ NÃO FAÇA:**
- ❌ Criar novo projeto no Firebase
- ❌ Duplicar o código
- ❌ Criar novo app

**✅ FAÇA:**
1. No mesmo Firebase, adicione novo nó em `restaurantes/`
2. Crie estrutura de dados do novo restaurante
3. Dê ao cliente a URL personalizada

**Exemplo prático:**

```javascript
// Vendeu para "Pizzaria Bella"

// 1. No Firebase, adicione:
restaurantes/
  └── pizzaria_bella/      ← Novo restaurante
      ├── config/
      │   ├── nome: "Pizzaria Bella"
      │   ├── logo: "🍕"
      │   ├── corPrimaria: "#FF0000"
      │   └── corSecundaria: "#FFD700"
      └── usuarios/
          └── admin/
              ├── nome: "Dono da Pizzaria"
              ├── perfil: "gerente"
              └── senha: "senhaSegura123"

// 2. URL do cliente: seu-app.com?rest=pizzaria_bella
```

### Automatizar criação de restaurante:

Você pode criar uma página admin só sua para cadastrar novos restaurantes automaticamente! (podemos fazer isso depois)

## 🚀 Como Usar

### Login Inicial:
- **Usuário**: `admin`
- **Senha**: `123456`

### Como Gerente:
1. Faça login com as credenciais acima
2. Na aba "👥 Usuários", cadastre novos funcionários
3. Defina perfil de cada um: Gerente, Atendimento, Cozinha ou Caixa
4. Cada pessoa terá acesso apenas às suas abas

## 📁 Estrutura do Banco de Dados

```
restaurantes/
  └── espetaria_do_chefe/          # ID do restaurante
      ├── config/               # Configurações (logo, cores, etc)
      ├── usuarios/             # Usuários do sistema
      │   └── {username}/
      │       ├── nome
      │       ├── perfil
      │       └── senha
      ├── pedidos/              # Pedidos (a desenvolver)
      ├── cardapio/             # Cardápio (a desenvolver)
      ├── mesas/                # Mesas (a desenvolver)
      └── financeiro/           # Dados financeiros (a desenvolver)
```

## 🎨 Personalização

Para personalizar cores/logo, edite no CSS de `index.html` e `app.html`:

- **Cor primária**: `#8B4513` (marrom)
- **Cor secundária**: `#D2691E` (chocolate)
- **Ícone**: 🍖 (espeto de carne)

## 📱 Acesso por URL Personalizada

Para criar URL tipo `espetaria.seu-app.com`:

1. Configure domínio no Firebase Hosting
2. Ou use parâmetro: `?rest=espetaria_do_chefe`

---

## 💰 Escalando o Negócio

### Como o sistema funciona para vários clientes:

```
Você (Desenvolvedor)
    │
    ├─ 1 Projeto Firebase
    ├─ 1 Código (index.html + app.html)
    ├─ 1 Firebase Hosting
    │
    └─ Clientes:
        ├─ Espetaria do Chefe → ?rest=espetaria_do_chefe
        ├─ Pizzaria Bella    → ?rest=pizzaria_bella
        ├─ Burger King       → ?rest=burger_king
        └─ ... infinitos restaurantes
```

### **Vantagens deste modelo:**
- ✅ Manutenção única (atualiza 1 código, afeta todos)
- ✅ Um Firebase paga por todos (mais barato)
- ✅ Fácil adicionar novos clientes (só dados, sem código)
- ✅ Cada restaurante totalmente isolado
- ✅ Cada um personaliza seu sistema via dados

### **Plano de preços exemplo:**
- 💵 Taxa de setup: R$ 500 (configuração inicial do restaurante)
- 💵 Mensalidade: R$ 99/mês por restaurante
- 💵 Seu custo Firebase: ~R$ 50/mês para TODOS os restaurantes

**Com 10 restaurantes:**
- 💰 Você recebe: R$ 990/mês
- 💸 Você paga: R$ 50/mês (Firebase)
- 🎉 Lucro: R$ 940/mês

---

## ⚠️ Segurança

**IMPORTANTE antes de colocar em produção:**

1. **Nunca armazene senhas em texto puro!**
   - Use hash (bcrypt, SHA-256, etc)
   
2. **Melhore as regras do Firebase:**
   - Apenas usuários autenticados podem acessar
   
3. **Use Firebase Authentication:**
   - Sistema oficial de autenticação do Google

## 🆘 Suporte

Dúvidas? Entre em contato!

---

**Versão**: 1.0.0  
**Desenvolvido para**: Espetaria do Chefe  
**Data**: Fevereiro 2026
