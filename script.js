const nav_bar = document.getElementById("navBar");
const header = document.getElementById("nav");
const openMenu = document.getElementById("open-link");
const closeMenu = document.getElementById("close-link");
const mobileMenu = document.getElementById("link");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav_bar.classList.add("bg-color");
    nav_bar.style.zIndex = 500;
  } else {
    nav_bar.classList.remove("bg-color");
  }
  console.log(header.scrollHeight);
});

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("closed");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("closed");
});
const AboutPage = document.getElementById("about");
const internPage = document.getElementById("internship");
const contactPage = document.getElementById("contact");

function ViewAboutPage() {
  AboutPage.style.scrollMarginTop = "70px";
  AboutPage.scrollIntoView({ behavior: "smooth" });
}
function ViewInternPage() {
  internPage.style.scrollMarginTop = "130px";
  internPage.scrollIntoView({ behavior: "smooth" });
}
function ViewContactPage() {
  contactPage.style.scrollMarginTop = "130px";
  contactPage.scrollIntoView({ behavior: "smooth" });
}
