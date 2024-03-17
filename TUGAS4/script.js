function tampilkanPilihan() {
    // Mendapatkan nilai input nama
    const nama = document.getElementById('nama').value;
    // Mendapatkan nilai input jumlah
    const jumlah = document.getElementById('jumlah').value;

    // Mengarahkan pengguna ke halaman baru dengan parameter nama dan jumlah
    window.location.href = `halaman-baru.html?nama=${nama}&jumlah=${jumlah}`;
}
