// coba kalkulator
function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}
function getInputValue() {
  let input = event.target.innerText;
  console.log(input);
  printValue(input);
}
function printValue(val) {
  let out = document.querySelector("#result");
  let current = out.innerHTML;
  if (out.innerHTML == "0") {
    out.innerHTML = "";
    out.innerHTML += val;
    out.innerHTML += current;
  } else {
    out.innerHTML = "";
    out.innerHTML += current;
    out.innerHTML += val;
  }
}
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute("onclick", "getInputValue()");
}
// akhir

// operator typeof
let data;
const typeData = typeof data;
console.log(`${typeData}`);
let data_null = null;
const typeDataNull = typeof data_null;
console.log(`${typeDataNull}`);
// akhir

// ternary operator
const nilai = 80;
let ucapan;
if (nilai >= 75) {
  ucapan = "selamat anda lulus";
} else {
  ucapan = "silahkan coba lagi";
}
console.log(`${ucapan}`);
ucapan = nilai >= 75 ? "selamat anda lulus" : "silahkan coba lagi"; //inilah ternary
console.log(`${ucapan}`);
// akhir

// operator nullish coalescing
let parameter;
let data1 = parameter;
if (data1 === undefined || data === null) {
  data1 = "nilai default";
}
console.log(`${data1}`);
data1 = parameter ?? "nilai default"; //inilah coalescing
console.log(`${data1}`);
// akhir

function iseng() {
  console.log("hello world");
}
iseng();
iseng();

function cetakNama() {
  return "halo nama saya andi";
}
document.writeln(cetakNama());

function penjumlahan(a, b) {
  let total;
  total = a + b;
  return total;
}
document.writeln(penjumlahan(1, 2));
console.log(penjumlahan(3, 4));

function PenjumlahanDuaKubus(a, b) {
  let volumeA, volumeB, total;
  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;
  return total;
}
console.log(PenjumlahanDuaKubus(8, 3));

function tambah(a, b) {
  return a + b;
}
let Hasil = tambah(5, 10);
Hasil += 1;
console.log(Hasil);

// function ModifikasiTambah(a, b) {
//   return a + b;
// }
// // let a = prompt("masukkan nilai 1 :");
// let a = parseInt(prompt("masukkan nilai 1 :"));
// // let b = prompt("masukkan nilai 2 :");
// let b = parseInt(prompt("masukkan nilai 2 :"));
// let Hasil1 = ModifikasiTambah(a, b);
// console.log(Hasil1);

function Modifikasi_tambah() {
  let Hasil2 = 0;
  for (let i = 0; i < arguments.length; i++) {
    Hasil2 += arguments[i];
  }
  return Hasil2;
}
let coba = Modifikasi_tambah(0, 1, 2);
console.log(coba);

let errey = ["andi", "sembada", "oke", "ganteng"];
for (let i = 0; i < errey.length; i++) {
  console.log(errey[i]);
}
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ["Eni", "Tami", "RUdi"];
nama.forEach(function (p, e) {
  console.log(p + e);
});
// belajar if dan else menggunakan pop up
/*let a = prompt("masukkan angka :");
if (a == 1) {
  alert("anda memasukkan angka yang benar yaitu 1");
}
const masuk = confirm("Anda yakin mau masuk?");
if (masuk) {
  const name = prompt("Siapa nama anda?");
  alert(`Hello ${name}`);
} else {
  alert("bye bye");
}*/
