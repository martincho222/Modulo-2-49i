import axios from "axios";

const apiKey = "juzbUA4HSd4ZgMYWdiURVRuKRMnj8K4A";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=12`;

  const response = await axios.get(url);
  const { data } = response.data;

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });
  return gifs;
};
