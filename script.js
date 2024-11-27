        var a = 50;
        var b = 50;
        var c = 0;
        const main = document.getElementById("main1");
        const maan = document.getElementById("main2");
        const winn = document.getElementById("win");
        
        
function play() {
    document.getElementById("hide").classList.toggle("visible");
    c = c + 10; // Menambah nilai `c` setiap kali fungsi ini dipanggil
}

function move() {
    if (c > 1) { // Permainan dimulai hanya jika `c > 1`
        console.log(a);
        a = a + 3; // Menambah tinggi elemen pertama
        main.style.height = a + "%"; 
        b = b - 3; // Mengurangi tinggi elemen kedua
        maan.style.height = b + "%";
    }
}

function movi() {
    if (c > 1) { // Sama seperti `move`, hanya berjalan jika `c > 1`
        console.log(b);
        b = b + 3; // Menambah tinggi elemen kedua
        maan.style.height = b + "%";
        a = a - 3; // Mengurangi tinggi elemen pertama
        main.style.height = a + "%";
    }
}

function winner() {
    if (a === 98) {
        c = 0; // Reset counter
        winn.classList.remove("visible");
        text.innerText = "RED WIN"; // Menampilkan pesan pemenang
        text.style.color = "red"; // Warna pesan merah
    } 
    if (b === 98) {
        c = 0; // Reset counter
        winn.classList.remove("visible");
        text.innerText = "BLUE WIN"; // Menampilkan pesan pemenang
        text.style.color = "blue"; // Warna pesan biru
    }
}
