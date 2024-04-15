// // Función para obtener información sobre un departamento
// function getDepartmentInfo(id) {
//     // Hacer una solicitud a la API
//     fetch(`https://api-colombia.com/api/v1/Department/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//         // Mostrar la información del departamento
//         console.log(data);
//     });
// }

// // Añadir un evento click al botón
// document.getElementById("btn-api-colombia").addEventListener("click", function() {
//     // Obtener el ID del departamento
//     const id = document.getElementById("miInput").value;

//     // Obtener la información del departamento
//     getDepartmentInfo(id);
// });
//______________________________________________________

// // Agregamos un listener de eventos para el elemento "Presidente"
// $('#Presidente').click(function() {
//     // Hacemos una solicitud a la API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Mostramos la respuesta en formato JSON en la consola
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
  
//   // Agregamos un listener de eventos para el elemento "Área Natural"
//   $('#ÁreaNatural').click(function() {
//     // Hacemos una solicitud a la API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Mostramos la respuesta en formato JSON en la consola
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
  
//   // Agregamos un listener de eventos para el elemento "Categoría Área Natural"
//   $('#CategoríaÁreaNatural').click(function() {
//     // Hacemos una solicitud a la API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Mostramos la respuesta en formato JSON en la consola
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
  
//   // Agregamos un listener de eventos para el elemento "map"
//   $('#map').click(function() {
//     // Hacemos una solicitud a la API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Mostramos la respuesta en formato JSON en la consola
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });

//______________________________________________________
// // Add click event listener to the 'President' element
// $('#President').click(function() {
//     // Fetch data from the API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in JSON format
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   });
  
//   // Add click event listener to the 'Natural Area' element
//   $('#NaturalArea').click(function() {
//     // Fetch data from the API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in JSON format
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   });
  
//   // Add click event listener to the 'CategoryNaturalArea' element
//   $('#CategoryNaturalArea').click(function() {
//     // Fetch data from the API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in JSON format
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   });
  
//   // Add click event listener to the 'map' element
//   $('#map').click(function() {
//     // Fetch data from the API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//       .then(response => response.json())
//       .then(data => {
//         // Display the data in JSON format
//         console.log(JSON.stringify(data, null, 2));
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   });



// Seleccionamos el elemento que contiene la respuesta de la API
// const showApi = document.getElementById('show-api');

// // Mostramos la respuesta en formato JSON en la consola
// console.log(JSON.parse(showApi.innerText));

// // Agregamos el evento de clic al elemento
// showApi.addEventListener('click', function(event) {
//   // Aquí va el código que queremos ejecutar cuando se hace clic en el elemento

//   // Hacemos una solicitud a la API
//     fetch('https://api-colombia.com/api/vl▾ /Department')
//         .then(response => response.json())
//         .then(json => {
//         // Mostramos la respuesta en formato JSON en la consola
//         const president = json.president;
//         const naturalAreas = json.naturalAreas;
//         const categoryNaturalAreas = json.categoryNaturalAreas;
//         const map = json.map;

//         console.log(president);
//         console.log(naturalAreas);
//         console.log(categoryNaturalAreas);
//         console.log(map);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });


// const getContentApi = api;
// const deleteContentApi = api;
// const updateContentApi = api;
// const getContentByCategoryApi = api;
// const getContentByCategoryAndDepartmentApi = api;
// const getContentByCategoryAndDepartmentAndMunicipalityApi = api;

// const getValuesApi = () => {
//     return axios.get(vValues);
// }

// const getContentApi = () => {
//     return axios.get(getContentApi);
// }

// const saveContentApi = (content) => {
//     return axios.post(saveContentApi, content);
// }


//______________________________________________________

// Obtener el elemento <select> por su ID
// const selectElement = document.getElementById('select');

// // Escuchar el evento 'change' en el <select>
// selectElement.addEventListener('change', function() {
//   // Obtener el valor de la opción seleccionada
//   const opcionSeleccionada = selectElement.value;
  
//   // Construir la URL de la API basada en la opción seleccionada
//   const apiUrl = `https://api-colombia.com/api/${opcionSeleccionada}`;

//   // Realizar la solicitud FETCH a la API
//   fetch(apiUrl)
//     .then(response => {
//       // Verificar el estado de la respuesta
//       if (!response.ok) {
//         throw new Error('Error en la solicitud');
//       }
//       // Convertir la respuesta a JSON
//       return response.json();
//     })
//     .then(data => {
//       // Procesar los datos obtenidos
//       console.log(data);
//     })
//     .catch(error => {
//       // Capturar y manejar errores de la solicitud
//       console.error('Error al obtener los datos:', error);
//     });
// });

//______________________________________________________
// const api = 'https://api-colombia.com/api/';

// const saveContentApi = api;
// const vValues = api;
// const optionSelect = api;


// //  Aqui obtengo el elemento <select> por su ID
// const select = document.getElementById('select');

// // Aqui agrego un evento al elemento <select>
//     select.addEventListener('change', function() {
//     // Obtener el valor de la opción seleccionada
//     let opcionSeleccionada = select.value;

//   // Manejar la opción seleccionada
//     switch (opcionSeleccionada) {
//     case 'president':
//         select.value = 'president'; // Cambiar al valor de 'opcion2'
//         break;

//     case 'natural-area':
//       select.value = 'natural-area'; // Cambiar al valor de 'opcion3'
//         break;

//     case 'category-natural-area':
//         select.value = 'category-natural-area'; // Cambiar al valor de 'opcion1'
//         break;

//     case 'map':
//         select.value = 'map'; // Cambiar al valor de 'opcion1'
//         break;

//     default:
//         console.log('Opción no reconocida');
//     }
// });

// // Aqui concateno las variables para hacer el llamado a la API
// let apiSelect = api + select + optionSelect;

// // En esta funcion FETCH hago el llamado a la API
// fetch(apiSelect)
//     .then(response => {
//     // Verificar el estado de la respuesta
//     if (!response.ok) {
//         throw new Error('Error en la solicitud');
//     }
//         // Convertir la respuesta a JSON
//         return response.json();
//     })
//     .then(data => {
//         // Procesar los datos obtenidos
//         console.log(data);
//     })
//     .catch(error => {
//     // Capturar y manejar errores de la solicitud
//     console.error('Error al obtener los datos:', error);
// });

//_______________________________________________________
// const apiBaseUrl = 'https://api-colombia.com/api/';

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', function() {
//   // Obtener el valor de la versión y los datos seleccionados
//   const version = selectVersion.value;
//   const data = selectData.value;

//   // Construir la URL de la API basada en la versión y los datos seleccionados
//   const apiUrl = `${apiBaseUrl}${version}/${data}`;

//   // Realizar la solicitud FETCH a la API
//   fetch(apiUrl)
//     .then(response => {
//       // Verificar el estado de la respuesta
//       if (!response.ok) {
//         throw new Error('Error en la solicitud');
//       }
//       // Convertir la respuesta a JSON
//       return response.json();
//     })
//     .then(data => {
//       // Procesar los datos obtenidos
//       console.log(data);
//       // Mostrar los datos en el div resultado
//       resultadoDiv.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//       // Capturar y manejar errores de la solicitud
//       console.error('Error al obtener los datos:', error);
//       // Mostrar mensaje de error en el div resultado
//       resultadoDiv.innerText = 'Error al obtener los datos';
//     });
// });
//______________________________________________________

// const API_BASE_URL = 'https://api-colombia.com/api/';

// // Función para realizar la solicitud FETCH a la API
// async function fetchData(version, data) {
//   const apiUrl = `${API_BASE_URL}${version}/${data}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error('Error en la solicitud');
//     }
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     throw new Error('Error al obtener los datos');
//   }
// }

// // Función para manejar el evento de clic en el botón
// function handleButtonClick() {
//   const version = selectVersion.value;
//   const data = selectData.value;

//   fetchData(version, data)
//     .then(data => {
//       console.log(data);
//       resultadoDiv.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//       resultadoDiv.innerText = 'Error al obtener los datos';
//     });
// }

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', handleButtonClick);

//______________________________________________________

// const apiBaseUrl = 'https://api-colombia.com/api/';

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', function() {
//   // Obtener el valor de la versión y los datos seleccionados
//   const version = selectVersion.value;
//   const data = selectData.value;

//   // Construir la URL de la API basada en la versión y los datos seleccionados
//   const apiUrl = `${apiBaseUrl}${version}/${data}`;

//   // Realizar la solicitud FETCH a la API
//   fetch(apiUrl)
//     .then(response => {
//       // Verificar el estado de la respuesta
//       if (!response.ok) {
//         throw new Error('Error en la solicitud');
//       }
//       // Convertir la respuesta a JSON
//       return response.json();
//     })
//     .then(data => {
//       // Procesar los datos obtenidos
//       console.log(data);
//       // Mostrar los datos en el div resultado
//       resultadoDiv.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//       // Capturar y manejar errores de la solicitud
//       console.error('Error al obtener los datos:', error);
//       // Mostrar mensaje de error en el div resultado
//       resultadoDiv.innerText = 'Error al obtener los datos';
//     });
// });

//____________________________________________________

// const apiBaseUrl = 'https://api-colombia.com/api/';

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Función para realizar la solicitud FETCH a la API
// async function fetchData(version, data) {
//   const apiUrl = `${apiBaseUrl}${version}/${data}`;

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       // throw new Error('Error en la solicitud');
//     }
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     throw new Error('Error al obtener los datos');
//   }
// }

// // Función para manejar el evento de clic en el botón
// function handleButtonClick() {
//   const version = selectVersion.value;

//   // Iterar sobre cada opción del selectData y realizar la solicitud a la API
//   Array.from(selectData.options).forEach(option => {
//     const data = option.value;
//     fetchData(version, data)
//       .then(data => {
//         // Mostrar los datos en el div resultado
//         const optionDataDiv = document.createElement('div');
//         optionDataDiv.innerText = `Datos para ${option.text}: ${JSON.stringify(data, null, 2)}`;
//         resultadoDiv.appendChild(optionDataDiv);
//       })
//       .catch(error => {
//         // Mostrar mensaje de error en el div resultado
//         const errorDiv = document.createElement('div');
//         errorDiv.innerText = `Error al obtener datos para ${option.text}`;
//         resultadoDiv.appendChild(errorDiv);
//       });
//   });
// }

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', handleButtonClick);

// const apiBaseUrl = 'https://api-colombia.com/api/';

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', function() {
//   // Obtener el valor de la versión y los datos seleccionados
//   const version = selectVersion.value;
//   const data = selectData.value;

//   // Construir la URL de la API basada en la versión y los datos seleccionados
//   const apiUrl = `${apiBaseUrl}${version}/${data}`;
//   console.log(apiUrl)

//   // Realizar la solicitud FETCH a la API
//   fetch(apiUrl)
//     .then(response => {
//       // Verificar el estado de la respuesta
//       if (!response.ok) {
//         throw new Error('Error en la solicitud');
//       }
//       // Convertir la respuesta a JSON
//       return response.json();
//     })
//     .then(data => {
//       // Procesar los datos obtenidos
//       console.log(data);
//       // Mostrar los datos en el div resultado
//       resultadoDiv.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//       // Capturar y manejar errores de la solicitud
//       console.error('Error al obtener los datos:', error);
//       // Mostrar mensaje de error en el div resultado
//       resultadoDiv.innerText = 'Error al obtener los datos';
//     });
// });
//________________________________________________________________________________
// const apiBaseUrl = 'https://api-colombia.com/api/';

// // Obtener los elementos necesarios por su ID
// const selectVersion = document.getElementById('selectVersion');
// const selectData = document.getElementById('selectData');
// const btnSolicitar = document.getElementById('btnSolicitar');
// const resultadoDiv = document.querySelector('.resultado');

// // Agregar un evento al botón
// btnSolicitar.addEventListener('click', function() {
//   // Obtener el valor de la versión y los datos seleccionados
//   const version = selectVersion.value;
//   const data = selectData.value;

//   // Construir la URL de la API basada en la versión y los datos seleccionados
//   const apiUrl = `${apiBaseUrl}${version}/${data}`;
//   console.log(apiUrl)

//   // Realizar la solicitud FETCH a la API
//   fetch(apiUrl)
//     .then(response => {
//       // Verificar el estado de la respuesta
//       if (!response.ok) {
//         throw new Error('Error en la solicitud');
//       }
//       // Convertir la respuesta a JSON
//       return response.json();
//     })
//     .then(data => {
//       // Procesar los datos obtenidos
//       console.log(data);
//       // Mostrar los datos en el div resultado
//       resultadoDiv.innerText = JSON.stringify(data, null, 2);
//     })
//     .catch(error => {
//       // Capturar y manejar errores de la solicitud
//       console.error('Error al obtener los datos:', error);
//       // Mostrar mensaje de error en el div resultado
//       resultadoDiv.innerText = 'Error al obtener los datos';
//     });
// });

//________________________________________________________________________________
