import { findUserByEmail } from './bd';


export const loginLogic = async (email, password) => {
  // Mostramos qué datos están intentando entrar
  console.log(`\n[LOG]: Intento de login para: ${email}`);

  if (!email || !password) {
    console.log("[ERROR]: Validación fallida - Faltan datos");
    throw new Error("FALTAN_DATOS");
  }

  const user = await findUserByEmail(email);

  if (!user) {
    console.log(`[LOGIN FAIL]: El correo ${email} no existe en la BD.`);
    return { success: false, message: "Acceso denegado" };
  }

  if (user.password !== password) {
    console.log(`[LOGIN FAIL]: Contraseña incorrecta para ${email}.`);
    return { success: false, message: "Acceso denegado" };
  }

  console.log(`[LOGIN SUCCESS]: Bienvenido ${user.role}`);
  return { 
    success: true, 
    user: { name: user.role, email: user.email } 
  };
};