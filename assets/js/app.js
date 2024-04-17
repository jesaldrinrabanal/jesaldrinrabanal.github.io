// Navbar fixed top after scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// View Demo Modal
$(document).ready(function () {
  $("#view-demo-modal").on("hide.bs.modal", function () {
    $("#view-demo-video").attr("src", "");
  });

  $("#view-demo-modal").on("show.bs.modal", function () {
    $("#view-demo-video").attr("src", "./assets/images/ARIS_Demo.mp4");
  });
});

// Footer Credit Year
const creditYear = new Date().getFullYear();
document.getElementById("credit-year").innerHTML = creditYear;

// AOS - Animate On Scroll
AOS.init({
  duration: 800,
});
