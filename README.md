# Desafio Amigo Secreto 🎅

Este es el **primer desafío de Alura Latam**, implementado en HTML, CSS y JavaScript. Permite ingresar nombres, mostrarlos en una lista y sortear aleatoriamente uno como "amigo secreto".

---

## 📁 Estructura del proyecto

- `index.html` – plantilla principal con el formulario y elementos donde se muestran los participantes y el resultado.
- `style.css` – estilos visuales para la presentación del sitio.
- `app.js` – lógica del sorteo: agrega nombres, valida campos vacíos y realiza el sorteo aleatorio.
- `assets/` – imágenes u otros recursos multimedia utilizados en la app.

---

## 🛠️ Tecnologías

- **HTML5** – estructura y elementos de la página.
- **CSS3** – diseño y estilo visual.
- **JavaScript (ES6+)** – interacción, validación y funcionalidad del sorteo.

---

## 🚀 Uso / Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/eze2013/DesafioAmigoSecreto.git
   cd DesafioAmigoSecreto
Abre index.html en tu navegador.

Empieza a agregar nombres y luego haz clic en "Sortear Amigo" para ver quién le toca a quién.

✅ Funcionalidades
✅ Agregar nombre: permite ingresar múltiples nombres en una lista dinámica.

⚠️ Validación: alerta si el campo de texto está vacío al intentar agregar.

🎄 Visualización de la lista: muestra los nombres agregados en pantalla.

🏆 Sorteo aleatorio: selecciona uno al azar de la lista mostrada.

🧩 Cómo funciona (lógica)
El usuario introduce un nombre y hace clic en "Agregar".

app.js valida que el campo no esté vacío.

Se agrega el nombre a un array y aparece en la lista del DOM.

Al hacer clic en "Sortear Amigo":

Se calcula un índice al azar entre 0 y listado.length - 1.

Se extrae el nombre correspondiente y se despliega como resultado.

🧪 Pruebas recomendadas
Intentar sortear con 1, 2 o más nombres.

Ejecutar sorteo con campo vacío para verificar la alerta de validación.

Probar en distintos navegadores (Chrome, Firefox, Edge).

🌟 Mejoras sugeridas
Permitir eliminar nombres de la lista.

Añadir mensaje de “No hay participantes” si se intenta sortear sin nombres.

Guardar lista en localStorage para persistencia entre sesiones.

Añadir animaciones al sorteo (efecto de “ruleta” o fade).

Implementar diseño responsivo para móviles.

📝 Licencia
Proyecto de práctica y sin licencia específica. Se permite uso libre para aprendizaje.

📌 Autor
@eze2013
Primer desafío del curso de Alura Latam.
