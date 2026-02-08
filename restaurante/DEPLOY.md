# 🚀 Deploy do Sistema de Restaurante

## 📋 Pré-requisitos

Você já tem tudo configurado:
- ✅ Projeto Firebase: `sistema-restaurantes-b8ee9`
- ✅ Realtime Database configurado
- ✅ Dados do restaurante "Espetaria do Chefe" no Firebase

## 🔑 Configurar Token do Firebase (Primeira vez)

### 1. Fazer login no Firebase

No terminal do codespace, execute:

```bash
firebase login:ci
```

Siga as instruções:
1. Vai abrir uma página de autorização
2. Faça login com sua conta Google
3. Autorize o Firebase CLI
4. Copie o **token** que aparecerá no terminal

### 2. Adicionar o token como Secret no GitHub

1. Vá para: https://github.com/adrianodamato20152015/finan-as/settings/secrets/actions
2. Clique em **"New repository secret"**
3. Nome: `FIREBASE_TOKEN_RESTAURANTE`
4. Value: Cole o token que você copiou
5. Clique em **"Add secret"**

## 🌐 Fazer Deploy

### Opção 1: Deploy Automático (Recomendado)

Toda vez que você fizer commit na pasta `restaurante/`, o deploy será automático!

```bash
git add restaurante/
git commit -m "Atualização do sistema"
git push
```

Acompanhe o deploy em:
https://github.com/adrianodamato20152015/finan-as/actions

### Opção 2: Deploy Manual

Se quiser fazer deploy manualmente:

```bash
cd restaurante
firebase deploy --only hosting
```

## 🔗 URL do Sistema Online

Após o primeiro deploy, seu sistema estará em:

**https://sistema-restaurantes-b8ee9.web.app**

ou

**https://sistema-restaurantes-b8ee9.firebaseapp.com**

### URLs de acesso para o cliente:

**Espetaria do Chefe:**
```
https://sistema-restaurantes-b8ee9.web.app/index.html?rest=espetaria_do_chefe
```

**Tela de login direto:**
```
https://sistema-restaurantes-b8ee9.web.app
```

**App (após login):**
```
https://sistema-restaurantes-b8ee9.web.app/app.html
```

## 📱 Domínio Personalizado (Opcional)

Se quiser um domínio tipo `espetaria.seunome.com`:

1. Acesse: https://console.firebase.google.com/project/sistema-restaurantes-b8ee9/hosting
2. Clique em "Adicionar domínio personalizado"
3. Siga as instruções para configurar DNS

## 🔄 Workflow de Atualização

1. Faz alterações no código
2. Testa localmente (codespace)
3. Commit e push
4. GitHub Actions faz deploy automático
5. Cliente já vê as atualizações em 1-2 minutos!

## 🐛 Problemas Comuns

### Deploy falhou?
- Verifique se o secret `FIREBASE_TOKEN_RESTAURANTE` está configurado
- Veja os logs em https://github.com/adrianodamato20152015/finan-as/actions

### Sistema não carrega?
- Verifique as credenciais do Firebase em `index.html` e `app.html`
- Confira se o Realtime Database tem os dados corretos

### Cliente não consegue logar?
- Verifique se os usuários estão cadastrados em:
  `restaurantes/espetaria_do_chefe/usuarios/`

## 📊 Monitoramento

Veja estatísticas de uso em:
https://console.firebase.google.com/project/sistema-restaurantes-b8ee9/hosting

## 🆘 Suporte

Qualquer dúvida, verifique:
- [README.md](README.md) - Guia geral do sistema
- [GUIA-FIREBASE.md](GUIA-FIREBASE.md) - Configuração detalhada do Firebase
