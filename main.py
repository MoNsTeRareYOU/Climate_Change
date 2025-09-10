"""
Basit yerel HTTP sunucusu.
Bu betik, proje klasörünüzdeki `index.html`, `style.css` ve `script.js`
dosyalarını yerel sunucuda (varsayılan 8000 portu) yayınlar ve tarayıcıyı açar.

Kullanım:
  python main.py          # 8000 portunda çalıştırır
  PORT=5500 python main.py  # özel port
"""

from __future__ import annotations

import os
import sys
import time
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


def run_server(port: int) -> None:
    root_dir = os.path.dirname(os.path.abspath(__file__))

    class Handler(SimpleHTTPRequestHandler):  # type: ignore[misc]
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=root_dir, **kwargs)

        def log_message(self, format: str, *args) -> None:  # daha okunaklı log
            sys.stdout.write("[HTTP] " + (format % args) + "\n")

    server_address = ("127.0.0.1", port)
    httpd = ThreadingHTTPServer(server_address, Handler)

    url = f"http://{server_address[0]}:{server_address[1]}/"
    print(f"Yerel sunucu çalışıyor: {url}")

    # Tarayıcıyı kısa gecikme ile aç
    try:
        # Küçük bir gecikme, bazı ortamlarda sunucu hazır olmadan açılmayı önler
        time.sleep(0.2)
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nKapatılıyor…")
    finally:
        httpd.server_close()


if __name__ == "__main__":
    port_env = os.getenv("PORT")
    try:
        port = int(port_env) if port_env else 8000
    except ValueError:
        print("Geçersiz PORT değeri, 8000 kullanılacak.")
        port = 8000

    run_server(port)

