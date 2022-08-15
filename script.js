// ====== SCROLL BY NAV LINK

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
// const section = document.querySelectorAll("section");

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

const navLinks = document.querySelectorAll(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

const downArrow = document.querySelector(".down-arrow");
const upArrow = document.querySelector(".up-arrow");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.getBoundingClientRect().top + scrollY - 50;
    const sectionId = current.getAttribute("id");
    const navSection = document.querySelector(
      ".nav a[href*=" + sectionId + "]"
    );

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */

    for (let i = 0; i < sections.length; i++) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navSection.classList.add("active");
      } else {
        navSection.classList.remove("active");
      }

      if (navSection.classList.contains("active")) {
        navSection.classList.add("no-hover");
      } else {
        navSection.classList.remove("no-hover");
      }
    }
  });
}

// ====== SCROLL BY ARROW ICON

// ====== CHANGE THEME  (DARK(current), LIGHT, COLOR(red))

window.addEventListener("load", () => {
  const switchElement = document.querySelector(".switch");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
  }

  switchElement.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  });
});

// ====== CLEAR CONTACT FORM AFTER CLICKING SUBMIT BUTTON

// const form = document.querySelector("form");
// const submitButton = document.querySelector("#submit-btn");
// const formInput = document.querySelector(".form-input");
// const nameInput = document.querySelector(".name-input");

// const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const message = document.getElementById("message").value;

// function sendEmail() {
//   Email.send({
//     SecureToken: "a30267e6-00ae-451a-ad23-319d2482ffc6",

//     To: "sleeepycodes@gmail.com",
//     From: "leahpavone@gmail.com",
//     Subject: "name email",
//     Body: "message"
//   }).then((message) => alert("yes"));
//   console.log("hi");
//   // nameInput.innerHTML = "";
// }
// // clearForm(form);

// // function sendEmail() {
// // }

// submitButton.addEventListener("click", (e) => {
//   // alert("ok");
//   // e.sendEmail();
//   // e.preventDefault();
//   // name.value = "";
//   // email.value = "";
//   // message.value = "";
// });
