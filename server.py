#!/usr/bin/env python3
"""
Servidor HTTP simples para servir os apps localmente
Uso: python3 server.py [porta]
Default: porta 8000
"""

import http.server
import socketserver
import sys
import os

# Define a porta (padrão 8000, ou a fornecida como argumento)
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

# Muda para o diretório do script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Handler que suporta CORS e cache control
class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Adiciona headers para evitar cache
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        # CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Log mais limpo
        print(f"[{self.log_date_time_string()}] {format % args}")

# Cria o servidor
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print(f"")
    print(f"🚀 Servidor rodando em http://localhost:{PORT}")
    print(f"📱 Abra no navegador: http://localhost:{PORT}")
    print(f"")
    print(f"💡 Dica: Use Ctrl+Shift+R no navegador para atualizar sem cache")
    print(f"🛑 Para parar o servidor: Ctrl+C")
    print(f"")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n\n👋 Servidor encerrado!")
        sys.exit(0)
