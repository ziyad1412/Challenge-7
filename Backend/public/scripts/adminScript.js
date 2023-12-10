document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "http://localhost:3000/cars"; // Ganti dengan URL endpoint API Anda

  // Function untuk mengambil data dari API dan menampilkan dalam tabel
  async function fetchAndDisplayData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Bersihkan konten tabel sebelum menambahkan data baru
      const tableBody = document.querySelector("#adminTable tbody");
      tableBody.innerHTML = "";

      // Loop melalui data dan tambahkan ke dalam tabel
      data.forEach((car) => {
        const row = `
          <tr>
            <td>${car.id}</td>
            <td>${car.plate}</td>
            <!-- Kolom lainnya sesuaikan dengan properti yang Anda miliki -->
            <td>${car.description}</td>
            <td>${car.transmission}</td>
            <td>
              <button class="btn btn-info btn-sm editBtn" data-id="${car.id}">Edit</button>
              <button class="btn btn-danger btn-sm deleteBtn" data-id="${car.id}">Delete</button>
            </td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });

      // Tambahkan event listener untuk tombol Edit dan Delete
      const editButtons = document.querySelectorAll(".editBtn");
      const deleteButtons = document.querySelectorAll(".deleteBtn");

      editButtons.forEach((button) => {
        button.addEventListener("click", handleEdit);
      });

      deleteButtons.forEach((button) => {
        button.addEventListener("click", handleDelete);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Panggil fungsi untuk mengambil dan menampilkan data saat halaman dimuat
  fetchAndDisplayData();

  // Function untuk menangani tombol Edit
  async function handleEdit(event) {
    const carId = event.target.dataset.id;
    // Lakukan operasi edit atau tampilkan form edit
    // Implementasi operasi edit sesuai dengan kebutuhan Anda
    console.log(`Edit car with ID: ${carId}`);
  }

  // Function untuk menangani tombol Delete
  async function handleDelete(event) {
    const carId = event.target.dataset.id;
    // Lakukan operasi hapus
    // Implementasi operasi hapus sesuai dengan kebutuhan Anda
    console.log(`Delete car with ID: ${carId}`);
  }
});
