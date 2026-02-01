#!/bin/bash
# Script para rodar um servidor HTTP simples na porta 8080

cd "$(dirname "$0")"
echo "Acesse http://localhost:8080 para visualizar os arquivos do projeto."
python3 -m http.server 8080
