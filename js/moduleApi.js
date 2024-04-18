const apiBaseUrl = 'https://api-colombia.com/api/';

// Obtener los elementos necesarios por su ID
const selectVersion = document.getElementById('selectVersion');
const selectData = document.getElementById('selectData');
const btnSolicitar = document.getElementById('btnSolicitar');
const resultadoDiv = document.querySelector('.resultado');

// Agregar un evento al botón
btnSolicitar.addEventListener('click', function() {
  // Obtener el valor de la versión y los datos seleccionados
  const version = selectVersion.value;
  const data = selectData.value;

  // Construir la URL de la API basada en la versión y los datos seleccionados
  const apiUrl = `${apiBaseUrl}${version}/${data}`;

  // Realizar la solicitud FETCH a la API
  fetch(apiUrl)
    .then(response => {
      // Verificar el estado de la respuesta
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then(data => {
      // Procesar los datos obtenidos
      console.log(data);
      // Mostrar los datos en el div resultado
      resultadoDiv.innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      // Capturar y manejar errores de la solicitud
      console.error('Error al obtener los datos:', error);
      // Mostrar mensaje de error en el div resultado
      resultadoDiv.innerText = 'Error al obtener los datos';
    });
});