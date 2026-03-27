(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var gf = document.getElementById("google-fonts");
  if (gf) gf.media = "all";

  var el = document.getElementById("email-link");
  if (el) {
    var u = "ultrafoxswing";
    var d = "gmail.com";
    el.href = "mai" + "lto:" + u + "@" + d;
  }

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  var mq = window.matchMedia("(max-width: 47.99em)");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (mq.matches) setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  var sections = document.querySelectorAll("section[id]");
  var navLinks = nav.querySelectorAll("a[href^='#']");

  if (sections.length && navLinks.length) {
    var headerH = document.querySelector(".site-header").offsetHeight;

    function updateActive() {
      var scrollY = window.scrollY + headerH + 40;
      var current = "";

      sections.forEach(function (section) {
        if (section.offsetTop <= scrollY) {
          current = section.getAttribute("id");
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = sections[sections.length - 1].getAttribute("id");
      }

      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
      });
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    });

    updateActive();
  }

  var dialog = document.getElementById("lightbox");
  var dialogImg = dialog ? dialog.querySelector(".lightbox-img") : null;
  var grid = document.querySelector(".photo-grid");

  if (dialog && dialogImg && grid) {
    function openLightbox(card) {
      var img = card.querySelector("img");
      if (!img) return;
      dialogImg.src = img.getAttribute("data-full") || img.src;
      dialogImg.alt = img.alt;
      dialog.showModal();
    }

    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".photo-card");
      if (card) openLightbox(card);
    });

    dialog.querySelector(".lightbox-close").addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", function () {
      dialogImg.src = "";
    });
  }
})();
