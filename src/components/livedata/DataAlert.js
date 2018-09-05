import url from '../../config/sensordataurl';
import urlMail from '../../config/urlMail';

function getUserData(){
  fetch(url.url + '/users/all/' + localStorage.getItem("UID"))
  .then(response => {
      if (response.ok) {
          return response.json();
      }
      else {
          throw new Error('Data not found')
      }
  })
  .then(data => {
    console.log(data[0]);
    sendAlertMail(data[0]);
  });
}

function sendAlertMail(data){
  let email = data.email;
  let plantName = data.name;


  if(email === "plantmaster@hotmail.com"){
    email = "johannes.t.hiltunen@gmail.com"
  };

  let mail = {
    to: email,
    subject: 'Plant Alert from ' + plantName + "!",
    text: 'SOS, I am suffering from dehydration! Please give me some water. Best regards ' + plantName + "."
  }
  console.log(mail);
  fetch(urlMail.url + '/mail/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(mail)
  })
  .then(res => {
    console.log("Mail sent");
    // res.JSON(res);
  });
}

export {getUserData};
