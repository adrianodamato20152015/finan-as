# 🚀 COMO ATUALIZAR O CALENDÁRIO - PASSO A PASSO

## 📦 O QUE TEM NESTA PASTA

Esta pasta tem **APENAS** os 3 arquivos necessários para atualizar seu calendário:

- ✅ **index.html** → O calendário atualizado
- ✅ **.firebaserc** → Configuração do projeto Firebase
- ✅ **firebase.json** → Configuração do hosting

## 🖥️ COMO ATUALIZAR DO SEU COMPUTADOR

### PASSO 1: Baixar esta pasta

1. Baixe a pasta `calendario-deploy` completa do GitHub
2. Ou baixe apenas esses 3 arquivos acima
3. Salve em uma pasta no seu computador (exemplo: `C:\calendario-deploy`)

---

### PASSO 2: Verificar se tem Node.js instalado

1. Abra o **Prompt de Comando** (cmd) ou **PowerShell**
2. Digite: `node --version`
3. Se aparecer um número (exemplo: v18.17.0), pule para o PASSO 3
4. Se der erro "comando não encontrado":
   - Acesse: https://nodejs.org/
   - Baixe a versão **LTS** (recomendada)
   - Instale normalmente (Next, Next, Finish)
   - **Feche e abra o terminal novamente**

---

### PASSO 3: Instalar Firebase Tools (só precisa fazer UMA VEZ)

No terminal, digite:

```
npm install -g firebase-tools
```

Aguarde... vai demorar uns 30 segundos a 1 minuto.

**Você só precisa fazer isso UMA VEZ no seu computador!**

---

### PASSO 4: Ir para a pasta que você baixou

```
cd C:\caminho\para\calendario-deploy
```

**Exemplo:**
- Se você salvou em Downloads: `cd C:\Users\SEU_NOME\Downloads\calendario-deploy`
- Se salvou em Documentos: `cd C:\Users\SEU_NOME\Documents\calendario-deploy`

**Dica:** Você pode arrastar a pasta para o terminal e ele copia o caminho!

---

### PASSO 5: Fazer Login no Firebase (só precisa fazer UMA VEZ)

```
firebase login
```

Uma janela do navegador vai abrir automaticamente. 

- Faça login com sua conta Google (a mesma que você usou para criar o projeto Firebase)
- Autorize o acesso
- Volte para o terminal

**Você só precisa fazer login UMA VEZ! O Firebase lembra.**

---

### PASSO 6: PUBLICAR! 🎉

```
firebase deploy --only hosting --force
```

O `--force` garante que o Firebase vai ignorar cache e publicar tudo de novo.

Aguarde... em 10-30 segundos vai aparecer:

```
✔  Deploy complete!

Hosting URL: https://calendario2026-9b6b8.web.app
```

**IMPORTANTE:** Aguarde **2-3 minutos** para o CDN do Firebase propagar as mudanças.

**PRONTO!** Seu calendário foi atualizado! 🎊

**Para testar:**
- Abra uma aba anônima (`Ctrl + Shift + N`)
- Acesse o link
- Ou pressione `Ctrl + Shift + R` no navegador

---

## 🔄 PARA ATUALIZAR DE NOVO NO FUTURO

Quando você fizer mudanças e quiser atualizar o calendário novamente:

1. Substitua o arquivo `index.html` desta pasta pelo novo
2. **IMPORTANTE:** Abra o `index.html` e encontre estas duas linhas:
   - Linha 9: `<meta name="app-version" content="2.1">`
   - Linha 935: `const APP_VERSION = '2.1';`
3. **Aumente o número da versão** (exemplo: de 2.1 para 2.2)
4. Abra o terminal na pasta `calendario-deploy`
5. Digite: `firebase deploy --only hosting`
6. Pronto! ✅

**MÁGICA:** Quando qualquer pessoa abrir o calendário, ele vai detectar automaticamente que tem uma versão nova e vai atualizar sozinho! 🎉

Você **NÃO** precisa fazer login novamente ou instalar nada!

---

## ✨ SISTEMA DE ATUALIZAÇÃO AUTOMÁTICA

O calendário agora tem um **sistema inteligente** que:

✅ Detecta automaticamente quando você publicou uma nova versão
✅ Limpa o cache do navegador automaticamente
✅ Recarrega a página com a versão nova
✅ **Os dados dos eventos estão SEGUROS no Firebase** (nada é perdido!)

**Como funciona:**
- Cada vez que você atualiza, muda o número da versão
- Quando alguém abre o calendário, ele verifica se a versão mudou
- Se mudou, limpa o cache e recarrega automaticamente
- O usuário nem percebe! 😊

**Importante:**
- ⚠️ **SEMPRE** aumente o número da versão quando fizer deploy
- ⚠️ Se esquecer de mudar a versão, as pessoas vão continuar vendo a versão antiga (cache)
- ⚠️ **Use `--force` no deploy** para garantir que o Firebase atualize: `firebase deploy --only hosting --force`
- ⚠️ Aguarde **2-3 minutos** após o deploy para o CDN propagar
- ✅ Os eventos sempre ficam salvos no Firebase (na nuvem)

**Se ainda não atualizar:** Veja o arquivo `FORCAR-ATUALIZACAO.md` com soluções alternativas.

---

## ❓ PROBLEMAS COMUNS

### "firebase não é reconhecido como comando"
- Você não instalou o firebase-tools (volte ao PASSO 3)
- Ou precisa fechar e abrir o terminal novamente

### "Failed to authenticate"
- Faça login novamente: `firebase login --reauth`

### "No project active"
- O arquivo `.firebaserc` está na pasta?
- Verifique se você está na pasta correta (`calendario-deploy`)

---

## 🎯 SEU LINK DO CALENDÁRIO

**Link do site:** https://calendario2026-9b6b8.web.app

**Para acessar:** Use o email/senha que você configurou no Firebase Authentication

---

**Qualquer dúvida, me chame! 😊**
