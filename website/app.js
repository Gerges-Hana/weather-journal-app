/* Global Variables */
const zipCode =document.getElementById('zip');
const feelings =document.getElementById('feelings');
const generateBtn =document.getElementById('generate');
const data =document.getElementById('data');
const temp =document.getElementById('temp');
const content =document.getElementById('content');
const zipNum = Number(zipCode.value);
const zipValue = zipCode.value;
const ApiKey="2342ff72b9427aac95efdc9dcf185461";
const fulURL =`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${ApiKey}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



////////////////////
// have event when click on button call function to hold data input 
// then stor in object 
// then validated if when you dont have zip code as alert msagon browser 


const ApiKey_all=`&appid=2342ff72b9427aac95efdc9dcf185461&units=metric`;



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
    
    
});





// ////////////////
const getData = async function(){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10001&appid=${ApiKey}&units=metric`);
    
    try{
        const response = await request.json();
        
        const temp = response.main.temp;
        console.log(temp);
        return temp;
    }
    catch(err){
        console.log(err);
    }
    
    
};



// ///////////////////////////////////
// const ApiURL="http://Localhost:1111/";
// const postData = async function(data){
//     const request = await fetch(`http://Localhost:1111/postData`
//     ,{
//       method:'POST',
//       credentials:'same-origin',
//       headers:{
//           'Content-Type':'application/json',
//       },
//       body:JSON.stringify(data)  
      
//     });

//     try{
//         const response = await request.json();
//          response.then(data =>{

//             if (response.ok) {
//                 updatUI();
//             }else{
//                 alert("THE post data not successfuly");
//             }
//          });
//     }catch(err){
//         console.log(err);
//     }
// };
// postData('/data');
// // ///////////////////////////////////




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






const apdateUi = async function(){

const nodeResponse = await fetch('/getAll');
const endData = await nodeResponse.json();
console.log(endData);
}






// const apdateUi = async function(){
//     const request = await fetch('/getData');
//     try{
//         const response = await request.json();
//         data.textContent=response.data;
//         temp.textContent=response.temp;
//         content.textContent=response.content;
//         return response;
//     }catch(err){
//         console.log(err);
//     }
// };
// // apdateUi();
// ///////////////////////////////////
