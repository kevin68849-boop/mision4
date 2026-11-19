# M4 · Full Contact Forms — base incompleta

Aplicación de aprendizaje con React, React Hook Form, Zod y TanStack Query v5.

> **Importante:** esta entrega es una **base incompleta**, no una práctica terminada.
> Los envíos solo muestran datos en consola; la API todavía no se consulta desde React.

## 1. Requisitos previos

- Node.js compatible con Vite (20.19+ o 22.12+).
- npm.

## 2. Arranque

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

En **otra terminal**, ejecuta el servidor HTTP de pruebas:

```bash
npm run api
```

La página usa la dirección que anuncie Vite (normalmente `http://localhost:5173`).
La API usa `http://localhost:3001/contactos`. Puedes comprobarla en el navegador.

## 3. Qué está hecho

- [x] Estructura React + Vite.
- [x] Instanciación de `QueryClient` y `QueryClientProvider`.
- [x] Componentes separados para formulario y listado.
- [x] Campos visibles con `register` y `handleSubmit` básicos.
- [x] Servidor de datos de prueba con `json-server`.
- [ ] Reglas reales de Zod y conexión con `zodResolver`.
- [ ] Errores accesibles debajo de cada campo.
- [ ] GET mediante `useQuery`.
- [ ] POST mediante `useMutation`.
- [ ] Invalidación de la consulta tras registrar un contacto.
- [ ] Estados visibles de carga, error y éxito.
- [ ] Validación opcional de respuesta remota con `safeParse`.
- [ ] Pruebas de comportamiento y documentación final.

## 4. Etapas sugeridas

1. Inspeccionar `src/App.jsx`, `src/main.jsx` y `src/components/ContactForm.jsx`.
2. Construir las reglas de `src/schemas/contactSchema.js` y conectar `zodResolver`.
3. Renderizar los mensajes de error y añadir `aria-invalid` y `aria-describedby`.
4. Completar `src/services/contactService.js` con `fetch`, comprobación de `response.ok` y JSON.
5. Completar `ContactList.jsx` con `useQuery` y `.map()`.
6. Enviar los contactos con `useMutation` e invalidar la query correspondiente en `onSuccess`.
7. Mostrar feedback y comprobar errores de API, cargas, resets y datos corruptos.
8. Documentar pruebas, decisiones y uso de IA.

## 5. Rúbrica (según la imagen del enunciado)

| Criterio | Puntos |
| --- | ---: |
| React Hook Form y errores accesibles | 20 |
| Validación Zod con refinamientos y mensajes propios | 15 |
| TanStack Query v5: consultas, mutaciones e invalidación | 15 |
| Feedback de carga / error / éxito | 10 |
| Originalidad y dominio del formulario elegido | 10 |
| README, IA, repositorio, commits, tecnología y estructura | 30 |

**Bonus:** validar con `safeParse` la respuesta remota y demostrar que se detecta un dato corrupto.

## 6. API elegida

El enunciado no impone un servicio concreto. Para garantizar GET/POST persistentes durante el desarrollo usamos `json-server`, un servidor HTTP local. Los datos de prueba residen en `db.json`; **no** es un servicio desplegado en Internet. Si el profesor exige un servidor externo, esta elección deberá revisarse.

## 7. Declaración de uso de IA (borrador que debes completar honestamente)

Se ha usado asistencia de IA para generar una estructura inicial incompleta de React y CSS, además de un plan de tareas y el esqueleto de los componentes. Las reglas de validación, las peticiones HTTP, el tratamiento de estados y las decisiones finales se implementarán y revisarán durante el desarrollo, detallando qué se hizo manualmente y qué ayuda adicional se utilizó.

**Registro de decisiones y asistencia adicional:**

- Pendiente de completar con fecha, cambio realizado, motivo y si intervino IA.

## 8. Comprobaciones antes de entregar

- `npm run build` sin errores.
- Subir código fuente y README, pero no `node_modules` ni `dist`.
- Commits progresivos y explicativos, no un único commit final.
- Mostrar fallos de validación, fallo de API, éxito del registro e invalidación.
- Probar el bonus con un registro remoto deliberadamente corrupto (y restaurar los datos).
