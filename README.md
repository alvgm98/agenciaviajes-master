# Agencia de Viajes

## Descripción del Proyecto
Este es un proyecto desarrollado en Node.js con el motor de plantillas PUG, que simula una agencia de viajes. Permite a los usuarios explorar distintos destinos turísticos, visualizar detalles de los viajes disponibles y registrar compras. Además, cuenta con una sección de testimonios de clientes, proporcionando una experiencia más interactiva.

### Característica Adicional
Como parte de una modificación solicitada en clase, se ha incorporado un nuevo modelo llamado **Review**, que permite a los usuarios dejar reseñas sobre los viajes. Estas reseñas se muestran en la página de cada destino, enriqueciendo la experiencia de los futuros viajeros.

---

### Proyecto Desplegado
Puedes acceder a la versión en línea del proyecto aquí: [Agencia de Viajes](https://agencia-de-viajes-n5wb.onrender.com/)

---

## Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución para JavaScript en el backend
- **Express.js** - Framework para manejar rutas y peticiones HTTP
- **PUG** - Motor de plantillas para la renderización del frontend
- **Sequelize** - ORM para la gestión de la base de datos
- **MySQL** - Base de datos utilizada para almacenar la información de los viajes, usuarios y reseñas

---

## Instalación y Configuración
### Prerrequisitos
Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

---

## Estructura del Proyecto
```
📂 agencia-de-viajes
 ├── 📁 config        # Configuración del proyecto
 ├── 📁 controllers   # Controladores de lógica de negocio
 ├── 📁 models        # Modelos de Sequelize
 ├── 📁 public        # Archivos estáticos (CSS, JS, imágenes)
 ├── 📁 routers       # Definición de rutas
 ├── 📁 views         # Plantillas PUG
 ├── 📄 .gitignore    # Archivos y carpetas ignorados por Git
 ├── 📄 README.md     # Documentación del proyecto
 ├── 📄 index.js      # Archivo principal del servidor
 ├── 📄 package-lock.json # Dependencias bloqueadas
 ├── 📄 package.json  # Dependencias y configuración
```

---

## Funcionalidades Principales
✅ Listado de viajes disponibles con detalles
✅ Visualización de información detallada de cada destino
✅ Registro de compras de viajes
✅ Sección de testimonios de clientes
✅ **Nuevo:** Sistema de reseñas para cada viaje

