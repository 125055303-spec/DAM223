
// Solo se encarga de guardar, recuperar y eliminar datos.

const disponible = () =>
  typeof window !== 'undefined' && !!window.localStorage;

export const guardarDato = async (clave, valor) => {
  if (!disponible()) throw new Error('LocalStorage no está disponible');
  window.localStorage.setItem(clave, JSON.stringify(valor));
};

export const obtenerDato = async (clave, valorPorDefecto = null) => {
  if (!disponible()) return valorPorDefecto;
  const crudo = window.localStorage.getItem(clave);
  if (crudo === null) return valorPorDefecto;
  try {
    return JSON.parse(crudo);
  } catch (e) {
    return valorPorDefecto;
  }
};

export const eliminarDato = async (clave) => {
  if (!disponible()) return;
  window.localStorage.removeItem(clave);
};

export const limpiarAlmacenamiento = async () => {
  if (!disponible()) return;
  window.localStorage.clear();
};