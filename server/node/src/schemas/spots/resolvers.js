const { Spot } = require('./models');
module.exports = {
  Query: {
    spots:() => {
      return Spot.getAllSpots();
    },
    spot: (root, {code}) => {
      return Spot.getSpot(code);
    }
  }
};
