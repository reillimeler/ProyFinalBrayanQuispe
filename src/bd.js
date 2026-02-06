
const users = [
  { id: 1, email: 'admin@test.com', password: 'admin123', role: 'Administrador' },
  { id: 2, email: 'juan@test.com', password: 'user456', role: 'Usuario Final' },
  { id: 3, email: 'ana@test.com', password: 'password789', role: 'Editor' },
  { id: 4, email: 'peres@test.com', password: 'sop123', role: 'soporte' }
];

export const findUserByEmail = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email);
      resolve(user || null);
    },100); // Simulación de retraso
  });
};