/**
 * CONTROL DE LA BARRA LATERAL
 */

// Obtener el botón de menú
const botonMenu = document.getElementById('boton-menu');

// Obtener la barra lateral original y la barra suplente
const sidebar = document.querySelector('.sidebar-container');
const sidebarSuplente = document.querySelector('.sidebar-slider-container');

// Manejar el evento de clic en el botón de menú
botonMenu.addEventListener('click', () => {
  // Verificar el ancho de la ventana del navegador
  if (window.innerWidth >= 1200) {
    // Si el ancho es mayor o igual a 1200px, controlar la barra lateral original
    sidebar.classList.toggle('minimized');
    // Guardar el estado de la barra lateral en la memoria
    localStorage.setItem('sidebarState', sidebar.classList.contains('minimized') ? 'minimized' : 'expanded');
  } else {
    // Si el ancho es menor a 1200px, controlar la barra suplente
    sidebarSuplente.classList.toggle('open');
  }
});

// Manejar el evento de cambio de tamaño de la ventana del navegador
window.addEventListener('resize', () => {
  // Verificar el ancho de la ventana del navegador
  if (window.innerWidth < 1200) {
    // Si el ancho es menor a 1200px, asegurarse de que la barra suplente esté cerrada
    sidebarSuplente.classList.remove('open');
  } else {
    // Si el ancho es mayor o igual a 1200px, obtener el estado de la barra lateral guardado en la memoria
    const sidebarState = localStorage.getItem('sidebarState');
    // Aplicar el estado guardado a la barra lateral original al cargar la página
    if (sidebarState === 'minimized') {
      sidebar.classList.add('minimized');
    } else {
      sidebar.classList.remove('minimized');
    }
  }
});

// Obtener el estado de la barra lateral guardado en la memoria al cargar la página
window.addEventListener('load', () => {
  const sidebarState = localStorage.getItem('sidebarState');
  // Aplicar el estado guardado a la barra lateral original al cargar la página
  if (window.innerWidth >= 1200 && sidebarState === 'minimized') {
    sidebar.classList.add('minimized');
  }
});


/**
 * CONTROL DE TEMA CLARO/OSCURO
*/
// Función para mostrar el cambio de tema
const switchInputs = document.querySelectorAll('.switch input');
const darkIcons = document.querySelectorAll('.dark');
const lightIcons = document.querySelectorAll('.light');
const body = document.querySelector('body');

// Función para guardar el tema seleccionado en localStorage
const saveThemePreference = (theme) => {
  localStorage.setItem('theme', theme);
};

// Función para cargar el tema almacenado en localStorage
const loadThemePreference = () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(savedTheme + '-theme');
    for (let i = 0; i < darkIcons.length; i++) {
      darkIcons[i].style.display = savedTheme === 'dark' ? 'none' : 'flex';
    }
    for (let i = 0; i < lightIcons.length; i++) {
      lightIcons[i].style.display = savedTheme === 'light' ? 'none' : 'flex';
    }
    for (let i = 0; i < switchInputs.length; i++) {
      switchInputs[i].checked = savedTheme === 'dark';
    }
  } else {
    const prefersDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkTheme) {
      body.classList.add('dark-theme');
      saveThemePreference('dark');
    } else {
      body.classList.add('light-theme');
      saveThemePreference('light');
    }
  }
};

// Cargar tema almacenado
loadThemePreference();

// Cambiar tema al cambiar el estado del checkbox o al hacer clic en el icono
const changeTheme = (checked) => {
  const userTheme = checked ? 'dark' : 'light';

  body.classList.remove('dark-theme', 'light-theme');
  body.classList.add(userTheme + '-theme');
  for (let i = 0; i < darkIcons.length; i++) {
    darkIcons[i].style.display = userTheme === 'dark' ? 'none' : 'flex';
  }
  for (let i = 0; i < lightIcons.length; i++) {
    lightIcons[i].style.display = userTheme === 'light' ? 'none' : 'flex';
  }
  saveThemePreference(userTheme);
};

// Actualizar estado del botón en ambas barras al cambiar el tema
for (let i = 0; i < switchInputs.length; i++) {
  switchInputs[i].addEventListener('change', () => {
    const checked = switchInputs[i].checked;

    // Actualizar estado del botón en ambas barras
    for (let j = 0; j < switchInputs.length; j++) {
      switchInputs[j].checked = checked;
    }

    changeTheme(checked);
  });
}

// Agregar evento de clic al icono para cambiar el tema
const darkIconsArray = Array.from(darkIcons);
const lightIconsArray = Array.from(lightIcons);
const iconsArray = darkIconsArray.concat(lightIconsArray);

for (let i = 0; i < iconsArray.length; i++) {
  iconsArray[i].addEventListener('click', () => {
    const checked = !switchInputs[0].checked;

    // Actualizar estado del botón en ambas barras
    for (let j = 0; j < switchInputs.length; j++) {
      switchInputs[j].checked = checked;
    }

    changeTheme(checked);
  });
}
