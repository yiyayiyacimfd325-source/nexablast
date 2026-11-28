// Nexablast website: the phone menu, the screenshot lightbox, and the hero video only when motion is welcome.
(function () {
  var btn = document.querySelector(".menu-btn"), nav = document.querySelector(".top nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") nav.classList.remove("open"); });
  }
  var hero = document.querySelector(".hero video");
  if (hero && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.removeAttribute("autoplay");
    hero.pause();
  }
  var box = document.querySelector(".lightbox");
  if (box) {
    var img = box.querySelector("img");
    var close = function () { box.classList.remove("on"); img.src = ""; };
    document.querySelectorAll(".gal a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        img.src = a.getAttribute("href");
        img.alt = a.querySelector("img").alt;
        box.classList.add("on");
        box.querySelector("button").focus();
      });
    });
    box.addEventListener("click", function (e) { if (e.target !== img) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
})();
