// ======  LOADER

// const loaderWrapper = document.querySelector(".loader-wrapper");
const loader = document.querySelector(".loader");
console.log(loader);

// window.addEventListener("load", vanish);
// function vanish() {
//   loader.classList.add("disappear");
// }

window.addEventListener("load", () => {
  setTimeout(function () {
    loader.classList.add("disappear");
  }, 3000);
});

// if (body.classList.contains("light")) {
//   loader.style.backgroundColor = "#fff6f6";
//   setTimeout(function () {
//     loader.classList.add("disappear");
//   }, 2000);
// } else {
//   loader.style.backgroundColor = "#111";
//   setTimeout(function () {
//     loader.classList.add("disappear");
//   }, 2000);
// }

// window.addEventListener("load", () => {
//   if (body.classList.contains("light")) {
//     loader.style.backgroundColor = #fff6f6;
//     setTimeout(function () {
//       loader.classList.add("disappear");
//     }, 2000);
//   } else {
//     loader.style.backgroundColor = #111;
//   setTimeout(function () {
//     loader.classList.add("disappear");
//   }, 2000);
// }
// });

// ====== SCROLL BY NAV LINK

const sections = document.querySelectorAll("section[id]");

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
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
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

// ====== CHANGE THEME & STORE IN LOCAL STORAGE

window.addEventListener("DOMContentLoaded", () => {
  // loaderWrapper.style.display = "none";
  const switchElement = document.querySelector(".switch");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "light");
    document.body.classList.add("light");
  }

  switchElement.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      // loader.style.backgroundColor = "#fff6f6";
    } else {
      localStorage.removeItem("theme");
      // loader.style.backgroundColor = "#111";
    }
  });
});

// ====== ALERT UPON CLICKING SUBMIT CONTACT FORM BUTTON

// const submitButton = document.querySelector("#submitButton");
// let message;

// submitButton.addEventListener("click", () => {
//   message =
//   alert((message) => "GOOD JOB");
// });
// console.log(message);
