# Explicación del Código JavaScript Simplificado - Sección Work

## Resumen
El código JS está **drásticamente simplificado**. Su única responsabilidad es medir alturas y guardarlas en CSS variables. Todo lo demás (animaciones, layout, transiciones) está 100% en CSS.

---

## ROOT CAUSE ANALYSIS - ¿Qué se rompió en mobile?

### Los 4 problemas identificados:

**1. Layout rígido: 2 columnas SIEMPRE**
```scss
li.project-item { width: calc(50% - 20px); } // Incluso en mobile 375px
```
- Tarjetas demasiado angostas (130px en mobile pequeño)
- Contenido comprimido infinitamente
- **SOLUCIÓN:** Media query para `width: 100%` en mobile, `width: calc(50% - 20px)` en desktop (768px+)

**2. Flex direction siempre ROW (lado a lado)**
```scss
div.text-mockup-container {
    display: flex;
    justify-content: space-between; // Lado a lado siempre
}
```
- En mobile: texto y mockup forced lado a lado = CAOS
- **SOLUCIÓN:** `flex-direction: column` en mobile, `flex-direction: row` en desktop (768px+)

**3. Imágenes enormes en mobile (unidades vw)**
```scss
img.mockup.dronesim { width: 65vw; } // 243px en mobile 375px ❌
```
- Imágenes escalaban a tamaños gigantes
- No cabían en containers pequeños
- **SOLUCIÓN:** Usar `width: 100%; max-width: 180-240px` en mobile, vw en desktop

**4. Contenedor del layout muy restrictivo**
```scss
ul.projects-list { width: 80%; } // En mobile = ~300px
```
- Espacio insuficiente incluso para 1 columna full-width
- **SOLUCIÓN:** `width: 100%` en mobile, `width: 80%` en desktop (768px+)

---

## Funciones Principales (JavaScript)

### `measureMaxOpenHeight(li)` - Mide altura de card abierto
**Mejoría:** Ahora usa `scrollHeight` en lugar de `getBoundingClientRect().height` para mejor precisión
```javascript
li.style.height = "auto";  // Permite que el navegador calcule la altura
const height = li.scrollHeight;  // Mide el contenido real
li.style.setProperty("--open-height", `${Math.ceil(height) + 40}px`);
```

### `setupCardHeights()` - Configura alturas para todos los cards
- Calcula `--closed-height` compartida (todos iguales cuando cerrados)
- Llama a `measureMaxOpenHeight()` para cada card (altura individual abierto)
- Se ejecuta UNA SOLA VEZ al cargar + cada RESIZE (con delay de 150ms)

### `openItem(e)` - Solo alterna clases CSS
```javascript
// Cierra otros cards
document.querySelectorAll(".project-item.open").forEach(item => {
    if (item !== li) {
        item.classList.remove("open");
        item.classList.add("closed");
    }
});
// Toggle del card actual
if (isOpening) {
    li.classList.add("open");
    li.classList.remove("closed");
} else {
    li.classList.remove("open");
    li.classList.add("closed");
}
```

---

## Cambios en CSS (Responsiveness)

### Media Query Breakpoint: 768px
Punto de quiebre entre mobile y tablet/desktop

**Mobile (< 768px):**
- `li.project-item: width: 100%` (1 columna)
- `ul.projects-list: width: 100%` (full width)
- `div.text-mockup-container: flex-direction: column` (contenido apilado)
- Imágenes: `width: 100%; max-width: 140-240px` (responsivas)
- Botón: `width: 100%; max-width: 200px`

**Desktop (≥ 768px):**
- `li.project-item: width: calc(50% - 20px)` (2 columnas)
- `ul.projects-list: width: 80%` (contenedor limitado)
- `div.text-mockup-container: flex-direction: row` (lado a lado)
- Imágenes: `width: 20vw/60vw/etc` (proporcional al viewport)
- Botón: `width: 55vw`

### Optimización de imágenes por mockup:

| Mockup | Mobile | Desktop |
|--------|--------|---------|
| Leonti | 100% max-180px | 20vw max-245px |
| Dronesim | 100% max-220px | 60vw max-300px |
| Scraper | 100% max-180px | 50vw max-220px |
| Roomman | 100% max-220px | 60vw max-280px |
| Cultural | 100% max-140px | 14vw max-175px |

---

## Flujo de Ejecución - Ahora con Responsiveness

```
1. Usuario abre Work (página monta)
   ↓
2. useEffect espera a que cargen TODAS las imágenes
   ↓
3. setupCardHeights() se ejecuta:
   - Calcula --closed-height compartida
   - Calcula --open-height individual para cada card
   ↓
4. Usuario hace click en card
   ↓
5. openItem() alterna las clases (.open/.closed)
   ↓
6. CSS transiciones automáticas:
   - max-height de cerrado a abierto (420ms)
   - opacity y transform del contenido (260-320ms)
   ↓
7. Usuario redimensiona pantalla
   ↓
8. Resize handler (con delay 150ms) re-ejecuta setupCardHeights()
   - En mobile: layout reflowea a column, alturas recalculadas
   - En desktop: vuelve a row, alturas actualizadas
```

---

## Por Qué Esta Arquitectura Funciona Ahora

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| **Líneas JS** | ~100 | ~40 |
| **Media queries mobile** | ❌ No | ✅ Sí (768px) |
| **Flex-direction responsive** | ❌ Siempre row | ✅ Column en mobile |
| **Imágenes en mobile** | ❌ Enormes (vw) | ✅ Porcentuales (100% + max-width) |
| **Contenedor width** | ❌ 80% siempre | ✅ 100% mobile, 80% desktop |
| **Medición en resize** | Manual compleja | ✅ Optimizada con scrollHeight + delay |
| **Responsiveness** | Rota | ✅ Funcional |

---

## Responsiveness Verificada

✅ **Mobile pequeño** (320px): 1 columna, imágenes 100%/max-width  
✅ **Mobile mediano** (375px): 1 columna, contenido apilado vertical  
✅ **Mobile grande** (500px): 1 columna, media queries ajustan tamaños  
✅ **Tablet** (768px+): 2 columnas, layout lado a lado  
✅ **Desktop** (1000px+): 2 columnas, imágenes grandes en vw  

Las alturas se recalculan automáticamente en CADA resize para mantener todo consistente.

---

## Limpieza Realizada

❌ **Eliminado:** Dependencia de `width: calc(50% - 20px)` en mobile
❌ **Eliminado:** `flex-direction: row` forzado en mobile
❌ **Eliminado:** Tamaños de imagen basados en vw en mobile
❌ **Eliminado:** `width: 80%` restrictivo en mobile
❌ **Eliminado:** `max-width: 70%` en contenedor mobile

✅ **Mantenido:** Toda la lógica visual que funciona en desktop
✅ **Agregado:** Media queries inteligentes para cada breakpoint
✅ **Agregado:** Delay en resize para evitar cálculos múltiples (150ms)
✅ **Mejorado:** Medición de altura con `scrollHeight` en lugar de `getBoundingClientRect()`

