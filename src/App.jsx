import ContactForm from './components/ContactForm.jsx';
import ContactList from './components/ContactList.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand"><span className="brand-mark">M4</span> REACT LAB / U4</div>
        <span className="work-in-progress">BASE INCOMPLETA</span>
      </header>

      <main>
        <div className="intro">
          <span className="eyebrow">FORMULARIOS + PETICIONES HTTP</span>
          <h1>Bandeja de contactos<span className="dot">.</span></h1>
          <p>Un formulario y un listado de solicitudes. Los conectaremos paso a paso.</p>
        </div>

        <div className="content-grid">
          <ContactForm />
          <ContactList />
        </div>
      </main>

      <footer>Práctica M4 · React Hook Form · Zod · TanStack Query v5</footer>
    </div>
  );
}
