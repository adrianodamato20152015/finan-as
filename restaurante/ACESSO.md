# 🍖 Sistema de Restaurante - Acesso Online

## 🌐 URL do Sistema

**Acesso Principal (Espetaria do Chefe):**
```
https://sistema-restaurantes-b8ee9.web.app
```

ou com parâmetro explícito:
```
https://sistema-restaurantes-b8ee9.web.app/index.html?rest=espetaria_do_chefe
```

---

## 👤 Credenciais de Acesso

### 👔 GERENTE (Acesso Total)
- **Usuário:** `admin`
- **Senha:** `123456`
- **Permissões:** Todas as funcionalidades + gerenciar usuários

### 📋 ATENDIMENTO
- **Usuário:** `joao`
- **Senha:** `senha123`
- **Permissões:** Registrar pedidos, atender clientes

### 👨‍🍳 COZINHA
- **Usuário:** `maria`
- **Senha:** `senha123`
- **Permissões:** Ver pedidos, gerenciar produção

### 💰 CAIXA
- **Usuário:** `carlos`
- **Senha:** `senha123`
- **Permissões:** Controle financeiro, fechar contas

---

## 📱 Funcionalidades Disponíveis

### ✅ Já Implementadas:
- Login com perfis de usuário
- **Finanças**: Receitas e Despesas (fixas e eventuais)
- **Importar Fixas**: Trazer receitas/despesas fixas do mês anterior
- **Cardápio**: Gerenciar itens do cardápio (código, item, valor)
  - **Gerente**: Adicionar, editar e excluir itens
  - **Atendimento**: Visualizar cardápio (para criar pedidos)
- **Usuários**: Gerente pode criar/editar usuários

### 🚧 Em Desenvolvimento:
- Atendimento: Registro de pedidos
- Cozinha: Gerenciamento de produção
- Caixa: Fechamento de caixa

---

## 🔧 Configuração Firebase

**Projeto:** `sistema-restaurantes-b8ee9`

**Database URL:** `https://sistema-restaurantes-b8ee9-default-rtdb.firebaseio.com`

**Console Firebase:**
```
https://console.firebase.google.com/project/sistema-restaurantes-b8ee9
```

---

## 🚀 Deploy

O sistema está configurado com deploy automático via GitHub Actions.

**Toda alteração no código → Deploy automático em 1-2 minutos**

Para deploy manual:
```bash
cd restaurante
firebase deploy --only hosting
```

---

## 📞 Suporte

- Ver dados no Firebase: [Realtime Database](https://console.firebase.google.com/project/sistema-restaurantes-b8ee9/database)
- Ver deploys: [GitHub Actions](https://github.com/adrianodamato20152015/finan-as/actions)
- Documentação completa: [README.md](README.md)

---

**Última atualização:** 08/02/2026  
**Status:** ✅ Online e Funcionando
