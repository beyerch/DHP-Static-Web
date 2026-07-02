/* Mobile nav: toggle the menu, and let the Products item expand on tap.
   Desktop hover/focus behavior is pure CSS — this only matters on small screens. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  // On small screens, tapping a parent with a submenu expands it instead of navigating.
  document.querySelectorAll(".has-sub > a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 860px)").matches) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
})();
