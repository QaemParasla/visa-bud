var express = require("express");
var router = express.Router();
const atlasDBHandler = require("../../databaseHandler");

//@path /api/countrylist
router.get("/countrylist", function(req, res) {
  atlasDBHandler.fetchCountryList().then(result => {
    res.send(result);
  });
});

//@path /api/countryVisaStatusList/:country
router.get(`/countryVisaStatusList/:country`, function(req, res) {
  atlasDBHandler.fetchCountryVisaStatusList(req.params.country).then(result => {
    console.log("Result" + result);
    res.send(result);
  });
});

//@path /api/countryImageURL
router.get(`/countryImageURL`, function(req, res) {
  atlasDBHandler.fetchcountryImageURL().then(result => {
    console.log("Result" + result);
    res.send(result);
  });
});

module.exports = router;
