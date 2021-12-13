/* Global Variables */
const ApiKey=`&appid=2342ff72b9427aac95efdc9dcf185461&units=metric`;
const ApiURL="http://Localhost:1111";
const zipCode =document.getElementById('zip');
const feelings =document.getElementById('feelings');
const generateBtn =document.getElementById('generate');
const data =document.getElementById('data');
const temp =document.getElementById('temp');
const content =document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



////////////////////
// have event when click on button call function to hold data input 
// then stor in object 
// then validated if when you dont have zip code as alert msagon browser 


generateBtn.addEventListener('click',function(){ 
    let Data ={
        zip_data:zipCode.value,
        content_data:feelings.value,
        date_datd: d
};
if(zipCode.value.length<=0){
    alert("zip code is required");
}
    console.log(Data);
});
debugger
// ////////////////
// const url =`http://api.openweathermap.org/data/2.5/weather?zip=${zipValue}&appid=2342ff72b9427aac95efdc9dcf185461&units=metric`;
// const getData = async function(){
//     const request = await fetch( 'url');
//     try{
//         const response = await request.json();
//         return response;
//     }
//     catch(err){
//     //     console.log(err);
//     }
// };
// getData().then(function(data){

//     console.log(data.temp);
//     // postData('/data',{
//     //     data: ,
//     //     temp: ,
//     //     userFeeling: ;
//     // });
// });
///////////////////////////////////
// const postData = async function(url = "" ,data ={}){
//     const request = await fetch(url ,{
//       method:"POST",
//       credentials:"same-origin",
//       headers:{
//           "Content-Type":"application/json",
//       }  
//     });
//     try{
//         const response = await request.json();
//         return response;
//     }catch(err){
//         console.log(err);
//     }
// };
// // postData('/data');
// ///////////////////////////////////
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
