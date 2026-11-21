
import { useQuery } from '@tanstack/react-query';
import { obtenerContactos } from '../services/contactService';

export default function ContactList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['contactos'],
    queryFn: obtenerContactos
  });

  console.log(data, isLoading, isError, error);

  return (
    <section className="panel" aria-labelledby="list-title">
      <div className="panel-heading">
        <div>
          <span className="section-number">02 / REGISTROS</span>
          <h2 id="list-title">Contactos recibidos</h2>
        </div>
        <span className="panel-icon" aria-hidden="true">☷</span>
      </div>

      <p className="panel-description">
        Aquí aparecerán los contactos devueltos por el servidor.
      </p>

      {isLoading && <p>Cargando contactos...</p>}

      {isError && (
        <p>Error al obtener los contactos: {error.message}</p>
      )}

      {!isLoading && !isError && data?.length > 0 && (
        <ul>
          {data.map((contacto) => (
            <li key={contacto.id}>
              {contacto.nombre} - {contacto.email}
            </li>
          ))}
        </ul>
      )}

      {!isLoading && !isError && !data?.length && (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">⌁</div>
          <strong>No hay contactos</strong>
          <p>Aún no se han recibido contactos del servidor.</p>
        </div>
      )}
    </section>
  );
}
