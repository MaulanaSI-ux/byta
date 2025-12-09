document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengontrol pemutaran audio di Halaman 2 (page2.html)
    // Audio Autoplay sering diblokir, jadi kita coba mulai saat halaman dimuat
    
    const audio = document.getElementById('background-music');

    if (audio) {
        // Coba putar audio, jika gagal (karena batasan browser), 
        // kita bisa tambahkan instruksi untuk user mengklik 'play'
        audio.volume = 0.5; // Atur volume agar tidak terlalu keras
        audio.play().catch(error => {
            console.log("Autoplay musik diblokir. Harap putar secara manual.");
            // Anda bisa menambahkan pop-up di HTML untuk meminta pacar Anda menekan tombol play
        });
    }

    // --- Efek Tambahan di Halaman 1 (Opsional: Jika Anda ingin menambahkan confetti) ---
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        // Contoh kode untuk efek visual kecil (misalnya, menonaktifkan right-click)
        // Jika Anda ingin efek kembang api atau confetti, kodenya jauh lebih panjang 
        // dan biasanya menggunakan library eksternal. Untuk saat ini kita fokus ke elemen dasar dulu.
        console.log("Halaman 1 siap.");
    }
});