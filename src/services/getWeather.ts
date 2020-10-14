const getWeather = async (coordinates: any) => {
  let results = await fetch(
    "https://api.robchang.ca/.netlify/functions/api/darksky",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coordinates),
    }
  ).then((res) => res.json());
  return results;
};

export default getWeather;
