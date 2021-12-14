/* Global Variables */
const zipCode =document.getElementById('zip');
const feelings =document.getElementById('feelings');
const generateBtn =document.getElementById('generate');
const date =document.getElementById('date');
const temp =document.getElementById('temp');
const content =document.getElementById('content');
const zipNum = Number(zipCode.value);
const zipValue = zipCode.value;
const ApiKey="2342ff72b9427aac95efdc9dcf185461";
const fulURL =`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${ApiKey}&units=metric`;
const ApiKey_all=`&appid=2342ff72b9427aac95efdc9dcf185461&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

////////////////////
// have event when click on button call function to hold data input 
// then stor in object 
// then validated if when you dont have zip code as alert msagon browser 
// that hav all function 
generateBtn.addEventListener('click',function(){ 
const fulURL =`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${ApiKey}&units=metric`;
// console.log(fulURL);
    const Data ={
        zip_data:zipCode.value,
        content_data:feelings.value,
        date_datd: newDate
};
if(zipCode.value.length<=0){
    alert("zip code is required");
}
    console.log(Data);
    getData();
    postData(Data.temp,Data.content_data);
    updateUi();
    
});

// ////////////////
// get function to return temp fron api server 
// if zip cod find as thes return temp else veiow alert not fond temp of thes zipcode 
const getData = async function(){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10001&appid=${ApiKey}&units=metric`);
    
    try{
        const response = await request.json();
        
        const temp = response.main.temp;
        return temp;
    }
    catch(err){
        console.log(err);
    }
};
// // ///////////////////////////////////
// post function that have temp info to post it to server
// post my data have to server 
const postData = async function(temp,feelings){
    const request = await fetch(`/postData`
    ,{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify({
          date:newDate,
          temp:temp,
          feelings:feelings
      }) 
  
    });
 
};

/////////////////////////////////
// update function to get datd from local server and push it in html badge 
// select evre elemnt in thml and set the value matched it in  server 
const updateUi = async function(){
    const request = await fetch(`/getAll`);
    try{
        const response = await request.json();
        date.innerHTML=`Date : ${response.date}`;
        temp.innerHTML=`Temperature :${ response.temp}`;
        content.innerHTML=`Feel : ${response.content}`;
        console.log(response);
        return response;
    }catch(err){
        console.log(err);
    }
};

// ///////////////////////////////////
