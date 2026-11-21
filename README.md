# Full Contact Forms

Misión M4 · Web Development I.

Aplicación desarrollada con React y Vite que permite registrar contactos mediante un formulario validado con React Hook Form y Zod, y consultar los registros almacenados en una API local utilizando TanStack Query.

## Cómo probarlo

1. Clonar el repositorio:
   `git clone https://github.com/kevin68849-boop/mision4.git`

2. Acceder a la carpeta del proyecto:
   `cd mision4`

3. Instalar las dependencias:
   `npm install`

4. Iniciar la API local:
   `npm run api`

5. Abrir otra terminal e iniciar React:
   `npm run dev`

6. Abrir en el navegador la dirección indicada por Vite.

Para probar la aplicación, rellenar los campos del formulario y pulsar «Enviar contacto». Si los datos son válidos, el contacto se registra y aparece automáticamente en el listado.

También se pueden comprobar las validaciones introduciendo datos incorrectos o dejando campos obligatorios vacíos.

## Uso de IA

Utilicé ChatGPT (OpenAI) como herramienta de apoyo durante el desarrollo de la práctica.

La IA generó la estructura inicial del proyecto, una base incompleta de los componentes y los estilos CSS. Posteriormente, la utilicé para resolver dudas, comprender las librerías y revisar mis implementaciones.

Ejemplos de prompts reales:

- "Te voy a pasar una imagen con el contenido a hacer, me vas a generar una base incompleta, y poco a poco entre los 2 vamos rellenandolo con las cosas que pide el enunciado y los requisitos".

A partir de esa base, fui implementando las validaciones de Zod, los mensajes de error y atributos de accesibilidad, las funciones GET y POST con fetch y la integración con useQuery y useMutation.

"Lo que pasa es que cuando meto las cosas dentro y no me deja enviar, no me manda un mensaje, ¿puedo meter un alert dentro de los campos de contactoSchema?"

Puse ese promp debido a unas dudas con mi codigo para resolverlo.

La IA me proporcionó explicaciones, ejemplos y correcciones cuando cometía errores.

Para verificar el funcionamiento, ejecuté la aplicación junto con la API local, comprobé los datos recibidos en la consola y realicé el registro de un contacto desde el formulario. Verifiqué que el contacto aparecía en el listado sin recargar manualmente la página.

Escribí y adapté manualmente la lógica principal de validación, las peticiones HTTP, la gestión de consultas y mutaciones y los mensajes de estado, utilizando las explicaciones de la IA como referencia.

## Autopsia

1. **Utilizar una API local en lugar de depender de un servicio externo.**

   Decidí trabajar con json-server para almacenar y recuperar los contactos durante el desarrollo.

   Descarté utilizar directamente una API externa porque habría añadido dependencias y posibles problemas de configuración ajenos al objetivo de la práctica.

   Esta decisión me permitió concentrarme en aprender las peticiones HTTP y comprobar los resultados de manera controlada.

2. **Invalidar la consulta después de registrar un contacto en lugar de modificar manualmente el listado.**

   Decidí utilizar invalidateQueries después de que useMutation completase correctamente el POST.

   La alternativa era actualizar manualmente el array de contactos en el estado de React después de cada envío.

   Descarté esa opción porque habría supuesto gestionar dos mecanismos diferentes para mantener los datos actualizados. Con la invalidación, TanStack Query vuelve a consultar los contactos y mantiene el listado sincronizado con el servidor.