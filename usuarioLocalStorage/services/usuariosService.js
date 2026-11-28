// Validaciones y operaciones CRUD de usuarios. 
import { guardarDato, obtenerDato } from '../storage/localStorage';

const CLAVE = 'usuarios';

export const obtenerUsuarios = async () => {
  return await obtenerDato(CLAVE, []);
};

export const obtenerUsuarioPorId = async (id) => {
  const usuarios = await obtenerUsuarios();
  return usuarios.find((u) => String(u.id) === String(id)) || null;
};

// Devuelve un texto con el error, o null si todo está bien.
export const validarUsuario = (datos, usuarios = [], idActual = null) => {
  const nombre = String(datos.nombre ?? '').trim();
  const edadTexto = String(datos.edad ?? '').trim();

  if (!nombre) return 'El nombre es obligatorio';
  if (nombre.length < 3) return 'El nombre debe tener al menos 3 caracteres';
  if (!edadTexto) return 'La edad es obligatoria';
  if (!/^\d+$/.test(edadTexto)) return 'La edad debe ser un número entero';

  const edad = Number(edadTexto);
  if (edad < 1 || edad > 120) return 'La edad debe estar entre 1 y 120';

  const duplicado = usuarios.some(
    (u) =>
      u.nombre.toLowerCase() === nombre.toLowerCase() &&
      String(u.id) !== String(idActual)
  );
  if (duplicado) return 'Ya existe un usuario con ese nombre';

  return null;
};

export const crearUsuario = async (datos) => {
  const usuarios = await obtenerUsuarios();
  const error = validarUsuario(datos, usuarios);
  if (error) throw new Error(error);

  const nuevo = {
    id: Date.now().toString(),
    nombre: String(datos.nombre).trim(),
    edad: Number(datos.edad),
  };
  await guardarDato(CLAVE, [...usuarios, nuevo]);
  return nuevo;
};

export const actualizarUsuario = async (id, datos) => {
  const usuarios = await obtenerUsuarios();
  const error = validarUsuario(datos, usuarios, id);
  if (error) throw new Error(error);

  const actualizados = usuarios.map((u) =>
    String(u.id) === String(id)
      ? { ...u, nombre: String(datos.nombre).trim(), edad: Number(datos.edad) }
      : u
  );
  await guardarDato(CLAVE, actualizados);
};

export const eliminarUsuario = async (id) => {
  const usuarios = await obtenerUsuarios();
  await guardarDato(CLAVE, usuarios.filter((u) => String(u.id) !== String(id)));
};