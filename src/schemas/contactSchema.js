import { z } from 'zod';

// ESQUEMA PROVISIONAL: únicamente comprobamos tipos básicos.
// TODO (etapa 2): añadir requisitos y mensajes propios:
// - nombre: obligatorio y longitud mínima razonable
// - email: formato correcto
// - asunto: obligatorio
// - mensaje: longitud mínima y máxima
// - aceptaPrivacidad: debe ser true (refine o literal)
export const contactoSchema = z.object({
  nombre: z.string(),
  email: z.string(),
  asunto: z.string(),
  mensaje: z.string(),
  aceptaPrivacidad: z.boolean(),
});

// TODO (bonus): construir después un esquema apropiado para los datos de la API.
