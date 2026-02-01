# 📱 Como Configurar o Firebase

Siga estes passos para configurar o Firebase e permitir que você e sua esposa acessem o controle financeiro de qualquer lugar:

## 1. Criar Projeto no Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Dê um nome ao projeto (ex: "controle-financeiro-familia")
4. Desative o Google Analytics (não é necessário)
5. Clique em "Criar projeto"

## 2. Adicionar Aplicativo Web

1. No painel do projeto, clique no ícone **</>** (Web)
2. Dê um apelido ao app (ex: "Controle Financeiro")
3. **NÃO** marque "Configure Firebase Hosting"
4. Clique em "Registrar app"
5. **COPIE** o código de configuração que aparece (veremos onde colar a seguir)

## 3. Configurar Authentication (Autenticação)

1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Get started"** ou "Começar"
3. Na aba "Sign-in method", clique em **"Email/Password"**
4. **Ative** a opção "Email/Password"
5. Clique em "Salvar"

## 4. Configurar Firestore Database

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Create database"** ou "Criar banco de dados"
3. Escolha o modo: **"Start in production mode"** (mais seguro)
4. Escolha a localização: **southamerica-east1 (São Paulo)** (mais rápido para vocês)
5. Clique em "Ativar"

## 5. Configurar Regras de Segurança do Firestore

1. Ainda em "Firestore Database", clique na aba **"Rules"** (Regras)
2. Substitua o conteúdo por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir que usuários autenticados leiam e escrevam apenas seus próprios dados
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Clique em **"Publicar"**

## 6. Configurar o App

1. Abra o arquivo `finanças.html`
2. Procure por esta seção (próximo ao início do arquivo):

```javascript
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJECT_ID.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_PROJECT_ID.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
```

3. Substitua pelos valores que você copiou no passo 2 (do Firebase Console)

**Exemplo:**
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "controle-financeiro-familia.firebaseapp.com",
    projectId: "controle-financeiro-familia",
    storageBucket: "controle-financeiro-familia.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};
```

## 7. Criar Contas

1. Abra o arquivo `finanças.html` no navegador
2. Clique em "Criar Conta"
3. Preencha seu nome, email e senha
4. Faça o mesmo para sua esposa criar a conta dela

## 8. Importar Dados Existentes

1. Faça login com sua conta
2. Clique em "Importar de JSON"
3. Selecione o arquivo `controle-financeiro-2026-01-20 (8).json`
4. Os dados serão salvos automaticamente no Firebase

## ✅ Pronto!

Agora você e sua esposa podem:
- ✅ Acessar de qualquer dispositivo
- ✅ Fazer login com suas próprias contas
- ✅ Ver e editar os dados em tempo real
- ✅ Os dados ficam salvos na nuvem automaticamente

## 🔒 Segurança

- Cada usuário só pode ver e editar seus próprios dados
- A comunicação é criptografada (HTTPS)
- O Firebase usa autenticação segura

## 💡 Dicas

- Compartilhe a mesma conta se quiserem ver os mesmos dados
- Ou criem contas separadas se preferirem dados individuais
- Sempre use senhas fortes
- Os dados são salvos automaticamente a cada alteração
