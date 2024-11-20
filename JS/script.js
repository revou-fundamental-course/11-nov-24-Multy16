let slideIndex = 1;

// Tampilkan slide berdasarkan indeks
function showDivs(n) {
    const slides = document.getElementsByClassName("img-slideshow");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Navigasi slide
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Inisialisasi slide pertama
showDivs(slideIndex);

// Validasi form
function validateForm() {
    // Mengambil nilai input
    const nama = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;

    // Mengambil elemen untuk menampilkan pesan error
    const errorName = document.getElementById("error-name");

    // Validasi nama
    if (nama.trim() === "") {
        errorName.innerHTML = "Nama tidak boleh kosong!";
        return false; // Mencegah form untuk di-submit
    }

    // Validasi tanggal lahir
    if (birthDate.trim() === "") {
        errorName.innerHTML = "Tanggal lahir tidak boleh kosong!";
        return false; // Mencegah form untuk di-submit
    }

    // Jika valid, tampilkan nama di elemen tertentu
    setName(nama);

    return false; // Mencegah form untuk reload atau submit
}

// Fungsi untuk mengubah nama pada elemen dengan id 'name'
function setName(name) {
    // Mengubah nama yang ditampilkan di elemen dengan id 'name'
    document.getElementById("name").innerHTML = name;
    // Menghapus pesan error (jika ada)
    document.getElementById("error-name").innerHTML = "";
}

function plusDivs(n) {
    console.log(`Navigating slides by: ${n}`);
    showDivs(slideIndex += n);
}