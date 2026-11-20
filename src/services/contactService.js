// Servidor HTTP de pruebas. Se iniciará por separado con npm run api.
const API_URL = 'http://localhost:3001/contactos';


export async function obtenerContactos() {
  // TODO (etapa 4): petición GET con fetch(API_URL).
  // Comprueba response.ok antes de convertir a JSON.
  // Devuelve los contactos obtenidos o lanza un Error si falla.
const RESPUESTA = await fetch(API_URL);
if (!RESPUESTA.ok) {
  throw new Error('Error al obtener los contactos de la API');
}
const CONTACTOS = await RESPUESTA.json();
console.log('Contactos obtenidos de la API:', CONTACTOS);
return CONTACTOS;
}

export async function crearContacto(datos) {
  // TODO (etapa 4): petición POST con método, cabeceras y body correctos.
  // Comprueba response.ok y devuelve la respuesta del servidor.
  const RESPUESTA = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  if (!RESPUESTA.ok) {
    throw new Error('Error al crear el contacto en la API');
  }
  const CONTACTO_CREADO = await RESPUESTA.json();
  console.log('Contacto creado en la API:', CONTACTO_CREADO);
  return CONTACTO_CREADO;
}
