  
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    const openIcon = document.getElementById("menu-open");
    const closeIcon = document.getElementById("menu-close");

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.contains("max-h-0");

      if (isOpen) {
        menu.classList.remove("max-h-0");
        menu.classList.add("max-h-96"); // altura para animación
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        menu.classList.add("max-h-0");
        menu.classList.remove("max-h-96");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });
    