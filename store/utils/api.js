import { API_URL, STRAPI_API_TOKEN } from "./constants";

export const fetchData = async (endPoint, cache) => {
  // console.log("endpoint iss:", endPoint);

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    cache: `${cache}`,
    // cache: "force-cache",
  };

  try {
    const res = await fetch(`${API_URL}${endPoint}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error while fetching data:", error);
  }
};

export const stripeCheckoutRequest = async (endPoint, payload) => {
  // console.log("endpoint iss:", endPoint);

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: payload }),
  };

  try {
    const res = await fetch(`${API_URL}${endPoint}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error while fetching data:", error);
  }
};
