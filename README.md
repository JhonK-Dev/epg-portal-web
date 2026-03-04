# EPG Portal Web

Portal web de la Escuela de Postgrado de la Universidad Nacional de la Amazonía Peruana (UNAP).

## Descripción

Sitio web institucional de la EPG UNAP desarrollado con Astro y React. Presentan los programas académicos de maestría, doctorado y formación continua, información de admisión, noticias y eventos.

## 🛠️ Tecnologías

- **Framework**: [Astro](https://astro.build) 5.x con Islands Architecture
- **UI**: React 19 (para componentes interactivos)
- **Estilos**: Tailwind CSS 4.x
- **Testing**: Vitest + Testing Library
- **Deployment**: Node.js adapter

## 📁 Estructura del Proyecto

```
/
├── public/                    # Assets estáticos
│   └── images/               # Imágenes del sitio
├── src/
│   ├── components/           # Componentes reutilizables
│   │   └── ui/              # Componentes UI (Button, Badge, etc.)
│   ├── data/                # Datos estáticos del sitio
│   ├── features/            # Features organizados por dominio
│   │   ├── contacto/        # Página de contacto
│   │   ├── docentes/        # Página de docentes
│   │   ├── estudiantes/      # Página de estudiantes
│   │   ├── escuela/         # Página de la escuela
│   │   ├── home/            # Componentes del home
│   │   ├── navigation/      # Navbar y Footer
│   │   ├── programas/       # Listado y detalle de programas
│   │   ├── publicaciones/   # Publicaciones y noticias
│   │   └── servicios/      # Servicios de la EPG
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layouts de Astro
│   ├── lib/                 # Utilidades y configuración
│   │   ├── api/             # Cliente API y tipos
│   │   └── config/          # Configuración (tipos programas, etc.)
│   ├── pages/               # Páginas de Astro
│   ├── scripts/             # Scripts del cliente
│   ├── styles/              # Estilos globales
│   └── types/               # Tipos TypeScript
├── astro.config.mjs         # Configuración de Astro
├── package.json
├── tailwind.config.mjs      # Configuración de Tailwind
├── tsconfig.json
└── vitest.config.ts         # Configuración de tests
```

## 🚀 Comandos

| Comando | Acción |
|---------|--------|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Iniciar servidor de desarrollo |
| `pnpm build` | Construir para producción |
| `pnpm preview` | Previsualizar build local |
| `pnpm test` | Ejecutar tests en modo watch |
| `pnpm test:run` | Ejecutar tests una vez |
| `pnpm test:coverage` | Ejecutar tests con coverage |

## 🔧 Variables de Entorno

Crear `.env.local` con las siguientes variables:

```env
# API de programas (opcional - usa fallback a datos mock si no está configurada)
PUBLIC_API_URL=http://localhost:3000

# Formspree para formularios
FORMSPREE_ID=your_formspree_id
```

## 🧪 Testing

El proyecto incluye tests para:
- Componentes UI de React
- Hooks personalizados (use-debounce)
- Utilidades y formateadores
- Cliente API

```bash
pnpm test:coverage  # Coverage report
```

## 📝 Licencia

MIT
