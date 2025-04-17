// Función para obtener los personajes desde la API de Dragon Ball
export async function getDragonBallCharacters() {
  // URL de la API para obtener los personajes
  const DRAGON_BALL_API = "https://dragonball-api.com/api/characters?limit=100";

  // Realiza una solicitud HTTP GET a la URL de la API
  const rawData = await fetch(DRAGON_BALL_API);

  // Convierte la respuesta de la API a formato JSON
  const json = await rawData.json();

  // Extrae la lista de personajes (items) del objeto JSON
  const { items } = json;

  // Mapea los datos de cada personaje para transformarlos en un formato más útil
  return items.map((character) => {
    // Extrae las propiedades relevantes de cada personaje
    const {
      id, // ID del personaje
      name, // Nombre del personaje
      ki, // Nivel de ki actual
      maxKi, // Nivel máximo de ki
      race, // Raza del personaje
      gender, // Género del personaje
      description, // Descripción del personaje
      image, // URL de la imagen del personaje
      affiliation, // Afiliación del personaje
    } = character;

    // Devuelve un objeto con los datos transformados del personaje
    return {
      id, // ID del personaje
      name, // Nombre del personaje
      ki, // Nivel de ki actual
      maxKi, // Nivel máximo de ki
      race, // Raza del personaje
      gender, // Género del personaje
      description, // Descripción del personaje
      image, // URL de la imagen del personaje
      affiliation, // Afiliación del personaje
    };
  });
}
