# 💻 Servicios de Tecnología

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6C5CE7?logo=vite&logoColor=yellow)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

Aplicación desarrollada con **React + TypeScript + Vite**, diseñada para mostrar los servicios ofrecidos por una empresa de tecnología.  
Incluye una interfaz pública y un panel administrativo con un CRUD funcional (crear, editar, eliminar y listar servicios).

---

## 🌐 Demo en línea

🔗 **Versión desplegada en Vercel:**  
👉 [https://servicios-tecnologicos.vercel.app/](https://servicios-tecnologicos.vercel.app/)

---

## 🖼️ Capturas de pantalla

A continuación, puedes agregar imágenes del sitio (interfaz, secciones, CRUD, etc.).  
Guárdalas en una carpeta `screenshots/` o súbelas directamente al repositorio.

---

### 📸 Portafolio público
<p align="center">
  <img width="90%" alt="Portafolio 1" src="https://github.com/user-attachments/assets/6ba83a8a-823c-429c-87cc-857e4161405f" style="margin-bottom: 20px;">
</p>

<p align="center">
  <img width="90%" alt="Portafolio 2" src="https://github.com/user-attachments/assets/74ed2f50-7f81-4e79-8310-d330b3686f3e" style="margin-bottom: 40px;">
</p>

---

### ⚙️ Panel administrativo
<p align="center">
  <img width="90%" alt="Panel Admin 1" src="https://github.com/user-attachments/assets/a89c3e13-a8c5-4e72-b400-15040d111317" style="margin-bottom: 20px;">
</p>

<p align="center">
  <img width="90%" alt="Panel Admin 2" src="https://github.com/user-attachments/assets/3a149fe7-b667-4df2-af4a-a8d08628b02d" style="margin-bottom: 40px;">
</p>

---

### 🧩 Detalle de servicio
<p align="center">
  <img width="90%" alt="Detalle de servicio" src="https://github.com/user-attachments/assets/29b2392a-5ccc-49e7-acb0-3d878f5a7ecc" style="margin-bottom: 40px;">
</p>

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React 18**  
- 🟦 **TypeScript 5**  
- ⚡ **Vite**  
- 🎨 **Tailwind CSS**  
- 🧠 **React Hooks**  
- 💾 **LocalStorage** (persistencia de datos local)  
- ☁️ **Despliegue:** Vercel  

---

## 🧩 Funcionalidades principales

### 🌐 Sitio público
- Página de inicio con presentación e información de la empresa  
- Catálogo de servicios con imágenes y descripciones  
- Navegación fluida con React Router  
- Componentes reutilizables (`Navbar`, `Footer`, `Card`, etc.)

### 🔐 Panel Administrativo (CRUD)
- Crear, editar y eliminar servicios  
- Validaciones de campos obligatorios  
- Persistencia local de los datos  
- Interfaz simple y moderna  

---

## 🧭 Manual de la Aplicación

A continuación, se describen las principales funciones del sistema **Servicios Tecnológicos**, organizadas por áreas: **portafolio público** (interfaz visible al usuario) y **panel administrativo** (gestión interna del contenido).  

---

### 🌐 Sección Pública – Portafolio de Servicios

1. **Página de Inicio:** Presenta la información general de la empresa y un resumen de los principales servicios tecnológicos.  
2. **Navegación Principal:** Barra de menú superior que permite desplazarse entre las secciones Inicio, Servicios, Nosotros y Contacto.  
3. **Carrusel o Slider de Imágenes:** Muestra imágenes destacadas con transiciones automáticas.  
4. **Listado de Servicios:** Despliega todas las soluciones tecnológicas almacenadas en la base de datos local (`database.ts`).  
5. **Detalle del Servicio:** Al seleccionar un servicio, el usuario puede visualizar información ampliada.  
6. **Buscador de Servicios:** Permite filtrar servicios por nombre o categoría.  
7. **Sección “Nosotros”:** Presenta la historia, misión, visión y valores de la empresa.  
8. **Formulario de Contacto:** Permite enviar solicitudes de información (simulado en frontend).  
9. **Pie de Página (Footer):** Incluye redes sociales e información de contacto.  
10. **Diseño Responsivo:** La interfaz se adapta automáticamente a diferentes pantallas.

---

### ⚙️ Sección Administrativa – Panel de Gestión

11. **Inicio de Sesión del Administrador:** Acceso al panel mediante credenciales simuladas.  
12. **Panel Principal:** Muestra un resumen de los servicios registrados.  
13. **Agregar Servicio:** Formulario para crear nuevos servicios con validaciones.  
14. **Editar Servicio:** Permite modificar la información de servicios existentes.  
15. **Eliminar Servicio:** Opción para borrar registros del catálogo.  
16. **Validación de Campos:** Comprueba que los datos requeridos estén completos.  
17. **Actualización Automática:** Los cambios se reflejan instantáneamente en la vista pública.  
18. **Gestión Local de Datos:** Administración temporal desde `database.ts`.  
19. **Navegación Interna:** Permite moverse entre secciones sin recargar la página (React Router).  
20. **Despliegue en la Nube:** La app está alojada en **Vercel**, accesible desde cualquier dispositivo.

---

## 📂 Estructura del proyecto

```text
servicios_de_tecnologia/
├── public/
│   └── logo.svg
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tailwind.config.js
└── tsconfig.json

