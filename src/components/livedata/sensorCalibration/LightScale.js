function lightCalibration(optimi){
  // CALIBRATION FOR THE LIGHT SENSOR
  // 3 = 80-100
  // 2 = 60-80
  // 1 = 40-60
  // 0 = Night
  if (optimi > 80) {
      return 3;
  } else if (optimi > 60 && optimi <= 80) {
      return 2;
  } else if (optimi > 40  && optimi <= 60) {
      return 1;
  } else {
      return 0;
  }
  return 0;
}

export {lightCalibration};
