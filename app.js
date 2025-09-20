// React + Router (ESM por CDN) sin JSX usando htm
import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import {
  HashRouter, Routes, Route, Link, Navigate,
  useNavigate, useSearchParams
} from "https://esm.sh/react-router-dom@6.22.3";
import html from "https://esm.sh/htm@3.1.1/react";

// Firebase v9 modular (ESM)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signOut,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, confirmPasswordReset,
  GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

/* -------------------- Firebase config (tu proyecto) -------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyBAPn3lBm5P8btiahsEhP8pf_wmnsBM_MI",
  authDomain: "fallasenplaca.firebaseapp.com",
  projectId: "fallasenplaca",
  storageBucket: "fallasenplaca.firebasestorage.app",
  messagingSenderId: "580763455141",
  appId: "1:580763455141:web:0a685d38783a5acfdf874c"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* -------------------- Auth Context -------------------- */
const AuthContext = React.createContext({ user: undefined });

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ?? null));
    return () => unsub();
  }, []);
  return html`<${AuthContext.Provider} value=${{ user }}>${children}<//>`;
}
const useAuth = () => React.useContext(AuthContext);

/* -------------------- UI helpers -------------------- */
const Layout = ({ children }) => html`
  <div className="container">
    <div className="topbar">
      <div className="row">
        <span className="brand">Diagnóstico de fallas</span>
        <span className="badge">Auth</span>
      </div>
      <${UserChip}/>
    </div>
    ${children}
  </div>
`;

const Loader = () => html`<div className="loader" aria-label="Cargando..."></div>`;

function UserChip(){
  const { user } = useAuth();
  if (user === undefined) return html`<span className="small">Verificando sesión…</span>`;
  if (!user) return html`<span className="small">Sesión: invitado</span>`;
  return html`<span className="small">Sesión: ${user.email}</span>`;
}

/* -------------------- Guard -------------------- */
function Guard({ children }) {
  const { user } = useAuth();
  if (user === undefined) return html`<${Loader}/>`;
  if (!user) return html`<${Navigate} to="/ingresar" replace />`;
  return children;
}

/* -------------------- Pantallas -------------------- */
function Home() {
  const { user } = useAuth();
  const nav = useNavigate();
  const logout = async () => { await signOut(auth); nav("/ingresar"); };
  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">Inicio</div>
        <div className="h2">Bienvenido/a${user ? `, ${user.email}` : ""}</div>
        <div className="spacer"></div>
        <div className="row">
          <button className="btn" onClick=${() => nav("/ingresar")}>Ir a Ingresar</button>
          <button className="btn" onClick=${() => nav("/registro")}>Ir a Registro</button>
          <button className="btn primary" onClick=${logout}>Cerrar sesión</button>
        </div>
      </div>
    <//>
  `;
}

function Ingresar() {
  const [email,setEmail]=React.useState("");
  const [pass,setPass]=React.useState("");
  const [err,setErr]=React.useState("");
  const nav = useNavigate();

  const onSubmit = async (e)=>{
    e.preventDefault(); setErr("");
    try{ await signInWithEmailAndPassword(auth, email, pass); nav("/"); }
    catch(error){ setErr(mapeoError(error)); }
  };

  const loginGoogle = async ()=>{
    setErr("");
    try{ const provider = new GoogleAuthProvider(); await signInWithPopup(auth, provider); nav("/"); }
    catch(error){ setErr(mapeoError(error)); }
  };

  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">Ingresar</div>
        <div className="spacer"></div>
        <form onSubmit=${onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value=${email} onChange=${e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Contraseña" value=${pass} onChange=${e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit">Entrar</button>
        </form>
        <div className="row">
          <button className="btn" onClick=${loginGoogle}>Ingresar con Google</button>
        </div>
        ${err && html`<div className="small" style=${{color:"#ff9b9b"}}>${err}</div>`}
        <div className="spacer"></div>
        <div className="row">
          <${Link} className="link" to="/recuperar-contraseña">¿Olvidaste tu contraseña?<//>
        </div>
        <div className="spacer"></div>
        <div className="row">
          <span className="small">¿No tenés cuenta?</span>
          <${Link} className="link" to="/registro">Crear cuenta<//>
        </div>
      </div>
    <//>
  `;
}

function Registro() {
  const [email,setEmail]=React.useState("");
  const [pass,setPass]=React.useState("");
  const [err,setErr]=React.useState("");
  const nav=useNavigate();

  const onSubmit=async (e)=>{
    e.preventDefault(); setErr("");
    try{ await createUserWithEmailAndPassword(auth, email, pass); nav("/ingresar"); }
    catch(error){ setErr(mapeoError(error)); }
  };

  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">Registro</div>
        <div className="spacer"></div>
        <form onSubmit=${onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value=${email} onChange=${e=>setEmail(e.target.value)} required />
          <input className="input" type="password" placeholder="Contraseña" value=${pass} onChange=${e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit">Crear cuenta</button>
        </form>
        ${err && html`<div className="small" style=${{color:"#ff9b9b"}}>${err}</div>`}
        <div className="spacer"></div>
        <${Link} className="link" to="/ingresar">Volver al inicio<//>
      </div>
    <//>
  `;
}

function RecuperarContrasena() {
  const [email,setEmail]=React.useState("");
  const [msg,setMsg]=React.useState("");
  const [err,setErr]=React.useState("");

  const onSubmit=async (e)=>{
    e.preventDefault(); setMsg(""); setErr("");
    try{ await sendPasswordResetEmail(auth, email); setMsg("Si el correo existe, se envió un email de recuperación."); }
    catch(error){ setErr(mapeoError(error)); }
  };

  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">Recuperar contraseña</div>
        <div className="h2">Ingrese su correo electrónico para enviar un email de recuperación</div>
        <div className="spacer"></div>
        <form onSubmit=${onSubmit} className="col">
          <input className="input" type="email" placeholder="Email" value=${email} onChange=${e=>setEmail(e.target.value)} required />
          <button className="btn primary" type="submit">Enviar</button>
        </form>
        ${msg && html`<div className="small" style=${{color:"#9bffb0"}}>${msg}</div>`}
        ${err && html`<div className="small" style=${{color:"#ff9b9b"}}>${err}</div>`}
        <div className="spacer"></div>
        <div className="center small">
          <${Link} className="link" to="/ingresar">Volver al inicio<//>
        </div>
      </div>
    <//>
  `;
}

function ReestablecerContrasena() {
  const [params] = useSearchParams();
  const [pass,setPass]=React.useState("");
  const [msg,setMsg]=React.useState("");
  const [err,setErr]=React.useState("");
  const oobCode = params.get("oobCode");

  const onSubmit=async (e)=>{
    e.preventDefault(); setMsg(""); setErr("");
    try{
      if (!oobCode) throw new Error("missing-code");
      await confirmPasswordReset(auth, oobCode, pass);
      setMsg("Contraseña actualizada. Ya podés ingresar con tu nueva clave.");
    }catch(error){ setErr(mapeoError(error)); }
  };

  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">Reestablecer contraseña</div>
        <div className="spacer"></div>
        <form onSubmit=${onSubmit} className="col">
          <input className="input" type="password" placeholder="Nueva contraseña" value=${pass} onChange=${e=>setPass(e.target.value)} required />
          <button className="btn primary" type="submit" disabled=${!oobCode}>Actualizar</button>
        </form>
        ${!oobCode && html`<div className="small" style=${{color:"#ff9b9b"}}>Falta el código de verificación en la URL.</div>`}
        ${msg && html`<div className="small" style=${{color:"#9bffb0"}}>${msg}</div>`}
        ${err && html`<div className="small" style=${{color:"#ff9b9b"}}>${err}</div>`}
      </div>
    <//>
  `;
}

function NotFound(){
  return html`
    <${Layout}>
      <div className="card">
        <div className="h1">404</div>
        <div className="h2">Ruta no encontrada</div>
        <div className="spacer"></div>
        <${Link} className="link" to="/ingresar">Volver al inicio<//>
      </div>
    <//>
  `;
}

/* -------------------- Mapeo simple de errores -------------------- */
function mapeoError(e){
  const code = e?.code || e?.message || String(e);
  if (code.includes("auth/invalid-email")) return "Email inválido.";
  if (code.includes("auth/user-not-found")) return "Usuario no encontrado.";
  if (code.includes("auth/wrong-password")) return "Contraseña incorrecta.";
  if (code.includes("auth/email-already-in-use")) return "Ese email ya está registrado.";
  if (code.includes("missing-code")) return "Falta el código de verificación.";
  return "Error: " + code;
}

/* -------------------- App + Rutas (HashRouter forzado) -------------------- */
function App() {
  return html`
    <${AuthProvider}>
      <${Routes}>
        <${Route} path="/" element=${html`<${Guard}><${Home}/><//>`} />
        <${Route} path="/registro" element=${html`<${Registro}/>`} />
        <${Route} path="/ingresar" element=${html`<${Ingresar}/>`} />
        <${Route} path="/recuperar-contraseña" element=${html`<${RecuperarContrasena}/>`} />
        <${Route} path="/reestablecer-contraseña" element=${html`<${ReestablecerContrasena}/>`} />
        <${Route} path="*" element=${html`<${NotFound}/>`} />
      <//>
    <//>
  `;
}

/* -------------------- Mount -------------------- */
createRoot(document.getElementById("root")).render(
  html`<${HashRouter}><${App}/><//>`
);
