"use client"
import { useState, useEffect } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleAuth = async () => {
    if (!validateEmail(email)) {
      toast.error('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Inicio de sesión exitoso');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Registro exitoso');
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Inicio de sesión con Google exitoso');
    } catch (error) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error) => {
    console.error(error); // Asegúrate de imprimir el error en la consola para depuración
    switch (error.code) {
      case 'auth/invalid-email':
        toast.error('El correo electrónico no es válido.');
        break;
      case 'auth/user-disabled':
        toast.error('La cuenta ha sido deshabilitada.');
        break;
      case 'auth/user-not-found':
        toast.error('No se encontró una cuenta con este correo electrónico.');
        break;
      case 'auth/wrong-password':
        toast.error('La contraseña es incorrecta.');
        break;
      case 'auth/email-already-in-use':
        toast.error('El correo electrónico ya está en uso.');
        break;
      case 'auth/weak-password':
        toast.error('La contraseña es muy débil.');
        break;
      case 'auth/popup-closed-by-user':
        toast.error('La ventana emergente se cerró antes de completar el inicio de sesión.');
        break;
      case 'auth/cancelled-popup-request':
        toast.error('Se canceló la solicitud de inicio de sesión emergente.');
        break;
      case 'auth/popup-blocked':
        toast.error('La ventana emergente fue bloqueada por el navegador.');
        break;
      default:
        toast.error('Ocurrió un error. Inténtalo de nuevo.');
        break;
    }
  };

  return (
    <div className="container">
      <Toaster />
      <div className="auth-box">
        {user ? (
          <div>
            <h1>Welcome, {user.email}</h1>
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo Electrónico"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <button onClick={handleAuth}>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</button>
            <button onClick={handleGoogleAuth}>
              {isLogin ? 'Iniciar Sesión con Google' : 'Registrarse con Google'}
            </button>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Cambiar a Registrarse' : 'Cambiar a Iniciar Sesión'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
