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
const Appurl="http://Localhost:1111/";
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

    const Data ={
        zip_data:zipCode.value,
        content_data:feelings.value,
        date_datd: newDate
};

if(zipCode.value.length<=0){
    alert("zip code is required");
}

    getData(Data.zip_data);
    postData(Data);
    

});

// ////////////////
// get function to return temp fron api server 
// if zip cod find as thes return temp else veiow alert not fond temp of thes zipcode 

const getData = async function(zip_data){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip_data}&appid=${ApiKey}&units=metric`);
    try{
        const response = await request.json();
        // console.log(response);
        const temp = response.main.temp;
        return temp;
    }
    catch(err){
        alert(err);
    }
};
// // ///////////////////////////////////
// post function that have temp info to post it to server
// post my data have to server 
const postData = async function(Data){
    const response = await fetch(`${Appurl}postData`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify(Data) 
  
    });
    
//    console.log(Data);
   
  try{
      response.json().then(Data =>{
    if(response.ok){
        console.log("the process successfully completed");
        updateUi();
    }
    else{
        alert("Process not completed")
    }
});
}
  catch(err){

    console.log(err);
  }
   
 
};

/////////////////////////////////
// update function to get datd from local server and push it in html badge 
// select evre elemnt in thml and set the value matched it in  server 
const updateUi = async function(){
  const response = await fetch(`/getAll`);
    try{
        response.json().then(Data=>{

        date.innerHTML=`Date : ${Data.date}`;
        temp.innerHTML=`Temperature :${ Data.temp}`;
        content.innerHTML=`Feel : ${Data.content}`;
        // console.log(Data);
        console.log(response);
         });
    }catch(err){
        console.log(err);
    }
};


/////////////////////////////////
