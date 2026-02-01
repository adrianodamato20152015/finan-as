#!/usr/bin/env python3
import re

# Ler o arquivo fonte (delta_metas_atualizado 33)
with open("/workspaces/finan-as/Delta Metas 2026/delta_metas_atualizado (33).html", "r", encoding="utf-8") as f:
    source_content = f.read()

# Ler o arquivo destino (delta_metas_novo)
with open("/workspaces/finan-as/Delta Metas 2026/delta_metas_novo.html", "r", encoding="utf-8") as f:
    dest_content = f.read()

# Extrair o dashboard completo do arquivo fonte (desde <!-- DASHBOARD até <!-- MODAL DE GERAÇÃO)
dashboard_pattern = r'(<!-- DASHBOARD DE MONITORAMENTO -->.*?)(<!-- MODAL DE GERAÇÃO DE PDF -->)'
dashboard_match = re.search(dashboard_pattern, source_content, re.DOTALL)

if not dashboard_match:
    print("❌ Erro: Não encontrei o dashboard no arquivo fonte!")
    exit(1)

dashboard_html = dashboard_match.group(1)
print(f"✅ Dashboard extraído ({len(dashboard_html)} caracteres)")

# Substituir no arquivo destino
dest_pattern = r'(<!-- DASHBOARD DE MONITORAMENTO -->.*?)(<!-- MODAL|</body>|<script>)'
dest_content_new = re.sub(dest_pattern, dashboard_html + r'\2', dest_content, flags=re.DOTALL, count=1)

# Salvar o arquivo
with open("/workspaces/finan-as/Delta Metas 2026/delta_metas_novo.html", "w", encoding="utf-8") as f:
    f.write(dest_content_new)

print("✅ Dashboard substituído com sucesso!")
print(f"   Arquivo: /workspaces/finan-as/Delta Metas 2026/delta_metas_novo.html")
