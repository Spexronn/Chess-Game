# 🏆 SPEXRON Satranç Oyunu

Modern ve kullanıcı dostu bir web tabanlı satranç oyunu. İnsan vs PC ve İnsan vs İnsan modları ile oynayabilirsiniz.

## ✨ Özellikler

### 🎮 Oyun Modları
- **İnsan VS PC**: Bilgisayara karşı oynayın
- **İnsan VS İnsan**: Arkadaşınızla birlikte oynayın

### 🎯 Oyun Özellikleri
- **Gerçek Zamanlı Hamle Geçmişi**: Tüm hamleler alt alta listelenir
- **Otomatik Tahta Çevirme**: İnsan vs İnsan modunda tahta otomatik çevrilir
- **Modern Tasarım**: Glassmorphism efekti ile şık arayüz
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Hamle Doğrulama**: Sadece geçerli hamleler yapılabilir

### 🎨 Tasarım Özellikleri
- **Gradient Arka Plan**: Mor-mavi gradient tema
- **Glassmorphism**: Şeffaf cam efekti
- **Smooth Animasyonlar**: Yumuşak geçişler ve hover efektleri
- **Modern Tipografi**: Inter font ailesi
- **Custom Scrollbar**: Özel tasarım kaydırma çubuğu

## 🚀 Kurulum

1. **Dosyaları İndirin**
   ```bash
   git clone https://github.com/Spexronn/Chess-Game.git
   ````
   cd spexron-chess
   ```

2. **Tarayıcı'da oynayın!**
    --index.html sağ tık > birlikte aç > Google Chrome


## 🎮 Nasıl Oynanır

### İnsan VS PC Modu
1. **İnsan VS PC** butonuna tıklayın
2. Beyaz taşlarla oynayın (siz)
3. Siyah taşlar otomatik oynar (PC)
4. Hamlelerinizi sürükleyip bırakın

### İnsan VS İnsan Modu
1. **İnsan VS İnsan** butonuna tıklayın
2. Sırayla oynayın
3. Her hamleden sonra tahta otomatik çevrilir
4. Beyaz oynadığında tahta siyaha, siyah oynadığında beyaza döner

### Butonlar
- **Tekrar Oyna**: Oyunu sıfırlar
- **Pozisyon Al**: FEN notasyonu ile özel pozisyon ayarlar

## 🛠️ Teknolojiler

- **HTML5**: Yapısal markup
- **CSS3**: Modern styling ve animasyonlar
- **JavaScript (ES6+)**: Oyun mantığı
- **Chess.js**: Satranç kuralları ve hamle doğrulama
- **Chessboard.js**: Satranç tahtası görselleştirme
- **jQuery**: DOM manipülasyonu

## 📁 Dosya Yapısı

```
spexron-chess/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS stilleri
├── script.js           # JavaScript oyun mantığı
├── css/
│   └── chessboard-1.0.0.min.css
├── js/
│   └── chessboard-1.0.0.min.js
├── img/
│   └── chesspieces/
│       └── wikipedia/  # Satranç taşları
└── README.md
```

## 🎯 Oyun Kuralları

- Standart satranç kuralları geçerlidir
- Şah mat durumunda oyun biter
- Geçersiz hamleler otomatik geri alınır
- Rok ve geçerken alma desteklenir

## 🎨 Özelleştirme

### Renk Teması Değiştirme
`style.css` dosyasındaki gradient renklerini değiştirerek tema özelleştirebilirsiniz:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Taş Teması Değiştirme
`script.js` dosyasındaki `pieceTheme` ayarını değiştirerek farklı taş temaları kullanabilirsiniz.

## 📱 Responsive Tasarım

- **Desktop**: 400px satranç tahtası
- **Tablet**: 320px satranç tahtası
- **Mobil**: Optimize edilmiş buton boyutları
- **Touch Friendly**: Dokunmatik cihazlar için optimize

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**SPEXRON** tarafından geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

## 🎮 İyi Oyunlar!

Satranç oyununuzun keyfini çıkarın! 🏆

