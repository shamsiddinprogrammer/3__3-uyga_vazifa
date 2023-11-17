document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("menu-burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open")
  })
})