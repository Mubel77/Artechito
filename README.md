# Artechito — Landing & Demo

**Artechito** es la landing y interfaz pública del proyecto SBI — Sistema de Boletería Inteligente. Esta página presenta la solución, contiene una demo interactiva en video, información técnica y links útiles para quienes quieran evaluar o integrar la plataforma.

## Propósito de la landing
- Presentar de forma clara y atractiva la solución basada en IA para gestión de boletería teatral.
- Permitir a visitantes probar la demo (video) en un modal centrado y amigable para escritorio y móviles.
- Facilitar el contacto y la orientación técnica (arquitectura, integración n8n, Supabase, Python).
- Servir como punto de entrada para demostraciones comerciales y pruebas rápidas.

## Estructura del repositorio
- `src/` — componentes React y estilos (Tailwind) para la landing.
- `public/data/site.json` — contenido editable (texto, links, logo, `videoUrl`, `qrUrl`).
- `package.json` — scripts y dependencias del proyecto.
- `vite.config.js` — configuración de Vite (dev server y plugin React).

## Motivación de diseño
La landing se construyó para transmitir una estética tecnológica y amigable:
- Paleta principal: azul claro, verde (del logo) y violeta (del logo). Estos colores se usan en títulos, botones y elementos decorativos.
- Fondo: panel central claro con decoraciones sutiles (patrón tipo circuito y burbujas de color) para reforzar la idea de tecnología sin opacar el contenido.
- Identidad: el logo y el nombre `Artechito` se muestran de forma prominente en el header y hero.

## Características principales
- Header responsive con logo y texto de marca.
- Sección Hero con QR y panel decorativo.
- Modal de video centrado: al presionar el botón de demo se abre un overlay centrado en todas las pantallas.
- En móviles, el modal intenta forzar orientación landscape (cuando el navegador/OS lo permite) y muestra una sugerencia para girar el dispositivo en modo portrait.
- QR con logo centrado y exportable desde `public/data/site.json`.

## Tecnologías
- React 18
- Vite (dev server + build)
- Tailwind CSS
- Lucide React (iconos)

## Cómo ejecutar el proyecto (desarrollo)
1. Instalar dependencias:
```
npm install
```
2. Ejecutar servidor dev (escucha en `0.0.0.0` por defecto):
```
npm run dev -- --host
```
3. Abrir en el navegador:
- Local: `http://localhost:5173`
- Network: usar la IP mostrada por Vite (ej. `http://192.168.x.x:5173`) para abrir desde otra máquina en la misma LAN.

## Compartir públicamente (opciones rápidas)
- ngrok: `ngrok http 5173` → URL pública temporal.
- localtunnel: `npx localtunnel --port 5173` → URL pública temporal.
- Despliegue: construir con `npm run build` y desplegar `dist/` en Vercel, Netlify o similar.

## Configuración de contenido
- Edita `public/data/site.json` para cambiar textos, logo, `qrUrl` y agregar `videoUrl`:

Ejemplo (dentro de `demo`):
```json
"demo": {
  "title": "Demo del Sistema",
  "description": "Mira cómo funciona SBI en acción",
  "videoUrl": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  "videoPlaceholder": true
}
```

## Notas de accesibilidad y buenas prácticas
- No incluir archivos `.env` con credenciales en el repositorio.
- Verificar que el QR apunte a una URL válida.
- Mantener imágenes optimizadas para web para mejorar rendimiento.

## Cómo contribuir
- Crear una rama nueva para cada feature: `git checkout -b feature/nombre`.
- Hacer commits pequeños y descriptivos.
- Abrir PR contra la rama `grupo3-advanced` o la rama principal que use el proyecto.

## Contacto
- Email: `contacto@artechito.com`

---
Última actualización: Diciembre 2025
