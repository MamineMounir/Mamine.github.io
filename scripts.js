window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
// BMR

1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;
57;
58;
59;
60;
61;
62;
63;
64;
65;
66;
67;
68;
document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(calculateCalories, 400);

    e.preventDefault();
  });

function calculateCalories(e) {
  const age = document.getElementById("age");
  const gender = document.querySelector(
    'input[name="customRadioInline1"]:checked'
  );
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const activity = document.getElementById("list").value;
  const totalCalories = document.getElementById("total-calories");

  if (
    age.value === "" ||
    weight.value === "" ||
    height.value === "" ||
    80 < age.value ||
    age.value < 15
  ) {
    errorMessage("Please make sure the values you entered are correct");
  } else if (gender.id === "male" && activity === "1") {
    totalCalories.value =
      1.2 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "2") {
    totalCalories.value =
      1.375 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "3") {
    totalCalories.value =
      1.55 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "4") {
    totalCalories.value =
      1.725 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "5") {
    totalCalories.value =
      1.9 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "1") {
    totalCalories.value =
      1.2 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "2") {
    totalCalories.value =
      1.375 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "3") {
    totalCalories.value =
      1.55 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "4") {
    totalCalories.value =
      1.725 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else {
    totalCalories.value =
      1.9 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height) -
        4.676 * parseFloat(age.value));
  }

  document.getElementById("results").style.display = "block";

  document.getElementById("loading").style.display = "none";
}

function errorMessage(error) {
  document.getElementById("results").style.display = "none";

  document.getElementById("loading").style.display = "none";
  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

//
/* video */
let video1 = document.getElementById("myVideo1");
let video2 = document.getElementById("myVideo2");
let iconPlay1 = document.getElementById("iconPlay1");
let iconPlay2 = document.getElementById("iconPlay2");

iconPlay1.addEventListener("click", function () {
  video1.play();
});
iconPlay2.addEventListener("click", function () {
  video2.play();
});
document
  .getElementById("closeModalButton1")
  .addEventListener("click", function () {
    video1.pause();
  });

document
  .getElementById("closeModalButton2")
  .addEventListener("click", function () {
    video2.pause();
  });
// adding x for close to stop the video
let closeIcon1 = document.getElementById("close-icon1");
let closeIcon2 = document.getElementById("close-icon2");
closeIcon1.addEventListener("click", function () {
  video1.pause();
});
closeIcon2.addEventListener("click", function () {
  video2.pause();
});
