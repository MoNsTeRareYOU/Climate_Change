İklim360 🌍 — Bilgilendirici Web Sitesi
======================================

Giriş
Siz de biliyorsunuz ki iklim değişikliği artık dünya için büyük bir sorun. Ben de bunun için bir bilgilendirici web sayfası oluşturdum. Şimdi size web sayfamı göstereceğim.

İklim360; iklim değişikliği hakkında hızlı, güvenilir ve eyleme dönük bilgi sunan hafif bir web sitesidir. Basit HTML/CSS/JS mimarisi ile hızlı açılır, erişilebilirlik ilkelerine dikkat eder ve kullanıcıyı somut adımlara yönlendirir. ✨

Neler Sunar?
- İçerik haritası: Nedir? • Neden Önemli? • Etkiler • Çözümler • Karbon Ayak İzi • Kaynaklar 🧭
- Tema: Açık/Karanlık mod, tercih `localStorage` ile hatırlanır 🌞🌙
- UX: Akıcı geçişler, yapışkan başlık, “Yukarı dön” butonu, responsive grid 📱💻
- Erişilebilirlik: Skip‑link, anlamlı başlık yapısı, odak görünürlüğü, ARIA özenleri ♿️
- Mini hesaplayıcı: Basit seçimlerle yaklaşık CO2e farkındalığı 🧮
- Çevik yapı: Frameworksüz, düz HTML/CSS/JS → düşük gecikme, kolay barındırma ⚡️

Hızlı Başlangıç
- Gereksinim: Python 3 (yerel sunucu için)
- Çalıştır: `python main.py` → `http://127.0.0.1:8000/` 🚀
- Alternatif: `index.html` dosyasını doğrudan tarayıcıda açabilirsiniz.

Proje Yapısı
- `index.html` — Ana sayfa ve giriş bölümü
- `neden-onemli.html`, `etkiler.html`, `cozumler.html`, `karbon-ayak-izi.html`, `kaynaklar.html` — İçerik sayfaları
- `style.css` — Tema renkleri (CSS değişkenleri), grid ve bileşen stilleri
- `script.js` — Tema geçişi, sayfa geçişleri, mini hesaplayıcı vb.
- `main.py` — Basit yerel sunucu (statik dosyalar)
- `assets/` — Opsiyonel görseller (şu an boş) 🖼️
- `test.txt` — Hızlı, manuel kontrol listesi ✅

Sayfalar Hakkında
- Nedir? ❓ Temel kavramlar, yanlış bilinenler ve kısa gözlemler.
- Neden Önemli? ❗️ Ekosistem, ekonomi ve toplumsal etkiler; “neden şimdi?” sorusu.
- Etkiler 🌪️ Sağlık, su, tarım gibi alanlardaki risk örnekleri.
- Çözümler 🌱 Enerji, ulaşım, tüketim odaklı öneriler ve “Hemen Atılacak Adımlar”.
- Karbon Ayak İzi 🦶 Basit seçimlerle yaklaşık hesaplama; farkındalık amaçlıdır.
- Kaynaklar 📚 Güvenilir kurum ve yayın bağlantıları.

Özelleştirme
- Renkler/temalar: `style.css` içindeki `:root` ve `body.light` değişkenlerini düzenleyin 🎨
- Metin/içerik: İlgili `.html` sayfalarındaki kart ve listeleri güncelleyin ✍️
- Favicon: Kök dizine `favicon.svg` ekleyin (sayfalarda bağlantısı hazır) 🔖

Erişilebilirlik Notları
- Klavye ile tam gezinme ve görünür odak halkaları desteklenir.
- Görsel eklerseniz anlamlı `alt` metinleri sağlayın; dekoratifse boş `alt` kullanın.

Geliştirme İpuçları
- VS Code Live Server ile canlı yenileme rahat olur.
- Değişiklik sonrası sert yenileme yapın: Ctrl/Cmd+Shift+R 🧹

Sorun Giderme
- Görsel görünmüyor: `assets/` yolunu ve dosya adını doğrulayın; önbelleği temizleyin.
- 404/bozuk link: Menüdeki bağlantılarla dosya adlarının birebir eşleştiğini kontrol edin.

Katkı
- Hata/öneri/iyileştirme için issue veya PR açabilirsiniz. Katkılar memnuniyetle kabul edilir 🙌

