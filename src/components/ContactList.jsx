// TODO (etapa 4): importar useQuery desde @tanstack/react-query.
// TODO (etapa 4): importar obtenerContactos desde services/contactService.js.

import { useQuery } from '@tanstack/react-query';
import { obtenerContactos } from '../services/contactService';

export default function ContactList() {
  // TODO: lanzar la consulta GET usando useQuery({ queryKey, queryFn }).
  // TODO: gestionar carga, error y datos recibidos.
  // TODO (bonus): validar la respuesta de la API con schema.safeParse(...).

  return (
    <section className="panel" aria-labelledby="list-title">
      <div className="panel-heading">
        <div>
          <span className="section-number">02 / REGISTROS</span>
          <h2 id="list-title">Contactos recibidos</h2>
        </div>
        <span className="panel-icon" aria-hidden="true">☷</span>
      </div>
      <p className="panel-description">Aquí aparecerán los contactos devueltos por el servidor.</p>

      <div className="empty-state">
        <div className="empty-icon" aria-hidden="true">⌁</div>
        <strong>Listado pendiente</strong>
        <p>Aún no hemos implementado useQuery para obtener los datos.</p>
      </div>

      {/* TODO: reemplazar este bloque por una lista con .map() y una key estable. */}
    </section>
  );
}
