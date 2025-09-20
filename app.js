// === React + Router (ESM por CDN) SIN JSX con htm ===
// Forzamos que TODAS las librerías usen la MISMA copia de React 18.2.0.
import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client?deps=react@18.2.0";
import {
  HashRouter, Routes, Route, Link, Navigate,
  useNavigate, useSearchParams
} from "https://esm.sh/react-router-dom@6.22.3?deps=react@18.2.0,react-dom@18.2.0";
import html from "https://esm.sh/htm@3.1.1/react?deps=react@18.2.0";

// === Firebase v9 modular (ESM) ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth, onAuthStateChanged, signOut,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, confirmPasswordReset,
  GoogleAuthProvider, signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

/* ---------- Firebase config (tu proyecto) ---------- */
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

// ---------- Auth Context ----------
const AuthContext = React.createContext({ user: undefined });
const useAuth = () => React.useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ?? null));
    return () => unsub();
  }, []);
  return html`<${AuthContext.Provider} value=${{ user }}>${children}<//>`;
}

// ---------- UI helpers ----------
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

// ---------- Guard ----------
function Guard({ children }) {
  const { user } = useAuth();
  if (user === undefined) return html`<${Loader}/>`;
  if (!user) return html`<${Navigate} to="/ingresar" replace />`;
  return children;
}

// ---------- Pantallas ----------
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
          <button cl
