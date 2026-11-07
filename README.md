# juan-david-ospina-web

Sitio "Tu Prof Juan" de Juan David Ospina — clases personalizadas de español e inglés (y francés en Colombia).

Sitio estático: HTML con CSS y JS en línea, sin build ni dependencias (solo Google Fonts), más una función de Vercel.

| Archivo | Qué es |
|---|---|
| `index.html` | Página principal: paquetes, agenda, precios, FAQ. Los botones abren WhatsApp. |
| `prueba.html` | Prueba de nivel de inglés (`noindex`), conectada a Google Apps Script. |
| `api/geo.js` | Función de Vercel: devuelve `{"country": "CO"}` a partir de `x-vercel-ip-country` (sin caché). |
| `juan.jpg` | Foto (también se usa como imagen para compartir). |

## Precios por zona

Todos los precios salen de la tabla `ZONAS` del script "PRECIOS POR ZONA" en `index.html`. Para cambiar un
precio, se cambia solo ahí. En el HTML los precios son marcadores (`data-p="viajero"`) o plantillas
(`data-tpl="… {viajero.ind} …"`); el texto que traen escrito es el de Colombia, como respaldo si el JS no carga.

| Zona | Países | Moneda |
|---|---|---|
| `colombia` | CO (y si no se detecta el país) | COP |
| `latam` | MX, Centroamérica, Caribe hispano, Suramérica | USD |
| `norteamerica` | US, CA, PR | USD |
| `europa` | Europa | EUR |
| `resto` | cualquier otro | USD (precios de norteamerica) |

Orden para elegir la zona: `?zona=` en la URL → la que el visitante eligió en "Precios para" (guardada en el
navegador) → el país de `/api/geo` → Colombia. Fuera de Colombia no se ofrece francés.

Para probar una zona: `https://juan-david-ospina-web.vercel.app/?zona=europa`
(valores: `colombia`, `latam`, `norteamerica`, `europa`, `resto`).

## Correrlo en local

Abrir `index.html` en el navegador, o servir la carpeta:

```bash
npx serve .
```

En local no existe `/api/geo`, así que la página queda en Colombia; usa `?zona=` para ver las otras zonas.
