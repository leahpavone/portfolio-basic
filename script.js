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

const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// ====== SEND EMAIL THROUGH CONACT FORM

// Email.send({

//   Host : "smtp.elasticemail.com",
//   Username : "leahpavone@gmail.com",
//   Password : "41C61BEA9BBABF467D92550575161EC5298E",
//   To : 'them@website.com',
//   From : "you@isp.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );

// function sendEmail() {
//   Email.send({
//       Host : "ssmtp.elasticemail.com",
//       Username : "leahpavone@gmail.com",
//       Password : "41C61BEA9BBABF467D92550575161EC5298E",
//       To : 'leahpavone@gmail.com',
//       From : "sender@example.com",
//       Subject : "Test email",
//       Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//   }).then(
//     message => alert(message)
//   );
//   }

// secureToken: '',
