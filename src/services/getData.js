const BASE_URL = "https://weatherapi-com.p.rapidapi.com/";

export const getData = async (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "85953732d7msh5eb0c447f8596ddp17bfc6jsn39b2ecde3cac",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const response = await fetch(BASE_URL + `current.json?q=${city}`, options);
  try {
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
