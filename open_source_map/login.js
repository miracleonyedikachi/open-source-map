const password=document.getElementById("password");
const confirmPassword=document.getElementById("Cpassword");
const faith=document.getElementById("form");
const submit=document.getElementById("submit");
const Name=document.getElementById("name");
const Username=document.getElementById("Username");
const errorMessage=document.getElementsByClassName("error");
const modal=document.getElementById("mainModal");
let hydra=false
let hydra2=false;
let hydra3=false;
function myFunction(input,input2,input3) {

 if(input.value===""){
     var info="Name cannot be blank";
     errorMessage[0].innerHTML=info;
     input.style.borderColor="red";
 }else if(Number(input.value)){
     var text="Invalid input";
     errorMessage[0].innerHTML=text;
     input.style.borderColor="red";
 }else{
     errorMessage[0].innerHTML="";
     input.style.borderColor="green";
     hydra=true;
 }

 if(input2.value===""){
var info2="Username cannot be blank";
    errorMessage[1].innerHTML=info2;
    input2.style.borderColor="red";
}else if(Number(input2.value)){
    var text="Invalid input";
    errorMessage[1].innerHTML=text;
    input.style.borderColor="red";
}else if(input2.value!=="Admin"){
    var text="Invalid input";
    errorMessage[1].innerHTML=text;
    input2.style.borderColor="red";
}else if(input2.value==="Admin"){
    errorMessage[1].innerHTML="";
    input2.style.borderColor="green";
     hydra2=true;
}
if(input3.value===""){
    var info3="Password cannot be blank";
        errorMessage[2].innerHTML=info3;
        input3.style.borderColor="red";
    }else{
        errorMessage[2].innerHTML="";
        input3.style.borderColor="green";
        hydra3=true;
    }           
};

function showPop(){
    if(hydra===true && hydra2===true && hydra3===true){
        modal.classList.add("popInfo");
        clearField();
    }
}
function clearField(){
    Name.value="";
    Username.value="";
    password.value="";
};
faith.addEventListener("submit",function(e){
    e.preventDefault();
    myFunction(Name,Username,password); 
    showPop();
});