# Sistema de Gestion de Issues - EPG Portal Web

## Instrucciones para el Agente

### Al Iniciar Cada Sesion

1. **Lee el archivo de issues:**
   ```
   .agents/issues/ISSUES.md
   ```

2. **Identifica el estado actual:**
   - Cuantos issues hay pendientes
   - Cual es la prioridad de cada uno
   - Que issues se completaron en sesiones anteriores

3. **Informa al usuario** del estado actual si es relevante

### Al Completar un Issue

1. **Actualiza el estado** en `ISSUES.md`:
   - Cambia `[ ] Pendiente` a `[x] Completado`
   - Actualiza los contadores en el resumen
   - Agrega entrada en el registro de cambios

2. **Formato del registro de cambios:**
   ```
   | 2026-02-05 | COL-001 | Completado | Agregadas variables CSS semanticas |
   ```

### Codigos de Issue

- **COL-XXX**: Issues de Colores Hardcodeados
- **DUP-XXX**: Issues de Codigo Duplicado  
- **A11Y-XXX**: Issues de Accesibilidad
- **DES-XXX**: Issues de Consistencia de Diseno

### Prioridades

- **Alta**: Afecta funcionalidad core o accesibilidad critica
- **Media**: Mejora la mantenibilidad o consistencia
- **Baja**: Mejoras menores o de estilo

### Flujo de Trabajo Recomendado

1. Empezar por issues de **prioridad alta**
2. Agrupar issues relacionados (ej: todos los COL-* juntos)
3. Despues de cada issue completado, actualizar el archivo
4. Verificar que los cambios no rompan nada existente

### Estructura de Archivos

```
.agents/
├── issues/
│   ├── ISSUES.md          # Archivo principal de issues
│   └── README.md          # Este archivo de instrucciones
└── skills/                # Skills existentes del proyecto
```

### Comandos Utiles

Para el agente, al buscar issues pendientes:
```
grep -n "\\[ \\] Pendiente" .agents/issues/ISSUES.md
```

Para contar issues por estado:
```
grep -c "\\[x\\] Completado" .agents/issues/ISSUES.md
grep -c "\\[ \\] Pendiente" .agents/issues/ISSUES.md
```
