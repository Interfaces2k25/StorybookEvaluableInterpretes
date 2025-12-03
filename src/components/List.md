# 📦 Componente `List` — Card de intérpretes de películas

El componente **List** muestra información sobre un intérprete de una película. Representa una tarjeta visual organizada con imagen, nombre y una descripción o biografía opcional.

---

## 🎯 Props aceptadas

| Prop        | Tipo              | Descripción |
|------------|------------------|-------------|
| `foto`     | `string`          | URL de la fotografía del intérprete. |
| `nombre`   | `string`          | Nombre del intérprete. |
| `esNota10` | `boolean`         | Indica si el intérprete aparece en una película destacada. Modifica el estilo del título. |
| `children` | `React.ReactNode` | Contenido adicional a mostrar, como una biografía o descripción. |

---

## 🧱 Estructura y comportamiento

El componente renderiza un bloque `<article>` que funciona como tarjeta informativa.  
Dentro se incluyen:

- Una imagen (`<img>`) contenida en un `<figure>`.
- El nombre del intérprete dentro de un `<header>`.
- El contenido adicional (biografía, descripción, etc.) en un `<p>`.

---

## 🛡️ Accesibilidad

El componente tiene varias mejoras de accesibilidad:

- `tabIndex="0"` ➜ La tarjeta es navegable con teclado.
- `aria-label` ➜ Describe el intérprete para lectores de pantalla, añadiendo contexto si es destacado.
- `<figcaption class="sr-only">` ➜ Contiene el texto adicional para accesibilidad sin mostrarse visualmente.

---

## 💄 Estilos

El diseño está basado en **TailwindCSS**, usando una tarjeta con:

- Fondo claro
- Bordes redondeados
- Sombra dinámica al hacer hover
- Gradiente de fondo
- Imagen cuadrada con recorte (`object-cover`)

Cuando `esNota10` es `true`, el nombre aparece resaltado en rojo y añade una etiqueta descriptiva.

---

## 📌 Código del componente

```jsx
/**
 * List component displays information about a movie interpreter.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.foto - The URL of the interpreter's photo.
 * @param {string} props.nombre - The name of the interpreter.
 * @param {boolean} props.esNota10 - Indicates if the interpreter is featured in a notable movie.
 * @param {React.ReactNode} props.children - Additional content to display, such as a biography or description.
 *
 * @returns {JSX.Element} The rendered List component.
 */
function List(props) {
    const { foto, nombre, esNota10 } = props;
    return (
        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`${nombre}${esNota10 ? ', intérprete en película destacada' : ''}`}
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – Intérprete en película destacada</em>}
                </h2>
            </header>

            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>
    );
}

export default List;
