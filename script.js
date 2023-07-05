// Inisialisasi peta dan DirectionsService
var map, directionsService, directionsRenderer, currentLocationMarker, infoWindow;
var places = [
  {
    nama: 'Curug Sidomba Kuningan',
    latitude: -6.896345778559867, 
    longitude: 108.46620758302909,
    deskripsi: 'Curug atau air terjun selanjutnya yang ada di Kuningan bernama Curug Sidomba, yang berada di kawasan Objek Wisata Bumi Perkemahan Sidomba.Trekking menuju Curug Sidomba pun sangat mudah, kamu tinggal menapaki tangga yang sudah tertata dengan rapih. Dengan jarak sekitar 300 meter.<br><br>Lokasi : Desa Peusing, Jalaksana, Kuningan, Jawa Barat.<br>Jam buka: 07.00 – 17.00<br>Tiket masuk: Rp. 10.000',
    gambar: 'Curug-Sidomba.jpg'
  },
  {
    nama: 'Curug Bangkong Kuningan',
    latitude: -7.005171560861657, 
    longitude: 108.4248197632275,
    deskripsi: 'Curug Bangkong Kuningan memiliki tinggi sekitar 15 hingga 20 meter dengan lebar sekitar 3 meter, dimana debit airnya cukup deras. Ragam wisata seru yang dapat kamu lakukan sangat beragam dan pastinya seru banget.Jalur trekkingnya pun sangat mudah untuk dilalui, sehingga dapat dijadikan sebagai tempat wisata bagi keluarga di akhir pekan ini.<br><br>Lokasi: Desa Kertawiarama, Nusaherang, Kuningan, Jawa Barat.<br>Jam buka: 08.00 – 17.00<br> Tiket masuk: Rp. 7.000,-',
    gambar: 'Curug-Bangkong-Kuningan.jpg'
  },
  {
    nama: 'Waduk Darma Kuningan',
    latitude: -7.011851489082914, 
    longitude: 108.4087774641534,
    deskripsi: 'Waduk Darma Kuningan menjadi destinasi wisata kebanggaan masyarakat Kuningan, dengan suguhan panorama alamnya yang seakan memiliki magic tersendiri.Wisata Waduk Darma Kuningan memiliki banyak sekali fasilitas yang dapat kamu manfaatkan untuk mengisi waktu hulang-healing bersama teman ataupun pasangan.<br>Lokasi: Desa Jagara, Darma. Kuningan, Jawa Barat.<br>Jam buka: 24 jam<br>Tiket masuk: Rp. 10.000',
    gambar: 'view-terkini-waduk-darma.jpg'
  },
  {
    nama: 'Telaga Remis',
    latitude: -6.788529339330143, 
    longitude: 108.41554940721116,
    deskripsi: 'Telaga Remis, namanya pernah hits dalam bentuk sebuah lagu yang diciptakan oleh Nano. S yang dinyanyikan oleh Nining Meida. Yang menggambarkan keindahan dari Telaga Remis yang romantis.Telaga atau Talaga artinya danau, Telaga Remis memiliki luas sekitar 3,25 hektar dengan dikelilingi pohon-pohon besar. Kamu dapat mencoba mengelilingi area danau dengan menggunakan wahana permainan yang ada.',
    gambar: 'telaga-remis.jpg'
  },
  {
    nama: ' Lembah Cilengkrang',
    latitude: -6.935619189013972, 
    longitude: 108.43802211476005,
    deskripsi: 'Lembah Cilengkrang berada di kawasan Konversi Taman Nasional Gunung Ciremai, yang memberikan sensasi berendam kolam air panas di tengah suasana alam yang asri dan sejuk.Sebelumnya kamu harus melakukan trekking terlebih dahulu, dengan waktu tempuh hampir 40 menit. Jika merasa lelah kamu dapat beristirahat di tempat yang sudah disediakan sambil hunting foto kece.',
    gambar: 'salah-satu-kolam-air-panas.jpg'
  },
  {
    nama: 'Taman Wisata Alam Linggarjati',
    latitude: -6.883564111663563, 
    longitude: 108.47704285419327,
    deskripsi: 'Taman Wisata Alam Linggarjati berada di tengah-tengah hutan pinus, so pastinya suasana sejuk dan nyaman akan dapat kamu rasakan.Tersedia banyak sekali fasilitas serta daya tarik yang dapat kamu eksplor ketika berada di Taman Wisata Alam Linggarjati, mulai dari berenang hingga beberapa keseruan lainnya.',
    gambar: 'seru-seruan-di-setu-linggarjati.jpg'
  },
  {
    nama: 'Gedung Perundingan Linggarjati',
    latitude: -6.881233044662845, 
    longitude: 108.4747693676862,
    deskripsi: 'Perundingan Linggarjati menjadi bagian dari sejarah perjuangan bangsa Indonesia melawan penjajah Belanda. Nah, jika Anda penasaran dengan lokasi berlangsungnya perundingan bersejarah tersebut, datang saja ke Gedung Perundingan Linggarjati. Tempat bersejarah ini menjadi salah satu tempat wisata di Kuningan yang menarik untuk dikunjungi guna mengenang masa-masa perjuangan dulu. Lokasinya berada di Desa Linggarjati, Kecamatan Cilimus.<br>Sebagai tempat bersejarah, bangunan dan perabotan yang ada tidak dilakukan perombakan, sehingga masih sama persis dengan fakta sejarahnya. Sebagai museum, bangunan ini dilengkapi dengan foto-foto dokumentasi yang dipajang di dinding gedung. Sebagai informasi tambahan, tempat wisata ini dibuka untuk umum setiap hari dengan pembagian waktu 07.00-15.00 WIB untuk hari Senin hingga Jumat, sedangkan Sabtu dan Minggu lebih lama yakni mulai 08.00-17.00 WIB.',
    gambar: 'panorama-alam-yang-sejuk.jpg'
  },
  {
    nama: 'Taman Purbakala Cipari',
    latitude: -6.962306099191165, 
    longitude: 108.46932555420547,
    deskripsi: 'Satu lagi tempat wisata di Kuningan yang memberikan sensasi wisata sejarah, hanya bedanya Taman Purbakala Cipari dihiasi dengan spot taman yang cantik.Banyak benda-benda pusaka peningalan zaman dulu yang apat kamu tengok di Taman Purbakala Cipari, di kawasan ini pun terdapat sebuah museum yang menyimpan berbagai benda-benda peninggalan yang tersimpan rapih.',
    gambar: 'taman-yang-indah.jpg'
  },
  {
    nama: 'Curug Ngelay',
    latitude: -7.101008448236482, 
    longitude: 108.48334946583894,
    deskripsi: 'Curug Ngelay merupakan salah satu air terjun atau curug tertinggi yang ada di Kuningan, dimana ketinggiannya mencapai 100 meter dengan lebar sekitar 50 meter.Hanya saja untuk menikmati keindahan curugnya, kamu harus melakukan trekking yang cukup menantang terlebih dahulu.',
    gambar: 'healing-di-curug-ngelay.jpg'
  },
];

// Konfigurasi paginasi
var itemsPerPage = 3; // Jumlah item per halaman
var currentPage = 1; // Halaman saat ini


// Fungsi untuk menampilkan data destinasi wisata sesuai halaman yang dipilih
// Fungsi untuk menampilkan data destinasi wisata sesuai halaman yang dipilih
function displayPlaces() {
  // Tampilkan data destinasi wisata di halaman
  places.forEach(function(place) {
    console.log(place.nama);
    console.log(place.latitude);
    console.log(place.longitude);
    console.log(place.deskripsi);
    console.log(place.gambar);
  });
}

// Panggil fungsi untuk menampilkan data destinasi wisata pada halaman pertama
displayPlaces();

function initMap() {
  // Koordinat awal peta
  var kuningan = {lat: -6.9748, lng: 108.4852};

  // Membuat peta
  map = new google.maps.Map(document.getElementById('map'), {
    center: kuningan,
    zoom: 11
  });

  // Membuat DirectionsService dan DirectionsRenderer
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  // Mengambil data objek wisata dari backend atau database
  

  // Menambahkan marker untuk setiap objek wisata
  document.getElementById('places').innerHTML = '';

  // Menampilkan data destinasi wisata di halaman saat ini
  displayPlaces();

  places.forEach(function(place) {
    var marker = new google.maps.Marker({
      position: {lat: place.latitude, lng: place.longitude},
      map: map,
      title: place.nama
    });

    // Menampilkan informasi objek wisata saat marker diklik
    marker.addListener('click', function() {
      var content = '<h3>' + place.nama + '</h3>' +
                    '<p>' + place.deskripsi + '</p>' +
                    '<button onclick="calculateAndDisplayRoute(' + place.latitude + ', ' + place.longitude + ')">Tampilkan Rute</button>';
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });

    // Menambahkan data objek wisata ke daftar
    var listItem = document.createElement('div');
listItem.className = 'col-lg-4';
listItem.innerHTML = '<div class="card border-primary">' +
                     '<img src="' + place.gambar + '" class="card-img-top custom-img" alt="' + place.nama + '">' +
                     '<div class="card-body">' +
                     '<h5 class="card-title">' + place.nama + '</h5>' +
                     '<p class="card-text">' + place.deskripsi + '</p>' +
                     '<button onclick="calculateAndDisplayRoute(' + place.latitude + ', ' + place.longitude + ')" class="btn btn-primary">Tampilkan Rute</button>' +
                     '</div>' +
                     '</div>';
document.getElementById('places').appendChild(listItem);

  });

  // Membuat InfoWindow
  infoWindow = new google.maps.InfoWindow();

  // Menambahkan marker posisi saat ini
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      currentLocationMarker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: 'Posisi Saya'
      });
    });
  }
}

// Menampilkan rute perjalanan tercepat dari posisi saat ini ke posisi tujuan
function calculateAndDisplayRoute(latitude, longitude) {
  if (currentLocationMarker) {
    var start = currentLocationMarker.getPosition();

    // Membuat URL untuk mengarahkan posisi saat ini ke tujuan
    var url = 'https://www.google.com/maps/dir/?api=1&origin=' + start.lat() + ',' + start.lng() +
              '&destination=' + latitude + ',' + longitude;

    // Membuka URL di tab baru atau jendela baru
    window.open(url);
  } else {
    alert('Tidak dapat menemukan posisi saat ini.');
  }
}

// Memanggil fungsi initMap() setelah konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  initMap();
});
