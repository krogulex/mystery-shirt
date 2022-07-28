(() => {
    const mobileCart = document.querySelector(".js-cart-container");
    const openCartBtn = document.querySelector(".js-open-cart");
    const closeCartBtn = document.querySelector(".js-close-cart");
  
    const toggleMenu = () => {
      const isCartOpen =
        openCartBtn.getAttribute("aria-expanded") === "true" || false;
      openCartBtn.setAttribute("aria-expanded", !isCartOpen);
      mobileCart.classList.toggle("is-open");
  
      const scrollLockMethod = !isCartOpen
        ? "disableBodyScroll"
        : "enableBodyScroll";
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openCartBtn.addEventListener("click", toggleMenu);
    closeCartBtn.addEventListener("click", toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (!e.matches) return;
      mobileCart.classList.remove("is-open");
      openCartBtn.setAttribute("aria-expanded", false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  
    window.onload = function() {
      var anchors = document.getElementsByClassName('cart__button');
      for(var i = 0; i < anchors.length; i++) {
          var anchor = anchors[i];
          anchor.onclick = function() {
            toggleMenu();
          }
      }
  }
  
  })();