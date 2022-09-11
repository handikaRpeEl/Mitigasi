const btn = document.querySelectorAll(".card button")

function clickbutton(idnya) {
  const carde = document.querySelector("#card" + idnya)
  carde.classList.toggle("flip_card")
}

//* navigasi 
// *ayano jamkos mode
const inputNav = document.querySelector("#nav_input");
const nyala = document.querySelector(".icon_on");
const mati = document.querySelector(".icon_off");
const menu = document.querySelector(".nav nav ul");

inputNav.addEventListener("click", function() {
  nyala.classList.toggle("d-none");
  mati.classList.toggle("d-none");
  menu.classList.toggle("menu_anim")
})

// todo scroll effect
const kredit = document.querySelector(".credit")
kredit.addEventListener("click", function() {
  alert("jika anda memiliki lisensi gambar dalam situs ini harap menghubungi author untuk penggantian gambar atau pencantuman credit")
})