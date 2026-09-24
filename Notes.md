# Sistema de Pedidos - Starbucks

## 📦 Caja

### Objetivo
Calcular el costo de los pedidos realizados por el cliente.

Debe permitir:
- Calcular el subtotal de los productos.
- Calcular el IVA.
- Calcular el total a pagar.
- Mostrar los productos incluidos en el pedido.
- Mostrar el resumen de la compra.

### Investigar
- `reduce()`
  - Utilizarlo para sumar los precios de los productos.
  - Calcular el subtotal y el total.
- Desestructuración (Destructuring)
  - Obtener propiedades de los objetos de forma sencilla.
  - Extraer información como `producto`, `precio`, etc.


---

## 👨‍🍳 Cocina

### Objetivo
Administrar y consultar los productos disponibles para preparar los pedidos.

Debe permitir buscar y mostrar:
- Productos baratos.
- Productos caros.
- Bebidas.
- Postres.
- Productos disponibles.
- Información de los productos.

### Investigar
- `filter()`
  - Filtrar productos según su precio, categoría o disponibilidad.
  - Ejemplo: obtener únicamente las bebidas o los productos baratos.
- `find()`
  - Buscar un producto específico dentro de la lista.
  - Encontrar un producto por su nombre o alguna otra característica.


---

## 👤 Cliente

### Objetivo
Mostrar al cliente la información actualizada de los productos disponibles.

Debe mostrar:
- Menú dinámico.
- Promociones disponibles (solo para el cliente).
- Productos disponibles.
- Productos actualizados dinámicamente según el stock.
- Información básica de cada producto, como:
  - Nombre.
  - Precio.
  - Categoría.
  - Disponibilidad.

### Investigar
- `map()`
  - Crear o transformar elementos a partir de una lista de productos.
  - Utilizarlo para generar el menú dinámicamente.
- `forEach()`
  - Recorrer los productos y mostrarlos en la página.
  - Utilizarlo para generar elementos del menú o mostrar información.


---

# 📚 Métodos de JavaScript a investigar

| Método / concepto | Uso principal |
|---|---|
| `reduce()` | Calcular totales a partir de una lista |
| Destructuring | Extraer datos de objetos o arreglos |
| `filter()` | Filtrar elementos que cumplen una condición |
| `find()` | Encontrar un elemento específico |
| `map()` | Transformar una lista y generar nuevos elementos |
| `forEach()` | Recorrer los elementos de una lista |