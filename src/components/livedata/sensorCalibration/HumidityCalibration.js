function humidityCalibration(optimi){
  // CALIBRATION FOR THE HUMIDITY SENSOR
  //60-100 = 3
  //40-60 = 2
  //20-40 = 1
  //20-0 = Sahara
  if (optimi > 60) {
      return 3;
  } else if (optimi > 40 && optimi <= 60) {
      return 2;
  } else if (optimi > 20 && optimi <= 40) {
      return 1;
  } else {
      return 0;
  }
}

export {humidityCalibration};
