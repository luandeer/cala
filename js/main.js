



function initCarousels() {
  // Carrusel Home Banner
  const historiaNosotros = document.querySelector('.carouselhistoriaNosotros');
  if (historiaNosotros) {
    new Swiper('.carouselhistoriaNosotros', {

      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.custom-next-historia',
        prevEl: '.custom-prev-historia',
        disabledClass: 'swiper-button-disabled',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,

        },

      },
      effect: 'slide',
      centeredSlides: false,
    });
  }

  const productoshome = document.querySelector('.carouselProductosHome');
  if (productoshome) {
    new Swiper('.carouselProductosHome', {

      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.custom-next-productHome',
        prevEl: '.custom-prev-productHome',
        disabledClass: 'swiper-button-disabled',
      },
      effect: 'slide',
      centeredSlides: false,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2.4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1.7,
          spaceBetween: 10,

        },

      },
    });
  }

  const marcasNoticias = document.querySelector('.swiperMovilMarcasNoticias');
  if (marcasNoticias) {
    new Swiper('.swiperMovilMarcasNoticias', {

      spaceBetween: 10,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: '.custom-next-productHome',
      //   prevEl: '.custom-prev-productHome',
      //   disabledClass: 'swiper-button-disabled',
      // },
      effect: 'slide',
      centeredSlides: false,
      breakpoints: {
        0: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        450: {
          slidesPerView: 2.4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1.7,
          spaceBetween: 10,

        },

      },
    });
  }


  const noticiasHome = document.querySelector('.carouselNoticiasHome');
  if (noticiasHome) {
    new Swiper('.carouselNoticiasHome', {
      slidesPerView: 2.7,
      spaceBetween: 0,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.custom-next-noticiasHome',
        prevEl: '.custom-prev-noticiasHome',
        disabledClass: 'swiper-button-disabled',
      },
      effect: 'slide',
      centeredSlides: false,
    });
  }



  // Carrusel Propiedades destacadas
  const productCarousel = document.querySelector('.carouselProduct');
  if (productCarousel) {
    new Swiper('.carouselProduct', {
      slidesPerView: 1,
      loop: false,
      pagination: {
        el: '.swiper-pagination-home-destacadas',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-next-product',
        prevEl: '.custom-prev-product',
        disabledClass: 'swiper-button-disabled',
      },
      effect: 'slide',
      centeredSlides: false,
      // breakpoints: {
      //   0: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //   },
      //   450: {
      //     slidesPerView: 1,
      //     spaceBetween: 10,
      //     allowTouchMove: true,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //     allowTouchMove: false,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //     spaceBetween: 20,
      //     allowTouchMove: false,

      //   },
      //   1536: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //     allowTouchMove: false,
      //   },
      // },
    });
  }

}


//link active
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu__link");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    // Si el href del enlace coincide con la ruta actual
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});



//navbar
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  if (!nav) return;

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;

    if (scroll > 90) {
      nav.classList.add("scrolltop");
    } else {
      nav.classList.remove("scrolltop");
    }
  };
});

/** accordion */
function initAccordions(selector = ".accordion") {
  const containers = document.querySelectorAll(selector);

  containers.forEach(container => {
    const items = container.querySelectorAll("button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      // Cerrar todos los elementos del acordeón actual
      items.forEach(item => item.setAttribute("aria-expanded", "false"));

      // Abrir el elemento actual si estaba cerrado
      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    // Agregar eventos a los botones
    items.forEach(item => item.addEventListener("click", toggleAccordion));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Cambia el fondo del header si existe
  initCarousels()
  initAccordions();

});


(function manageTabs() {
  /**
   * Cambia el botón activo dentro de su contenedor.
   * @param {HTMLElement} button - El botón que se activará.
   */
  function setActiveTab(button) {
    const tabContainer = button.closest('.tab-container'); // Encuentra el contenedor principal del botón

    if (tabContainer) {
      // Quitar la clase activa de todos los botones dentro del contenedor
      const buttons = tabContainer.querySelectorAll('.tab-button');
      buttons.forEach(btn => btn.classList.remove('active-tab'));

      // Activar el botón seleccionado
      button.classList.add('active-tab');
    }
  }

  /**
   * Inicializa los botones activos en cada contenedor al cargar la página.
   */
  function initializeActiveTabs() {
    const tabContainers = document.querySelectorAll('.tab-container');

    tabContainers.forEach(container => {
      // Buscar si ya hay un botón activo en el contenedor
      const activeButton = container.querySelector('.tab-button.active-tab');

      if (!activeButton) {
        // Si no hay un botón activo, marcar el primero como activo
        const firstButton = container.querySelector('.tab-button');
        if (firstButton) {
          firstButton.classList.add('active-tab');
        }
      }
    });
  }

  /**
   * Agrega el evento de clic a los botones de pestañas dentro de cada contenedor.
   */
  function attachButtonEvents() {
    const buttons = document.querySelectorAll('.tab-container .tab-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => setActiveTab(button));
    });
  }

  // Ejecutar las funciones al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    initializeActiveTabs(); // Configurar botones activos por defecto
    attachButtonEvents();   // Asignar eventos de clic a los botones
  });
})();


/** menu responsive **/
(() => {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const iconHamburger = document.getElementById("iconHamburger");
  const iconClose = document.getElementById("iconClose");
  const body = document.body;

  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("translate-y-0");

    // Alternar menú
    mobileMenu.classList.toggle("-translate-y-full", isOpen);
    mobileMenu.classList.toggle("translate-y-0", !isOpen);

    // Alternar visibilidad de los íconos
    iconHamburger.classList.toggle("hidden", !isOpen);
    iconClose.classList.toggle("hidden", isOpen);

    // Fijar el contenido para que no sea desplazable
    body.classList.toggle("no-scroll", !isOpen);
  });
})();





/*select personalizado oficial*/
document.addEventListener("DOMContentLoaded", () => {
  const selectContainers = document.querySelectorAll(".unique-select-container");

  selectContainers.forEach((container) => {
    const trigger = container.querySelector(".unique-select-trigger");
    const options = container.querySelectorAll(".unique-select-option");
    const menu = container.querySelector(".unique-select-options");
    const hiddenInput = container.querySelector("input[type='hidden']");
    const display = trigger.querySelector(".unique-select-display");

    // Abre o cierra el menú al hacer clic en el botón
    trigger.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Manejar selección de opciones
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        const text = option.innerText;

        // Eliminar la clase "selected" de todas las opciones
        options.forEach(opt => opt.classList.remove("selected"));

        // Agregar la clase "selected" a la opción seleccionada
        option.classList.add("selected");

        // Actualiza el texto mostrado y el valor oculto
        display.innerText = text;
        hiddenInput.value = value;

        // Cierra el menú
        menu.classList.add("hidden");
      });
    });

    // Cierra el menú al hacer clic fuera del contenedor
    document.addEventListener("click", (event) => {
      if (!container.contains(event.target)) {
        menu.classList.add("hidden");
      }
    });
  });
});

