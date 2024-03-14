async function ObtenerGifs(search) {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("entro");
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=1`
    );
    const { data } = await response.json();
    const gif = data.map((imagen) => ({
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.downsized_medium.url,
    }));
    return gif;
  } catch (error) {
    console.error(error.message);
  }
}

export default ObtenerGifs;
