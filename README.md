# ¿Cómo funciona la Web?

Proyecto educativo interactivo que explica visualmente el proceso completo que ocurre desde que un usuario escribe una URL en el navegador hasta que recibe y visualiza una página web.

## Descripción

Este mini sitio web educativo está diseñado para estudiantes que están aprendiendo conceptos de HTTP, cliente-servidor, HTML5 y diseño web. Explica de forma clara y visual los cinco pasos del ciclo de una solicitud web.

## Tecnologías utilizadas
| HTML5 — Estructura semántica |
| CSS3 — Estilos personalizados |
| Framework Bulma 1.0.2 |
| JavaScript Navbar burger + formulario |

### Framework Bulma

Bulma se carga mediante CDN:
```
https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css
```

Componentes de Bulma utilizados:
- **Navbar** — Navegación responsive con burger menu
- **Hero** — Sección principal de cada página con degradado
- **Cards** — Tarjetas para los pasos y fases
- **Columns / Grid** — Distribución responsive del contenido
- **Breadcrumb** — Indicador de progreso entre páginas
- **Progress** — Barra de progreso numérica (1/5 a 5/5)
- **Notification** — Alertas informativas (is-info is-light)
- **Message** — Bloques informativos con encabezado
- **Tabs** — Navegación entre fases de renderizado
- **Table** — Tablas de métodos HTTP y protocolos
- **Box** — Contenedores destacados para artículos
- **Tag** — Badges de métodos HTTP (GET, POST, PUT, DELETE)
- **Button** — Botones de navegación prev/next
- **Form** — Formulario de contacto accesible

## Estructura del proyecto

```
proyecto/
│
├── index.html                  ← Página 1: Inicio
│
├── paginas/
│   ├── solicitud.html          ← Página 2: Solicitud HTTP
│   ├── servidor.html           ← Página 3: Servidor Web
│   ├── renderizado.html        ← Página 4: Renderizado HTML5
│   └── ejemplo.html            ← Página 5: Ejemplo Práctico
│
├── css/
│   ├── estilos.css             ← Estilos base y utilidades propias
│   └── personalizados.css      ← Sobrescrituras y personalización de Bulma
│
├── img/
│   ├── url.png
│   ├── ejemplo-http.png
│   ├── servidor-web.png
│   ├── ejemplo-encabezado.png
│   ├── ejemplo-html.png
│   └── cliente-servidor.png
│
├── js/
│   └── navbar.js               ← Toggle del navbar burger (Bulma)
│
└── README.md
```

## Instrucciones para ejecutar

1. Clona o descarga el proyecto en tu computadora.
2. Abre el archivo `index.html` con cualquier navegador moderno (Chrome, Firefox, Edge).
3. No requiere instalación de dependencias ni servidor local.
4. Asegúrate de tener conexión a Internet para cargar Bulma desde CDN.

Luego abre `http://localhost:8000` en tu navegador.

## Páginas

| # | Archivo | Tema |
|---|---------|------|
| 1 | `index.html` | ¿Qué ocurre al ingresar una URL? |
| 2 | `paginas/solicitud.html` | Solicitud HTTP: métodos y ejemplo |
| 3 | `paginas/servidor.html` | Procesamiento en el servidor web |
| 4 | `paginas/renderizado.html` | Respuesta y renderizado HTML5 |
| 5 | `paginas/ejemplo.html` | Mini página renderizada completa |

## Checklist de Accesibilidad (WCAG 2.1 AA)

✔ Contraste adecuado entre fondo y texto  
✔ Alt descriptivo en todas las imágenes  
✔ Navegación semántica con `<header>`, `<nav>`, `<main>`, `<footer>`  
✔ Hover y Focus visibles en botones y enlaces  
✔ Diseño responsive (móvil, tablet, escritorio)  
✔ Labels correctamente asociados a campos del formulario  
✔ Jerarquía correcta de encabezados (H1 → H2 → H3)  
✔ `aria-label` en navbar burger, formulario y elementos interactivos  
✔ `aria-current="page"` en breadcrumb de página activa  
✔ `aria-live="polite"` en mensaje de éxito del formulario  
✔ `aria-expanded` en el botón burger de navegación  
✔ `role="tablist"` y `role="tabpanel"` en componente Tabs  
✔ `loading="lazy"` en todas las imágenes  
✔ `rel="noopener noreferrer"` en enlaces externos  
✔ `novalidate` + validación JS accesible en el formulario  

## Autor

**Jorge Eras**  
Proyecto educativo — ¿Cómo funciona la Web?
