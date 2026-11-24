//variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal nol (0))
let porsi = 0

function beriMakan() {
// 1. ambil teks dari input angka kotak teks
let teksInput = document. getElementById('input-makanan').value 

// 2. ubah string menjadi angka 
let jumlahmakanan = Number(teksInput)
  
// 3. operasi penjumlahan angka  
porsi = porsi + jumlahmakanan

  updatetampilan()
}

// fungsi mengajak main kucing (porsi di kurangi 1)
function ajakmain() {
// mengurangi porsi 1 tapi cegah jangan sampe negatif 
if (porsi > 0) {
  porsi = porsi - 1
}

updatetampilan()
}

function reset() {
porsi = 0

updatetampilan() 
}

//fungsi untuk memperbarui tampilan html
function updatetampilan() {
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 10) {
    // ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing gemuk.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk😻💸"
  } else if (porsi >= 5) {
    // ganti gambar kucing menjadi kucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing sedang.jpg"
    
    // menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing sedang😼🤏🏻"
  } else {
        // ganti gambar kucing menjadi kucing kurus
    document.getElementById('foto-kucing').src = "gambar/kucing kurus.jpg"
    
    // menampilkan tulisan kucing kurus
    document.getElementById('status-kucing').innerText = "kucing kurus 🤏🏻"
  }
}