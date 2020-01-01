const spotMock = require ('../../mocks/spotMock.json');
class Spot {
  
  getAllSpots() {
    return spotMock;
  };

  getSpot(code) {    
    return spotMock.find(spot => spot.id == code);
  };
  
}

module.exports = {
  Spot: new Spot()
};
