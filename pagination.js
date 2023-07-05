// Menghubungkan elemen-elemen HTML yang dibutuhkan
var placesList = document.getElementById('places-list');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

// Jumlah objek wisata yang ditampilkan per halaman
var itemsPerPage = 3;

// Menghitung jumlah halaman berdasarkan jumlah objek wisata dan objek wisata per halaman
var totalPages = Math.ceil(places.length / itemsPerPage);

// Inisialisasi halaman saat pertama kali dimuat
var currentPage = 1;

// Fungsi untuk mengganti halaman
function changePage(page) {
  // Menghitung indeks awal dan akhir objek wisata yang akan ditampilkan
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Menampilkan objek wisata pada halaman yang dipilih
  var placesToShow = places.slice(startIndex, endIndex);
  placesList.innerHTML = '';

  for (var i = 0; i < placesToShow.length; i++) {
    var place = placesToShow[i];
    var listItem = document.createElement('li');

    var image = document.createElement('img');
    image.src = place.image;
    listItem.appendChild(image);

    var name = document.createElement('h3');
    name.innerText = place.name;
    listItem.appendChild(name);

    var description = document.createElement('p');
    description.innerText = place.description;
    listItem.appendChild(description);

    placesList.appendChild(listItem);
  }

  // Menentukan visibilitas tombol sebelumnya dan selanjutnya
  prevButton.disabled = page === 1;
  nextButton.disabled = page === totalPages;
}

// Mengganti halaman ke halaman berikutnya
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    changePage(currentPage);
  }
}

// Mengganti halaman ke halaman sebelumnya
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
}

// Mengatur event listener untuk tombol sebelumnya dan selanjutnya
prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);

// Menampilkan halaman pertama saat pertama kali dimuat
changePage(currentPage);
