const axios = require("axios");

let imageUrl = "hello";

console.log("Fetching image URL");
const fetchData = async () => {
  const result = await axios("api/countryImageURL");

  imageUrl = Object.entries(result.data[0]);
  imageUrl = result.data[0];
  console.log("Fetching image URL Data:" + JSON.stringify(imageUrl));
};

fetchData();

export { imageUrl };
