# EPG Portal Web - Sistema de Issues

> **INSTRUCCIONES PARA EL AGENTE:** Al iniciar cada sesion, lee este archivo para conocer el estado actual de los issues. Actualiza el estado de cada issue cuando se complete.

**Ultima actualizacion:** 2026-02-05
**Total issues:** 32
**Completados:** 8
**Pendientes:** 24

---

## Resumen por Categoria

| Categoria | Total | Completados | Pendientes | GitHub Issues |
|-----------|-------|-------------|------------|---------------|
| Colores Hardcodeados | 8 | 8 | 0 | #30-#37 (Todos cerrados) |
| Codigo Duplicado | 15 | 0 | 15 | Pendiente crear |
| Accesibilidad | 6 | 0 | 6 | Pendiente crear |
| Consistencia de Diseno | 3 | 0 | 3 | Pendiente crear |

---

## ISSUES DE COLORES HARDCODEADOS

### COL-001: Agregar variables CSS semanticas al sistema de diseno
- **Estado:** `[x] Completado`
- **GitHub:** [#30](https://github.com/JhonK-Dev/epg-portal-web/issues/30)
- **Prioridad:** Alta
- **Archivo:** `src/styles/global.css`
- **Descripcion:** Agregar variables CSS para colores semanticos que faltan en el sistema de diseno.
- **Solucion:** Agregar las siguientes variables:
  ```css
  --color-success: #22c55e;
  --color-success-foreground: #ffffff;
  --color-warning: #f59e0b;
  --color-warning-foreground: #000000;
  --color-info: #3b82f6;
  --color-info-foreground: #ffffff;
  --color-maestria: #2563eb;
  --color-doctorado: #9333ea;
  --color-diplomado: #059669;
  --color-curso: #d97706;
  ```

---

### COL-002: Reemplazar hex hardcodeado en WelcomeSection
- **Estado:** `[x] Completado`
- **GitHub:** [#31](https://github.com/JhonK-Dev/epg-portal-web/issues/31)
- **Prioridad:** Alta
- **Archivo:** `src/features/home/components/WelcomeSection.tsx`
- **Linea:** 39
- **Descripcion:** El color `#FFF9E6` esta hardcodeado directamente en el componente.
- **Solucion:** Agregada variable CSS `--color-epg-gold-soft: #FFF9E6` y reemplazado por `bg-epg-gold-soft`.

---

### COL-003: Reemplazar bg-green-500 en badge de admision Hero
- **Estado:** `[x] Completado`
- **GitHub:** [#32](https://github.com/JhonK-Dev/epg-portal-web/issues/32)
- **PR:** [#40](https://github.com/JhonK-Dev/epg-portal-web/pull/40) (Merged)
- **Prioridad:** Alta
- **Archivo:** `src/features/home/components/Hero.tsx`
- **Linea:** 93
- **Descripcion:** Badge "ABIERTO" usa `bg-green-500` en lugar de variable semantica.
- **Solucion:** Reemplazado por `bg-success` usando la variable CSS semantica.

---

### COL-004: Reemplazar bg-green-400 en AdmissionCTA
- **Estado:** `[x] Completado`
- **GitHub:** [#33](https://github.com/JhonK-Dev/epg-portal-web/issues/33)
- **PR:** [#41](https://github.com/JhonK-Dev/epg-portal-web/pull/41) (Merged)
- **Prioridad:** Alta
- **Archivo:** `src/features/home/components/AdmissionCTA.tsx`
- **Linea:** 18
- **Descripcion:** Indicador de estado usa color hardcodeado.
- **Solucion:** Reemplazado por `bg-success` usando la variable CSS semantica.

---

### COL-005: Reemplazar bg-red-500 en ServiciosGrid
- **Estado:** `[x] Completado`
- **GitHub:** [#34](https://github.com/JhonK-Dev/epg-portal-web/issues/34)
- **PR:** [#42](https://github.com/JhonK-Dev/epg-portal-web/pull/42) (Merged)
- **Prioridad:** Media
- **Archivo:** `src/features/servicios/components/ServiciosGrid.tsx`
- **Linea:** 134
- **Descripcion:** Icono usa `bg-red-500` sin justificacion semantica.
- **Solucion:** Reemplazado por `bg-destructive` usando la variable CSS semantica.

---

### COL-006: Reemplazar colores destructivos en ProgramasLista
- **Estado:** `[x] Completado`
- **GitHub:** [#35](https://github.com/JhonK-Dev/epg-portal-web/issues/35)
- **PR:** [#43](https://github.com/JhonK-Dev/epg-portal-web/pull/43) (Merged)
- **Prioridad:** Media
- **Archivo:** `src/features/programas/components/ProgramasLista.tsx`
- **Linea:** 284
- **Descripcion:** Accion destructiva usa `text-red-600 hover:text-red-700 hover:bg-red-50`.
- **Solucion:** Reemplazado por variantes de `--destructive` del tema (`text-destructive`, `hover:text-destructive-dark`, `hover:bg-destructive/10`).

---

### COL-007: Centralizar colores de redes sociales en DocenteDetail
- **Estado:** `[x] Completado`
- **GitHub:** [#36](https://github.com/JhonK-Dev/epg-portal-web/issues/36)
- **PR:** [#44](https://github.com/JhonK-Dev/epg-portal-web/pull/44) (Merged)
- **Prioridad:** Baja
- **Archivo:** `src/features/docentes/components/DocenteDetail.tsx`
- **Lineas:** 105-140
- **Descripcion:** Colores de ORCID, Google Scholar, LinkedIn, ResearchGate estan hardcodeados.
- **Solucion:** Creado `socialNetworkColors` en `constants.ts` y funcion helper `getSocialNetworkClasses()` para centralizar colores.

---

### COL-008: Migrar colores de constants.ts a variables CSS
- **Estado:** `[x] Completado`
- **GitHub:** [#37](https://github.com/JhonK-Dev/epg-portal-web/issues/37)
- **PR:** [#45](https://github.com/JhonK-Dev/epg-portal-web/pull/45) (Merged)
- **Prioridad:** Media
- **Archivo:** `src/lib/constants.ts`, `src/styles/global.css`
- **Descripcion:** 100+ clases Tailwind hardcodeadas para colores de tipos de programa, publicaciones, etc.
- **Solucion:** Agregadas 40+ variables CSS en global.css para tipos de programa, grados academicos, modalidades, publicaciones y documentos. Actualizado constants.ts para usar las nuevas clases semanticas (ej: `bg-maestria-light text-maestria`).

---

## ISSUES DE CODIGO DUPLICADO

### DUP-001: Extraer componente CTABanner
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/servicios/components/ServiciosGrid.tsx` (166-200)
  - `src/features/escuela/components/EscuelaContent.tsx` (384-412)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (488-524)
  - `src/features/docentes/components/DocentesGrid.tsx` (268-290)
  - `src/features/programas/components/ProgramasLista.tsx` (342-363)
  - `src/features/admision/components/AdmisionContent.tsx` (612-652)
- **Descripcion:** Banner CTA con gradiente navy y botones duplicado en 6 archivos.
- **Solucion:** Crear `src/components/ui/cta-banner.tsx` con props configurables.

---

### DUP-002: Extraer componente SectionHeader
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/escuela/components/EscuelaContent.tsx` (247-259, 298-379)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (89-93, 126-435)
  - `src/features/admision/components/AdmisionContent.tsx` (518-607)
  - `src/features/home/components/FeaturedPrograms.tsx` (16-27)
  - `src/features/home/components/NewsAndEvents.tsx` (67-83)
  - `src/features/home/components/StatsSection.tsx` (53-64)
- **Descripcion:** Header de seccion con badge y descripcion duplicado en multiples archivos.
- **Solucion:** Crear `src/components/ui/section-header.tsx`.

---

### DUP-003: Extraer componente SearchInput
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/publicaciones/components/PublicacionesLista.tsx` (122-140)
  - `src/features/programas/components/ProgramasLista.tsx` (151-169)
  - `src/features/docentes/components/DocentesGrid.tsx` (88-106)
- **Descripcion:** Input de busqueda con icono y boton de limpiar duplicado.
- **Solucion:** Crear `src/components/ui/search-input.tsx`.

---

### DUP-004: Extraer componente FilterTabs
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/publicaciones/components/PublicacionesLista.tsx` (100-120)
  - `src/features/docentes/components/DocentesGrid.tsx` (65-86)
- **Descripcion:** Tabs de filtro con contador duplicados.
- **Solucion:** Crear `src/components/ui/filter-tabs.tsx`.

---

### DUP-005: Extraer componente EmptyState
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/publicaciones/components/PublicacionesLista.tsx` (207-227)
  - `src/features/programas/components/ProgramasLista.tsx` (327-338)
  - `src/features/docentes/components/DocentesGrid.tsx` (110-130)
- **Descripcion:** Estado vacio / sin resultados duplicado.
- **Solucion:** Crear `src/components/ui/empty-state.tsx`.

---

### DUP-006: Extraer componente PageHero
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/programas/components/ProgramaDetail.tsx` (33-113)
  - `src/features/publicaciones/components/PublicacionDetail.tsx` (36-92)
  - `src/features/docentes/components/DocenteDetail.tsx` (39-151)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (532-547)
- **Descripcion:** Hero de pagina con breadcrumb duplicado en paginas de detalle.
- **Solucion:** Crear `src/components/ui/page-hero.tsx`.

---

### DUP-007: Extraer componente IconCircle
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/servicios/components/ServiciosGrid.tsx` (110-112, 134-136)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (104-106, 399-401)
  - `src/features/escuela/components/EscuelaContent.tsx` (102-104, 135-137, 307-323)
  - `src/features/docentes/components/DocentesGrid.tsx` (229-259)
  - `src/features/admision/components/AdmisionContent.tsx` (51-87)
  - `src/features/home/components/StatsSection.tsx` (75-77)
- **Descripcion:** Contenedor circular de icono duplicado.
- **Solucion:** Crear `src/components/ui/icon-circle.tsx`.

---

### DUP-008: Extraer componente FormInput
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/contacto/components/ContactForm.tsx` (182-288)
  - `src/features/contacto/components/NewsletterForm.tsx` (76-194)
- **Descripcion:** Input de formulario con icono y validacion duplicado.
- **Solucion:** Crear `src/components/ui/form-input.tsx`.

---

### DUP-009: Extraer componente Accordion
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (437-469)
  - `src/features/admision/components/AdmisionContent.tsx` (433-461)
- **Descripcion:** Items de FAQ/Accordion duplicados.
- **Solucion:** Crear `src/components/ui/accordion.tsx`.

---

### DUP-010: Extraer componente LinkArrow
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:**
  - `src/features/home/components/FeaturedPrograms.tsx` (98-103)
  - `src/features/servicios/components/ServiciosGrid.tsx` (84-89)
  - `src/features/publicaciones/components/PublicacionesLista.tsx` (185-187)
  - `src/features/home/components/NewsAndEvents.tsx` (113-117)
- **Descripcion:** Link con flecha "Ver mas" duplicado.
- **Solucion:** Crear `src/components/ui/link-arrow.tsx`.

---

### DUP-011: Extraer componente StatItem
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:**
  - `src/features/home/components/StatsSection.tsx` (66-90)
  - `src/features/escuela/components/EscuelaContent.tsx` (262-281)
  - `src/features/home/components/Hero.tsx` (73-86)
- **Descripcion:** Item de estadistica duplicado.
- **Solucion:** Crear `src/components/ui/stat-item.tsx`.

---

### DUP-012: Extraer componente DocumentDownloadItem
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:**
  - `src/features/escuela/components/EscuelaContent.tsx` (166-234)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (269-298)
- **Descripcion:** Item de descarga de documento duplicado.
- **Solucion:** Crear `src/components/ui/document-download-item.tsx`.

---

### DUP-013: Extraer componente ResourceCard
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/docentes/components/DocentesGrid.tsx` (224-265)
  - `src/features/estudiantes/components/EstudiantesContent.tsx` (390-408)
  - `src/features/home/components/FeaturedPrograms.tsx` (110-154)
- **Descripcion:** Card de recurso con icono duplicado.
- **Solucion:** Crear `src/components/ui/resource-card.tsx`.

---

### DUP-014: Crear utilidades CSS compartidas
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivo:** `src/styles/global.css` o Tailwind config
- **Descripcion:** Clases Tailwind repetidas 25+ veces en el proyecto.
- **Solucion:** Agregar clases de utilidad:
  ```css
  .container-main { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
  .btn-gold { @apply bg-epg-gold text-epg-navy hover:bg-epg-gold-dark font-semibold; }
  .btn-outline-white { @apply border-white text-white hover:bg-white/10; }
  .section-py { @apply py-16 lg:py-24; }
  .link-arrow { @apply text-epg-gold font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all; }
  ```

---

### DUP-015: Extraer funcion de validacion de email
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:**
  - `src/features/contacto/components/NewsletterForm.tsx` (20-23)
  - `src/features/contacto/components/ContactForm.tsx` (56-59)
- **Descripcion:** Funcion de validacion de email duplicada.
- **Solucion:** Crear `src/lib/validators.ts` con `validateEmail()`.

---

## ISSUES DE ACCESIBILIDAD

### A11Y-001: Agregar aria-expanded al menu movil del Navbar
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivo:** `src/features/navigation/components/Navbar.tsx`
- **Linea:** 119-129
- **Descripcion:** Boton hamburguesa necesita `aria-expanded` para indicar estado.
- **Solucion:** Agregar `aria-expanded={mobileMenuOpen}` al boton.

---

### A11Y-002: Agregar aria-hidden a SVGs decorativos
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/home/components/Hero.tsx` (82-91)
  - `src/features/home/components/FeaturedPrograms.tsx` (82-92)
  - Multiples componentes con SVGs inline
- **Descripcion:** SVGs decorativos no tienen `aria-hidden="true"`.
- **Solucion:** Agregar `aria-hidden="true"` a todos los SVGs decorativos.

---

### A11Y-003: Agregar autocomplete a inputs de formulario
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:**
  - `src/features/contacto/components/ContactForm.tsx`
  - `src/features/contacto/components/NewsletterForm.tsx`
- **Descripcion:** Inputs de formulario no tienen atributo `autocomplete`.
- **Solucion:** Agregar `autocomplete="name"`, `autocomplete="email"`, etc.

---

### A11Y-004: Agregar inputmode a inputs especificos
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:**
  - `src/features/contacto/components/ContactForm.tsx`
  - `src/features/contacto/components/NewsletterForm.tsx`
- **Descripcion:** Inputs de email/telefono no tienen `inputmode`.
- **Solucion:** Agregar `inputmode="email"`, `inputmode="tel"`.

---

### A11Y-005: Reemplazar "..." por ellipsis tipografico
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:** Multiples archivos con textos de carga o truncamiento
- **Descripcion:** Uso de `...` en lugar del caracter ellipsis `…`.
- **Solucion:** Buscar y reemplazar `...` por `…` en textos visibles.

---

### A11Y-006: Agregar aria-label a botones de icono
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Alta
- **Archivos afectados:** Multiples componentes con botones de icono
- **Descripcion:** Botones que solo tienen icono necesitan `aria-label`.
- **Solucion:** Agregar `aria-label` descriptivo a cada boton de icono.

---

## ISSUES DE CONSISTENCIA DE DISENO

### DES-001: Estandarizar padding de secciones
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:** Todos los componentes de seccion
- **Descripcion:** Padding vertical varia entre `py-12`, `py-16`, `py-20`, `py-24` sin patron.
- **Solucion:** Definir estandar: `py-16 lg:py-24` para secciones principales.

---

### DES-002: Estandarizar gaps en grids y flex
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Media
- **Archivos afectados:** Multiples componentes
- **Descripcion:** Gaps varian entre `gap-4`, `gap-6`, `gap-8` sin sistema.
- **Solucion:** Definir: `gap-6` para grids de cards, `gap-4` para elementos inline.

---

### DES-003: Estandarizar tamanos de iconos
- **Estado:** `[ ] Pendiente`
- **Prioridad:** Baja
- **Archivos afectados:** Multiples componentes
- **Descripcion:** Tamanos de iconos varian sin escala definida.
- **Solucion:** Definir escala: `w-4` (inline), `w-5` (small), `w-6` (default), `w-8` (large), `w-12` (feature).

---

## REGISTRO DE CAMBIOS

| Fecha | Issue | Accion | Notas |
|-------|-------|--------|-------|
| 2026-02-05 | - | Creacion inicial | 32 issues identificados |
| 2026-02-05 | COL-001 | Completado | Agregadas variables CSS semanticas en global.css |
| 2026-02-05 | COL-001 a COL-008 | Creados en GitHub | Issues #30-#37 creados |
| 2026-02-05 | COL-002 | Completado | Agregada variable epg-gold-soft, PR #39 mergeado |
| 2026-02-05 | COL-003 | Completado | Reemplazado bg-green-500 por bg-success en Hero, PR #40 mergeado |
| 2026-02-05 | COL-004 | Completado | Reemplazado bg-green-400 por bg-success en AdmissionCTA, PR #41 mergeado |
| 2026-02-05 | COL-005 | Completado | Reemplazado bg-red-500 por bg-destructive en ServiciosGrid, PR #42 mergeado |
| 2026-02-05 | COL-006 | Completado | Reemplazado colores red-* por destructive en ProgramasLista, PR #43 mergeado |
| 2026-02-05 | COL-007 | Completado | Centralizado colores redes sociales en constants.ts, PR #44 mergeado |
| 2026-02-05 | COL-008 | Completado | Migradas 100+ clases a variables CSS, 40+ variables agregadas, PR #45 mergeado |

