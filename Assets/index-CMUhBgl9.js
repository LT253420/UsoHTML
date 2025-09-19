import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import {
  BrowserRouter, Routes, Route, Link, useNavigate, useSearchParams
} from "https://esm.sh/react-router-dom@6.22.3";

/* -------------------- Layout básico -------------------- */
function Layout({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

/* -------------------- Guard / Wrapper home -------------------- */
// NOTE: Aquí iría tu verificación real (Firebase auth currentUser, etc.)
function Guard({ Component }) {
  const isAuth = false; // placeholder. Reemplazar por estado real.
  const nav = useNavigate();
  if (!isAuth) { nav("/ingresar", { replace:true }); return null; }
  return <Component/>;
}

/* -------------------- Pantallas -------------------- */
function Home() {
  return (
    <Layout>
      <div className="card">
        <div className="h1">Inicio</div>
        <div className="h2">Bienvenido/a</div>
        <div className="small">Esta ruta está protegida por un guard.</div>
      </div>
    </Layout>
  );
}

function Ingresar() {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const nav = useNavigate();

  const onSubmit = (e)=> {
    e.preventDefault();
    // TODO: Firebase signInWithEmailAndPassword(auth, email, pass)
    // si ok: nav("/")
    nav("/");
  };

  return (
    <Layout>
      <div className="card">
        <div className="h1">Ingresar</div>
        <div className="spacer"></div>
        <form onSubmit={onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit">Entrar</button>
        </form>
        <div className="spacer"></div>
        <div className="row">
          <Link className="link" to="/recuperar-contraseña">¿Olvidaste tu contraseña?</Link>
        </div>
        <div className="spacer"></div>
        <div className="row">
          <span className="small">¿No tenés cuenta?</span>
          <Link className="link" to="/registro">Crear cuenta</Link>
        </div>
      </div>
    </Layout>
  );
}

function Registro() {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const nav=useNavigate();
  const onSubmit=(e)=>{
    e.preventDefault();
    // TODO: Firebase createUserWithEmailAndPassword(auth, email, pass)
    nav("/ingresar");
  };
  return (
    <Layout>
      <div className="card">
        <div className="h1">Registro</div>
        <div className="spacer"></div>
        <form onSubmit={onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit">Crear cuenta</button>
        </form>
        <div className="spacer"></div>
        <Link className="link" to="/ingresar">Volver al inicio</Link>
      </div>
    </Layout>
  );
}

function RecuperarContrasena() {
  const [email,setEmail]=useState("");
  const onSubmit=(e)=>{
    e.preventDefault();
    // TODO: Firebase sendPasswordResetEmail(auth, email)
    alert("Si el correo existe, se envió un email de recuperación.");
  };
  return (
    <Layout>
      <div className="card">
        <div className="h1">Recuperar contraseña</div>
        <div className="h2">Ingrese su correo electrónico para enviar un email de recuperación</div>
        <div className="spacer"></div>
        <form onSubmit={onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <button className="btn primary" type="submit">Enviar</button>
        </form>
        <div className="spacer"></div>
        <div className="center small">
          <Link className="link" to="/ingresar">Volver al inicio</Link>
        </div>
      </div>
    </Layout>
  );
}

function ReestablecerContrasena() {
  // Suponiendo ?oobCode=... en la URL (como hace Firebase)
  const [params] = useSearchParams();
  const [pass,setPass]=useState("");
  const oobCode = params.get("oobCode");
  const onSubmit=(e)=>{
    e.preventDefault();
    // TODO: Firebase confirmPasswordReset(auth, oobCode, pass)
    alert("Contraseña actualizada.");
  };
  return (
    <Layout>
      <div className="card">
        <div className="h1">Reestablecer contraseña</div>
        <div className="spacer"></div>
        <form onSubmit={onSubmit} className="col">
          <input className="input" type="password" placeholder="Nueva contraseña" value={pass} onChange={e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit" disabled={!oobCode}>Actualizar</button>
        </form>
        {!oobCode && <div className="small">Falta el código de verificación en la URL.</div>}
      </div>
    </Layout>
  );
}

function NotFound(){
  return (
    <Layout>
      <div className="card">
        <div className="h1">404</div>
        <div className="h2">Ruta no encontrada</div>
        <div className="spacer"></div>
        <Link className="link" to="/ingresar">Volver al inicio</Link>
      </div>
    </Layout>
  );
}

/* -------------------- App + Router (mismas rutas) -------------------- */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Guard Component={Home}/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/ingresar" element={<Ingresar/>}/>
        <Route path="/recuperar-contraseña" element={<RecuperarContrasena/>}/>
        <Route path="/reestablecer-contraseña" element={<ReestablecerContrasena/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
