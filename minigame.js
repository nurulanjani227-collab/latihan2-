//variabel untuk menyimpan porsi makan kucing 
// dengan nilai awal nol (0))
let porsi = 0

// siapkan aset suara di variabel 
let suaramakan = new Audio ("minigame/makanmakan.mp3")
let suaramain = new Audio ("minigame/main.mp3")
let suarareset = new Audio ("minigame/reset.mp3")

function beriMakan() {
  // efek suara makan
  suaramakan. currentTime = 0
  suaramakan. play()
  
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
  // efek suara main
  suaramain. currentTime = 0
  suaramain. play()
  
// mengurangi porsi 1 tapi cegah jangan sampe negatif 
if (porsi > 0) {
  porsi = porsi - 1
}

updatetampilan()
}

function reset() {
  // efek suara reset
  suarareset. currentTime = 0
  suarareset. play()
  
porsi = 0

updatetampilan() 
}

//fungsi untuk memperbarui tampilan html
