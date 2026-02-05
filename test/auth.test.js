import { describe, it, expect } from 'vitest';
import { loginLogic } from '../src/auth.js';

describe('Defensa: Pruebas Multiusuario', () => {

  // Tabla de datos para probar varios usuarios exitosos
  it.each([
    ['admin@test.com', 'admin123', 'Administrador'],
    ['juan@test.com', 'user456', 'Usuario Final'],
    ['ana@test.com', 'password789', 'Editor'],
  ])('Debería loguear correctamente al usuario: %s', async (email, pass, expectedRole) => {
    const result = await loginLogic(email, pass);
    
    expect(result.success).toBe(true);
    expect(result.user.name).toBe(expectedRole);
  });

  it('Debería fallar si el usuario no existe en la lista', async () => {
    const result = await loginLogic('fantasma@test.com', '123');
    
    expect(result.success).toBe(false);
    expect(result.message).toBe("Acceso denegado");
  });
});