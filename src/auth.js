import { findUserByEmail } from './bd';

export const loginLogic = async (email, password) => {
  if (!email || !password) throw new Error("FALTAN_DATOS");

  const user = await findUserByEmail(email);

  if (!user || user.password !== password) {
    return { success: false, message: "Acceso denegado" };
  }

  return { 
    success: true, 
    user: { name: user.role, email: user.email } 
  };
};