// Banner Auto-Slide
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".img-slideshow");
    slides.forEach(slide => (slide.style.display = "none")); // Sembunyikan semua slide
    slideIndex++;

    if (slideIndex > slides.length) slideIndex = 1; // Reset ke slide pertama
    if (slideIndex < 1) slideIndex = slides.length; // Jika indeks kurang dari 1, lompat ke slide terakhir
    slides[slideIndex - 1].style.display = "block"; // Tampilkan slide aktif
}

function plusDivs(n) {
    slideIndex += n; // Tambah atau kurangi indeks berdasarkan tombol navigasi
    showSlides();
}

// Menjalankan slideshow otomatis
setInterval(showSlides, 3000); // Ubah slide setiap 3 detik

// Inisialisasi slide pertama
document.addEventListener("DOMContentLoaded", showSlides);

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah form terkirim sebelum validasi selesai

    // Ambil nilai dari setiap field
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;

    // Validasi: Periksa jika ada field yang kosong
    if (!name || !email || !interest) {
        alert("Harap isi semua field.");
        return; // Hentikan pengiriman form
    }

    // Validasi: Periksa format email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Harap masukkan alamat email yang valid.");
        return; // Hentikan pengiriman form jika email tidak valid
    }

    // Jika semua validasi lolos
    alert("Form berhasil dikirim!");
});

// Scroll to Contact Section
function scrollToContact() {
    const contactSection = document.querySelector(".contact-form"); // Target form kontak
    contactSection.scrollIntoView({ behavior: "smooth" });
}
