const { response } = require("express");

/* Global Variables */
const zipCode = document.getElementById("zip");

const feelings = document.getElementById("feelings");

const generateBtn = document.getElementById("generate");

const date = document.getElementById("date");

const temp = document.getElementById("temp");

const content = document.getElementById("content");

const ApiKey = "2342ff72b9427aac95efdc9dcf185461";

const Appurl = "http://Localhost:1111/";

const ApiKey_all = `&appid=2342ff72b9427aac95efdc9dcf185461&units=metric`;

// Create a new date instance dynamically with JS

let d = new Date();

let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

////////////////////

// have event when click on button call function to hold data input

// then stor in object

// then validated if when you dont have zip code as alert msagon browser

// that hav all function

generateBtn.addEventListener("click", function () {
  if (zipCode.value.length <= 0) {
    alert("zip code is required");
  }

  getData(zipCode.value);
});

// ////////////////

// get function to return temp fron api server

// if zip cod find as thes return temp else veiow alert not fond temp of thes zipcode

const getData = async function (zip_data) {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zip_data}&appid=${ApiKey}&units=metric`
  );

  try {
    const response = await request.json();
    const temp = response.main.temp;

    const Data = {
      content: feelings.value,
      date: newDate,
      temp: temp,
    };
    await postData(Data);
  } catch (err) {
    alert(err);
  }
};

// // ///////////////////////////////////

// post function that have temp info to post it to server

// post my data have to server
// if response is oky print in consol "the process successfully completed" and coll updateUI function
// else print alert("Process not completed")
const postData = async function (Data) {
  const response = await fetch(`${Appurl}postData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  });
  try {
    response.json().then((Data) => {
      if (response.ok) {
        console.log("the process successfully completed");

        updateUi();
      } else {
        alert("Process not completed");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////

// update function to get datd from local server and push it in html badge

// select evre elemnt in thml and set the value matched it in  server

const updateUi = async function () {
  const response = await fetch(`/getAll`);

  try {
    response.json().then((Data) => {
      date.innerHTML = `Date : ${Data.date}`;

      temp.innerHTML = `Temperature :${Data.temp}`;

      content.innerHTML = `Feel : ${Data.content}`;
    });
  } catch (err) {
    console.log(err);
  }
};

/////////////     ///////////////////