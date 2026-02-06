import { describe, it, expect } from 'vitest';
import { loginLogic } from '../src/login.js';

describe('Pruebas Multiusuario', () => {
  it.each([
    ['admin@test.com', 'admin123', 'Administrador'],
    ['juan@test.com', 'user456', 'Usuario Final'],
    ['ana@test.com', 'password789', 'Editor'], 

  ])('Debería loguear correctamente al usuario: %s', async (email, pass, expectedRole) => {
    const result = await loginLogic(email, pass);
    
    expect(result.success).toBe(true);
    expect(result.user.name).toBe(expectedRole);
    
  });
  // Excepción
  it('Debería capturar el THROW cuando falta la contraseña', async () => {
    // Al ser una función async, usamos rejects
    await expect(loginLogic('peres@test.com', ''))
      .rejects
      .toThrow("FALTAN_DATOS");
      
    console.log("[TEST LOG]: Excepción capturada correctamente");
  });

  it('fallar si el usuario no existe en la lista', async () => {
    const result = await loginLogic('fantasma@test.com', '123');
    
    expect(result.success).toBe(false);
    expect(result.message).toBe("Acceso denegado");
  });
});