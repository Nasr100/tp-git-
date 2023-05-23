let email=document.getElementById('email');
let password=document.getElementById('password');
let form=document.getElementById('form');


form.addEventListener('submit',(e) => {
    
    let x=-1;
    if(email.value==="" || email.value==null){
        alert("Email required");
        x=0;
    }
    else if ((password.value==="" || password.value==null )){
        alert("Password required");
        x=0;  
    }
    else if(password.value.length < 8){
        alert("Password must be longer than 8 characters");
        x=0;
    }
     
    if  (x==0)
     e.preventDefault();

     
}
)
