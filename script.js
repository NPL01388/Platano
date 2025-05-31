// Seleccionamos todos los títulos que queremos observar
const titles = document.querySelectorAll('h2, h3');

function onScroll() {
  let closestTitle = null;
  let closestDistance = window.innerHeight; // inicializamos con máximo valor

  titles.forEach(title => {
    const rect = title.getBoundingClientRect();
    // Queremos el título que esté más cerca del top (pero no fuera de pantalla arriba)
    if (rect.top >= 0 && rect.top < closestDistance) {
      closestDistance = rect.top;
      closestTitle = title;
    }
  });

  // Limpiamos todas las clases
  titles.forEach(title => title.classList.remove('active'));

  // Si encontramos un título válido, le ponemos active
  if (closestTitle) {
    closestTitle.classList.add('active');
  }
}

// Ejecutamos onScroll al cargar la página y al hacer scroll
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
