# Portfolio · Ricardo Molina

Portafolio personal bilingüe (Español / English) construido con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

## Características

- Diseño moderno, oscuro y totalmente responsivo
- Toggle de idioma ES/EN con persistencia en `localStorage`
- Secciones: Inicio, Habilidades, Experiencia, Proyectos y Contacto
- Datos cargados desde el CV (`/public/cv_ricardo_molina.pdf` disponible para descarga)
- Optimizado para SEO y para despliegue en Vercel

## Cómo correrlo

```bash
npm install        # solo la primera vez
npm run dev        # http://localhost:3000
```

Para construir y servir en modo producción:

```bash
npm run build
npm run start
```

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx        # Layout raíz + I18nProvider
│  ├─ page.tsx          # Composición de secciones
│  └─ globals.css       # Estilos base + Tailwind
├─ components/
│  ├─ Navbar.tsx        # Nav fijo + toggle de idioma
│  ├─ Hero.tsx          # Presentación + CTAs
│  ├─ Skills.tsx        # Stack técnico por categoría
│  ├─ Experience.tsx    # Línea de tiempo profesional
│  ├─ Projects.tsx      # Tarjetas de proyectos
│  ├─ Contact.tsx       # Email / teléfono / GitHub / LinkedIn
│  └─ Footer.tsx
└─ lib/
   ├─ i18n.tsx          # Contexto React de idioma
   ├─ translations.ts   # Textos ES / EN
   └─ profile.ts        # Datos de contacto y skills
```

## Personalización rápida

- **Datos personales / links**: `src/lib/profile.ts`
- **Textos en ES / EN**: `src/lib/translations.ts`
- **Proyectos nuevos**: añade entradas dentro de `projects.items` en `translations.ts`
- **Colores / fuentes**: `src/app/globals.css` y clases Tailwind en componentes

## Deploy

Recomendado en [Vercel](https://vercel.com/new): conecta el repositorio y se desplegará automáticamente sin configuración extra.

```bash
# Opcional: subirlo a un repositorio nuevo
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin <tu-repo>.git
git push -u origin main
```
