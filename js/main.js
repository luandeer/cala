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



document.addEventListener('DOMContentLoaded', () => {
  // Cambia el fondo del header si existe
  initCarousels()

});
