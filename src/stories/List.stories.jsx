import List from "../components/List";
import peliculas from "../data/peliculas";

export default {
  title: "Catálogo/Tarjeta intérprete",
  component: List,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
};


//Datos de ejemplo historias
export const Default = {
  args:{
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Jodie_Foster-8667.jpg/500px-Jodie_Foster-8667.jpg",
    nombre: "Nombre del Intérprete",
    esNota10: false,
    children: "Breve biografía o descripción del intérprete."
  }
}
/**
 * Historias a partir de los datos
 * — Todas en formato export const <Nombre> = { args: {...} }
 */

const movie0 = peliculas[0];
export const BruceWillis = {
  args: {
    foto: movie0.actores[0].imagen,
    nombre: movie0.actores[0].nombre,
    esNota10: movie0.nota >= 9,
    notaPelicula: movie0.nota,
    pelicula: movie0.nombre,
    children: movie0.actores[0].biografia,
  },
};

const movie4 = peliculas[4];
export const TomHanks = {
  args: {
    foto: movie4.actores[0].imagen,
    nombre: movie4.actores[0].nombre,
    esNota10: movie4.nota >= 9,
    notaPelicula: movie4.nota,
    pelicula: movie4.nombre,
    children: movie4.actores[0].biografia,
  },
};

const movie5 = peliculas[5];
export const MiryamGallego = {
  args: {
    foto: movie5.actores[1].imagen,
    nombre: movie5.actores[1].nombre,
    esNota10: movie5.nota >= 9,
    notaPelicula: movie5.nota,
    pelicula: movie5.nombre,
    children: movie5.actores[1].biografia,
  },
};

/**
 * Cast completo sin mostrar película
 */
const moviePF = peliculas[1];
export const PulpFictionCast = {
  render: () => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
      {moviePF.actores.map((actor) => (
        <List
          key={actor.nombre}
          foto={actor.imagen}
          nombre={actor.nombre}
          esNota10={moviePF.nota >= 9}>
          {actor.biografia}
          </List>
      ))}
    </div>
  ),
};
