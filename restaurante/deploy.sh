#!/bin/bash
# Script para primeiro deploy do sistema de restaurante

echo "🚀 Deploy do Sistema de Restaurante para Firebase"
echo "=================================================="
echo ""

cd "$(dirname "$0")"

# Verificar se o Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI não encontrado. Instalando..."
    npm install -g firebase-tools
fi

echo "✅ Firebase CLI encontrado"
echo ""

# Verificar se está logado
echo "🔐 Verificando autenticação..."
if ! firebase projects:list &> /dev/null; then
    echo ""
    echo "⚠️  Você não está logado no Firebase."
    echo ""
    echo "Para fazer o deploy, você precisa:"
    echo "1. Executar: firebase login:ci"
    echo "2. Copiar o token gerado"
    echo "3. Adicionar como secret FIREBASE_TOKEN_RESTAURANTE no GitHub"
    echo ""
    echo "Ou para fazer deploy manual agora:"
    echo "1. Execute: firebase login"
    echo "2. Depois execute este script novamente"
    echo ""
    exit 1
fi

echo "✅ Autenticado no Firebase"
echo ""

# Fazer deploy
echo "📦 Iniciando deploy para Firebase Hosting..."
echo ""

firebase deploy --only hosting --project sistema-restaurantes-b8ee9

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deploy concluído com sucesso!"
    echo ""
    echo "🌐 Seu sistema está online em:"
    echo "   https://sistema-restaurantes-b8ee9.web.app"
    echo ""
    echo "🔗 URL para o cliente (Espetaria do Chefe):"
    echo "   https://sistema-restaurantes-b8ee9.web.app/index.html?rest=espetaria_do_chefe"
    echo ""
    echo "👤 Credenciais de teste:"
    echo "   Usuário: admin"
    echo "   Senha: 123456"
    echo ""
else
    echo ""
    echo "❌ Erro no deploy. Verifique as mensagens acima."
    exit 1
fi
