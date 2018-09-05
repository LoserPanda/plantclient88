function lightIconCalibration(optimi){
  var lightAmount;
  if (optimi === 3) {
      lightAmount = (
          <div>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
          </div>)
  } else if (optimi === 2) {
      lightAmount = (
          <div>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
          </div>)
  } else if (optimi === 1) {
      lightAmount = (
          <div>
              <span className="glyphicon glyphicon-certificate lighticon"></span>
          </div>)
  } else {
      lightAmount = (<div>No light settings found!</div>)
  }
  return lightAmount;
}

function humidityIconCalibration(optimi){
  var humidityAmount;
  if (optimi === 3) {
      humidityAmount = (
          <div>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
          </div>)
  } else if (optimi === 2) {
      humidityAmount = (
          <div>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
          </div>)
  } else if (optimi === 1) {
      humidityAmount = (
          <div>
              <span className="glyphicon glyphicon-cloud humidityicon"></span>
          </div>)
  } else {
      humidityAmount = (<div>No humidity settings found!</div>)
  }
  return humidityAmount;
}
function tempetatureIconCalibration(optimi){
  var temperatureAmount;
  if (optimi === 3) {
      temperatureAmount = (
          <div>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
          </div>)
  } else if (optimi === 2) {
      temperatureAmount = (
          <div>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
          </div>)
  } else if (optimi === 1) {
      temperatureAmount = (
          <div>
              <span className="glyphicon glyphicon-fire temperatureicon"></span>
          </div>)
  } else {
      temperatureAmount = (<div>No temperature settings found!</div>)
  }

  return temperatureAmount;
}
function soilIconCalibration(optimi){
  var soilmoistureAmount;
  if (optimi === 3) {
      soilmoistureAmount = (
          <div>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
          </div>)
  } else if (optimi === 2) {
      soilmoistureAmount = (
          <div>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
          </div>)
  } else if (optimi === 1) {
      soilmoistureAmount = (
          <div>
              <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
          </div>)
  } else {
      soilmoistureAmount = (<div>No soil moisture settings found!</div>)
  }

  return soilmoistureAmount;
}

export {lightIconCalibration, humidityIconCalibration, tempetatureIconCalibration, soilIconCalibration };
