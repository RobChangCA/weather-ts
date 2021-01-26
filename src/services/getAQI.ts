const getAQI = async (coordinates: any) => {
  let results = await fetch(
    "https://api.robchang.ca/.netlify/functions/api/aqi",
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

export default getAQI;
