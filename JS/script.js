document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan form agar tidak disubmit secara otomatis

    const nameInput = document.getElementById("name-input");
    const name = nameInput.value.trim();

    // Validasi: Jika input kosong
    if (name === "") {
        document.getElementById("error-name").innerHTML = "Name cannot be empty!";
    } else {
        // Jika valid, tampilkan nama di header
        document.getElementById("name").innerHTML = name;
        document.getElementById("error-name").innerHTML = ""; // Menghapus pesan error
        nameInput.value = ""; // Mengosongkan input setelah submit
    }
});
