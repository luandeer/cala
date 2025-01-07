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
