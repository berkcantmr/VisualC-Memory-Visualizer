# 🧠 Visual C Memory Visualizer

> **C Bellek Yönetimini Görselleştirerek Öğrenin!**  
> *Master C Memory Management Visually!*

![React](https://img.shields.io/badge/React-18-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-4.0-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Status](https://img.shields.io/badge/Status-MVP-success?style=for-the-badge)

**Visual C Memory Visualizer**, C programlamaya yeni başlayanlar ve öğrenciler için geliştirilmiş, karmaşık **Stack (Yığın)** hafıza yönetimi kavramlarını somutlaştıran interaktif bir eğitim aracıdır. Kodunuz çalışırken bilgisayarın hafızasında neler olduğunu "Matrix" vari bir arayüzle izleyin.

---

## ✨ Özellikler (Features)

### 🚀 Teknik Derinlik & Doğruluk
*   **Gerçekçi Adresleme (Hexadecimal Addresses):** Her değişken için sanal ve mantıklı `0x7FFFFFF...` bellek adresleri üretir.
*   **Byte-Level Precision:** Veri tiplerine göre doğru boyutlandırma (`int` = 4 bayt, `char` = 1 bayt).
*   **Stack Pointer Simülasyonu:** Stack yapısının "aşağı doğru büyüme" (grows downwards) mantığını birebir simüle eder.
*   **Dizi & String Desteği:** `char str[] = "Code";` gibi ifadeleri, Null Terminator (`\0`) dahil olmak üzere karakter karakter belleğe yerleştirir.

### 🎨 Premium "Hacker" Arayüzü
*   **Cyberpunk/Terminal Estetiği:** Koyu mod, neon yeşili aksanlar (#0F0), ve Fira Code monospace fontlar.
*   **Glassmorphism:** Modern, buzlu cam efektli paneller.
*   **Akıllı Vurgulama:** Kod editöründe o an çalışan satırı (Active Line Highlighting) fosforlu şekilde gösterir.
*   **Animasyonlar:** Değişkenlerin hafızaya giriş anı akıcı CSS animasyonlarıyla görselleştirilir.

### 🌍 Çoklu Dil Desteği (Localization)
*   🇹🇷 **Türkçe:** Tamamen yerelleştirilmiş arayüz ve teknik terimler.
*   🇺🇸 **English:** Tek tıkla anında İngilizce arayüze geçiş imkanı.

---

## 📸 Ekran Görüntüleri (Screenshots)

| Kod Editörü & Kontroller | Stack Görselleştirme |
|:------------------------:|:--------------------:|
| ![Editor](https://placeholder.com/editor-preview) | ![Visualizer](https://placeholder.com/stack-preview) |
| *Yazılan kodu satır satır işleyin* | *Adresleri ve değerleri analiz edin* |

---

## 🛠️ Kurulum ve Çalıştırma (Installation)

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/yourusername/cvisulize.git
    cd cvisulize
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda `http://localhost:5173` adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

---

## 🎮 Nasıl Kullanılır? (How to Use)

1.  **Kodlayın:** Sol taraftaki editöre basit C kodlarınızı yazın.
    *   *Örnek:* `int sayi = 42;`
    *   *Örnek:* `char isim[] = "Ali";`
2.  **Çalıştırın:** **"► Çalıştır / Yenile"** butonuna basarak simülasyonu başlatın.
3.  **Adım Adım İzleyin:**
    *   **İleri (Next):** Bir sonraki satırı çalıştırır ve belleği günceller.
    *   **Geri (Previous):** Zamanda geriye giderek önceki durumu görür.
    *   **Sıfırla (Reset):** Hafızayı tamamen temizler.
4.  **Analiz Edin:** Sağ panelde oluşan kutucukların adreslerini, tiplerini ve değerlerini inceleyin.

---

## 💻 Teknolojiler (Tech Stack)

*   **Frontend Library:** React 18
*   **Build Tool:** Vite
*   **Styling:** Vanilla CSS 3 (CSS Variables, Flexbox, Keyframe Animations)
*   **Logic:** Custom Regex-based C Parser Engine

---

> *"The best way to learn memory management is to see it."*

Developed with 💻 & ☕ by **Antigravity**
