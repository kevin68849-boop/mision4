// Servidor HTTP de pruebas. Se iniciará por separado con npm run api.
const API_URL = 'http://localhost:3001/contactos';

export async function obtenerContactos() {
  // TODO (etapa 4): petición GET con fetch(API_URL).
  // Comprueba response.ok antes de convertir a JSON.
  // Devuelve los contactos obtenidos o lanza un Error si falla.
  void API_URL;
  return []; // Resultado temporal para que el proyecto arranque.
}

export async function crearContacto(datos) {
  // TODO (etapa 4): petición POST con método, cabeceras y body correctos.
  // Comprueba response.ok y devuelve la respuesta del servidor.
  void datos;
  throw new Error('POST todavía no implementado.');
}
