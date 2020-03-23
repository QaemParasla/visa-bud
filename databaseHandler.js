const MongoClient = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.DB_HOST;
const dbName = "visaDB";
const countryListCollection = "countryList";
let db = null;

console.log("HEllo db 1");
function connectToDatabase() {
  MongoClient.connect(url, (error, database) => {
    if (error) return process.exit(1);

    db = database.db(dbName);
  });
}

async function fetchCountryList() {
  let collection = db.collection(countryListCollection);
  let result = [];
  result = await collection.find({}).toArray();
  return JSON.stringify(result);
}

async function fetchCountryVisaStatusList(country) {
  let collection = db.collection("countryVisaStatusList");
  let result = [];
  console.log("Country " + country);
  result = await collection.find({ OrginCountry: country }).toArray();
  return JSON.stringify(result);
}

async function fetchcountryImageURL() {
  let collection = db.collection("countryImageURL");
  let result = [];
  result = await collection.find({}).toArray();
  return JSON.stringify(result);
}

module.exports.fetchCountryVisaStatusList = fetchCountryVisaStatusList;
module.exports.fetchCountryList = fetchCountryList;
module.exports.fetchcountryImageURL = fetchcountryImageURL;
module.exports.connectToDatabase = connectToDatabase;
