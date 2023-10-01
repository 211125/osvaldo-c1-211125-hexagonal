<<<<<<< HEAD
# Arisel-211119-hexagonal

# Para ejecutar debe copilar primero

 # tsc --w

 y ejecutar desde Packetjson en el comando start

 # "start": "tsc && node dist/app.js

 # Documentacion

 https://documenter.getpostman.com/view/29986642/2s9YJaWiZu

 https://documenter.getpostman.com/view/29986642/2s9YJaWiZv

 https://documenter.getpostman.com/view/29986642/2s9YJaWiZw

 https://documenter.getpostman.com/view/29986642/2s9YJaWiZx

 https://documenter.getpostman.com/view/29986642/2s9YJaWiZy

Usuarios:
Listar todos los usuarios: El administrador del sistema puede ver una lista completa de todos los usuarios registrados en la plataforma.
Listar todos los usuarios inactivos: El administrador puede ver una lista de usuarios que no han iniciado sesión o interactuado con la plataforma durante un período específico.
Filtrar usuarios por nombre, email, celular: Los usuarios pueden buscar otros usuarios en función de su nombre, dirección de correo electrónico o número de celular.
Mostrar un usuario: Cualquier usuario registrado puede ver su propio perfil o el perfil de otro usuario.
Agregar nuevo usuario: Los administradores pueden agregar nuevos usuarios a la plataforma.
Actualizar usuario: Los usuarios pueden actualizar su información personal, como nombre, dirección de correo electrónico o número de teléfono.
Actualizar contraseña: Los usuarios pueden cambiar su contraseña de acceso a la plataforma.
Eliminar usuario: Los administradores pueden eliminar usuarios de la plataforma.
Inactivar usuario: Los administradores pueden desactivar temporalmente la cuenta de un usuario sin eliminarla.

Libros:
Listar todos los libros: Los usuarios pueden ver una lista completa de todos los libros disponibles en la biblioteca.
Listar todos los libros inactivos: Los administradores pueden ver una lista de libros que están temporalmente fuera de circulación o no disponibles.
Listar todos los libros con reseñas: Los usuarios pueden buscar libros que tengan reseñas de otros usuarios.
Filtrar código por título, autor, código único o folio del libro: Los usuarios pueden buscar libros específicos utilizando diferentes criterios de búsqueda.
Listar un libro: Los usuarios pueden ver la información detallada de un libro en particular.
Agregar nuevo libro: Los administradores pueden agregar nuevos libros a la biblioteca.
Actualizar libro: Los administradores pueden actualizar la información de un libro, como título, autor o categoría.
Eliminar libro: Los administradores pueden eliminar libros de la biblioteca.
Inactivar libro: Los administradores pueden marcar un libro como inactivo temporalmente.
Actualizar libro como prestado: Los usuarios pueden marcar un libro como prestado y registrar quién lo ha tomado prestado y cuándo.

Reseñas:
Listar todas las reseñas: Los usuarios pueden ver una lista de todas las reseñas realizadas en la plataforma.
Listar reseñas inactivas: Los administradores pueden ver reseñas que han sido desactivadas temporalmente.
Filtrar reseñas por usuario: Los usuarios pueden buscar reseñas realizadas por un usuario en particular.
Mostrar una reseña: Cualquier usuario puede ver una reseña específica.
Eliminar reseña: El usuario que agregó una reseña puede eliminarla.
Inactivar reseña: Los administradores pueden desactivar temporalmente una reseña.
Actualizar reseña: El usuario que agregó una reseña puede actualizarla.

Autenticación:
Autenticar: Los usuarios pueden iniciar sesión en la plataforma proporcionando sus credenciales.
Cerrar sesión: Los usuarios pueden cerrar sesión para salir de la plataforma y proteger su cuenta.

















la estructura de entidades y relaciones

1. **Entidad Usuario**:
   - Atributos: ID (clave primaria), Nombre, Email, Celular, Contraseña, Estado (activo/inactivo)

2. **Entidad Libro**:
   - Atributos: ID (clave primaria), Título, Autor, Código Único, Folio, Estado (activo/inactivo), Disponible (disponible/prestado)

3. **Entidad Reseña**:
   - Atributos: ID (clave primaria), Contenido, Fecha de Creación, Estado (activo/inactivo)

4. **Entidad Préstamo**:
   - Atributos: ID (clave primaria), ID del Libro (clave foránea), ID del Usuario (clave foránea), Fecha de Préstamo, Fecha de Devolución, Estado (activo/inactivo)

5. **Entidad Autenticación**:
   - Atributos: ID (clave primaria), ID del Usuario (clave foránea), Token de Sesión

6. **Entidad Autorización**:
   - Atributos: ID (clave primaria), ID del Usuario (clave foránea), Rol (administrador/usuario normal)

Las relaciones entre estas entidades serían las siguientes:

- Un usuario puede tener varias reseñas, por lo que hay una relación uno a muchos entre Usuario y Reseña.

- Un libro puede tener varias reseñas, por lo que hay una relación uno a muchos entre Libro y Reseña.

- Un usuario puede realizar varios préstamos de libros, lo que implica una relación uno a muchos entre Usuario y Prestamo, y una relación uno a muchos entre Libro y Prestamo.

- Un usuario puede tener una sola sesión activa a la vez, lo que implica una relación uno a uno entre Usuario y Autenticación.

- Un usuario puede tener varios roles de autorización (por ejemplo, administrador y usuario normal), lo que implica una relación uno a muchos entre Usuario y Autorización.
=======
# 211125 Hernandez Gutierrez Osvaldo Angel
https://identity.getpostman.com/handover/multifactor?user=19354765&handover_token=580eb55d-51d5-48f2-aa15-7aabfd8bc30f
>>>>>>> 1ed3e55256a2171d3bd60414e34fc59cb45ee874
