import { z } from 'zod';

// ESQUEMA PROVISIONAL: únicamente comprobamos tipos básicos.
// TODO (etapa 2): añadir requisitos y mensajes propios:
// - nombre: obligatorio y longitud mínima razonable
// - email: formato correcto
// - asunto: obligatorio
// - mensaje: longitud mínima y máxima
// - aceptaPrivacidad: debe ser true (refine o literal)
export const contactoSchema = z.object({
  nombre: z.string().min(3, {message: "El nombre debe tener al menos 3 caracteres"}),
  email: z.email({message: "Introduce un correo electronico valido"}),
  asunto: z.string().refine((value) => value.trim().length > 0, {message: "El asunto no puede estar vacío"}).min(1, {message: "El asunto no puede estar vacío"}).max(100, {message: "El asunto no puede tener más de 100 caracteres"}),
  mensaje: z.string().refine((value) => value.trim().length > 0, {message: "El mensaje no puede estar vacío"}).min(10, {message: "El mensaje debe tener al menos 10 caracteres"}).max(500, {message: "El mensaje no puede tener más de 500 caracteres"}),
  aceptaPrivacidad: z.boolean().refine((value) => value === true, {message: "Debes aceptar la política de privacidad"})
});

// TODO (bonus): construir después un esquema apropiado para los datos de la API.
