import { useForm } from 'react-hook-form';
// TODO (etapa 2): importa zodResolver y contactoSchema.
import { zodResolver } from "@hookform/resolvers/zod";
import { contactoSchema } from "../schemas/contactSchema";
// TODO (etapa 4): importa useMutation y la función crearContacto.

export default function ContactForm() {
  // Esto ya deja preparados los datos y register/handleSubmit de React Hook Form.
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      nombre: '' ,
      email: '',
      asunto: '',
      mensaje: '',
      aceptaPrivacidad: false,
    },
    // TODO (etapa 2): conecta aquí el esquema de Zod mediante un resolver.
    resolver: zodResolver(contactoSchema),
  });

  function onSubmit(datos) {
    // TODO (etapa 4): sustituir por una mutación POST real.
    // IMPORTANTE: esto NO almacena datos. Solo muestra el objeto en la consola.
    console.log('Datos del formulario (aún no enviados):', datos);
    alert("Formulario recibido correctamente");
  }

  return (
    <section className="panel" aria-labelledby="form-title">
      <div className="panel-heading">
        <div>
          <span className="section-number">01 / ENTRADA</span>
          <h2 id="form-title">Nuevo contacto</h2>
        </div>
        <span className="panel-icon" aria-hidden="true">✉</span>
      </div>
      <p className="panel-description">Completa los campos para registrar un nuevo contacto.</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" aria-invalid={!!errors.nombre} aria-describedby={errors.nombre ? "error-nombre" : undefined} placeholder="Tu nombre" {...register('nombre')} />
            {errors.nombre && (
                    <p id="error-nombre">{errors.nombre.message}</p>
                )}
            {/* TODO (etapa 3): muestra aquí errors.nombre y mejora su accesibilidad. */}
          </div>
          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined} placeholder="correo@ejemplo.com" {...register('email')} />
            {errors.email && (
                    <p id="error-email">{errors.email.message}</p>
                )}
            {/* TODO (etapa 3): muestra aquí errors.email y mejora su accesibilidad. */}
          </div>
        </div>

        <div className="field">
          <label htmlFor="asunto">Asunto</label>
          <input id="asunto" type="text" aria-invalid={!!errors.asunto} aria-describedby={errors.asunto ? "error-asunto" : undefined} placeholder="¿En qué podemos ayudarte?" {...register('asunto')} />
          
          {errors.asunto && (
                    <p id="error-asunto">{errors.asunto.message}</p>
                )}
          {/* TODO: errors.asunto */}
        </div>

        <div className="field">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" rows="5" aria-invalid={!!errors.mensaje} aria-describedby={errors.mensaje ? "error-mensaje" : undefined} placeholder="Cuéntanos un poco más..." {...register('mensaje')} />
          {errors.mensaje && (
                    <p id="error-mensaje">{errors.mensaje.message}</p>
                )}
          {/* TODO: errors.mensaje */}
        </div>

        <label className="check-field" htmlFor="privacidad">
          <input id="privacidad" type="checkbox" aria-invalid={!!errors.aceptaPrivacidad} aria-describedby={errors.aceptaPrivacidad ? "error-aceptaPrivacidad" : undefined} {...register('aceptaPrivacidad')} />
          <span>Confirmo que he leído la información de privacidad (simulada para esta práctica).</span>
        </label>
        {errors.aceptaPrivacidad && (
                    <p id="error-aceptaPrivacidad">{errors.aceptaPrivacidad.message}</p>
                )}

        {/* TODO (etapa 5): mostrar envío en curso, error del servidor y éxito. */}
        <button className="submit-button" type="submit">
          Enviar contacto <span aria-hidden="true">→</span>
        </button>
        <p className="hint">Estado actual: botón de demostración. El POST todavía no existe.</p>
      </form>
    </section>
  );
}
