function temperatureCalibration(optimi){
  // CALIBRATION FOR THE HUMIDITY SENSOR
  //25-35 = 3
  //15-24 = 2
  //10-15 = 1
  //10-0 = Winter
  if (optimi > 24 && optimi < 35) {
      return 3;
  } else if (optimi > 15 && optimi <= 24) {
      return 2;
  } else if (optimi > 10 && optimi <= 15) {
      return 1;
  } else {
      return 0;
  }
  return 0;
}

export {temperatureCalibration};
