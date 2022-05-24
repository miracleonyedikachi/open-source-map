const password=document.getElementById("password");
const confirmPassword=document.getElementById("Cpassword");
const faith=document.getElementById("form");
const submit=document.getElementById("submit");
const Name=document.getElementById("name");
const Username=document.getElementById("Username");
const errorMessage=document.getElementsByClassName("error");
const job=document.getElementById("describe");
const Address=document.getElementById("address");
const modal=document.getElementById("mainModal");
const phone=document.getElementById("phone");
let hydra=false
let hydra2=false;
let hydra3=false;
let hydra4=false;
let hydra5=false;
let hydra6=false;
function myFunction(input,input2,input3,input4,input5,input6) {

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
}else{
    errorMessage[1].innerHTML="";
    input2.style.borderColor="green";
     hydra2=true;
}
if(input3.value===""){
    var info3="Password cannot be blank";
        errorMessage[2].innerHTML=info3;
        input3.style.borderColor="red";
    }else if(input3.value!==input4.value){
        var info="Password does not match";
        errorMessage[3].innerHTML=info;
        input4.style.borderColor="red";
       }else{
        errorMessage[2].innerHTML="";
        input4.style.borderColor="green";
        input3.style.borderColor="green";
        hydra3=true;
    }
    if(input4.value===""){
        var info4="Password cannot be blank";
            errorMessage[3].innerHTML=info4;
            input4.style.borderColor="red";
        }else{
            errorMessage[3].innerHTML="";
            input4.style.borderColor="green";
            hydra4=true;
        } 
        if(input5.value===""){
            var info5="Please indicate your Job type";
                errorMessage[4].innerHTML=info5;
                input5.style.borderColor="red";
            }else{
                errorMessage[4].innerHTML="";
                input5.style.borderColor="green";
                hydra5=true;
            } 
            if(input6.value===""){
                var info6="Please indicate your Office Address";
                    errorMessage[5].innerHTML=info6;
                    input6.style.borderColor="red";
                }else{
                    errorMessage[5].innerHTML="";
                    input6.style.borderColor="green";
                    hydra6=true;
                }           
};
function showPop(){
    if(hydra===true && hydra2===true && hydra3===true && hydra4===true && hydra5===true && hydra6===true ){
        modal.classList.add("popInfo");
        clearField();
    }
}
function clearField(){
    Name.value="";
    Username.value="";
    password.value="";
    confirmPassword.value="";
    job.value="";
    Address.value="";
};
faith.addEventListener("submit",function(e){
    e.preventDefault();
    myFunction(Name,Username,password,confirmPassword,job,Address,phone); 
    showPop();
});