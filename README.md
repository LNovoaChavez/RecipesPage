# 🥗 Cooking 🍳  
**¡Descubre y comparte las mejores recetas del mundo!**  

Bienvenido a **Cooking**, una aplicación que te permite explorar recetas de todo tipo y subir tus propias creaciones culinarias si estás registrado. 🍰✨  
Comparte tus recetas, encuentra inspiración para tus próximas comidas y conviértete en parte de nuestra comunidad de amantes de la cocina.  

---

## 🚀 Funcionalidades  
✅ **Explorar recetas:** Visualiza una variedad de recetas con imágenes, descripciones e ingredientes detallados.  
✅ **Subir recetas propias:** Si estás registrado, puedes compartir tus creaciones culinarias con la comunidad.  
✅ **Personalización:** Edita el estado de tus recetas y organízalas como quieras.  
✅ **Autenticación segura:** Protegemos tu cuenta con tokens para garantizar tu privacidad.  



---

## 🛠️ Tecnologías Utilizadas  

### 📦 **Backend**  
- **Node.js**  
- **Express.js**  
- **TypeORM**  
- **JWT** para autenticación.  

### 🎨 **Frontend**  
- **HTML5**
- **JavaScript**  
- **NextJS** (puedes personalizarlo si cambias a Angular o Vue.js).
- **Tailwind CSS**

### 🗄️ **Base de Datos**  
- **PostgreSQL** como base de datos relacional.  

### 🔧 **Herramientas y Librerías Adicionales**  
- **Nodemon** para desarrollo.  
- **dotenv** para manejar variables de entorno.  

---

## 📩 Contacto  
¿Tienes alguna duda o sugerencia? ¡Contáctame!  
- **Email:** luznovoach@gmail.com  
- **LinkedIn:** [Mi Linkedin](https://www.linkedin.com/in/luz-novoa-ch%C3%A1vez-442a75317/)  

---

## 🚀 Instrucciones para Levantar el Proyecto

Para levantar el proyecto, sigue los pasos a continuación:

### 1. Clonar el Repositorio

Primero, clona el repositorio a tu máquina local:

```bash
git clone <url-del-repositorio>
--
2. Abrir el Proyecto

Abre el proyecto en tu editor de código favorito, por ejemplo, Visual Studio Code:

3. Se colocan en la raiz del proyecto y abren una terminal y corren el comando

npm install

4. Luego abren una terminal en cada carpeta (back y front/front)

Previamente configuran sus variables de entorno y en la terminal del back van a correr el comando "npm start" antes habiendo activado en data-source.ts lo siguiente:
{
  "dropSchema": true,
  "synchronize": true
}

5. luego en la carpeta del front/front corren el comando npm run dev y listo
 
