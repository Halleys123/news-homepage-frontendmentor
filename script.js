console.log("Hello World!");
document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");
  if (window.matchMedia("(min-width: 505px)").matches) {
    console.log("Desktop");
    document.querySelectorAll(".mobileVersion").forEach((element) => {
      element.classList.add("hide");
    });
  } else {
    console.log("Mobile");
    document.querySelectorAll(".mobileVersion").forEach((element) => {
      element.classList.remove("hide");
      document.querySelector(".headerRights").classList.add("mobileNav");
    });
  }
});
document.querySelector(".open").addEventListener("click", function (e) {
  document.querySelector(".mobileNav").classList.add("openIt");
  document.querySelector("body").classList.add("darken");
  document.querySelector(".header").classList.add("darken");
});
document.querySelector(".close").addEventListener("click", function (e) {
  document.querySelector(".mobileNav").classList.remove("openIt");
  document.querySelector("body").classList.remove("darken");
  document.querySelector(".header").classList.remove("darken");
});

//intersection observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.style.position = "sticky";
      entry.target.style.top = "0";
      console.log(entry);
    }
  });
}, options);

observer.observe(document.querySelector(".header"));
