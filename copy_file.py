#!/usr/bin/env python3
import shutil

source = "/workspaces/finan-as/Delta Metas 2026/delta_metas_atualizado (33).html"
dest = "/workspaces/finan-as/Delta Metas 2026/delta_metas_novo.html"

try:
    shutil.copy2(source, dest)
    print(f"✅ Arquivo copiado com sucesso!")
    print(f"   De: {source}")
    print(f"   Para: {dest}")
except Exception as e:
    print(f"❌ Erro ao copiar: {e}")
