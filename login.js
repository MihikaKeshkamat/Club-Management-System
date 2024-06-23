let signupBtn = document.getElementById("signupBtn"); 
let signinBtn = document.getElementById("signinBtn"); 
let email = document.getElementById("email"); 
let title = document.getElementById("title"); 

signinBtn.onclick=function(){ 
    email.style.maxHeight="0";
    title.innerHTML = "Sign In"; //changes title when you click on sign in button
    signupBtn.classList.add("disable"); //change the colour of sign up button
    signinBtn.classList.remove("disable"); //adds colour of sign in 
} 

// Sign-up function

signupBtn.onclick=function(){ 
        email.style.maxHeight = "60px"; //hides email option  
        title.innerHTML = "Sign Up"; //changes title when you click on sign in button
        signupBtn.classList.remove("disable"); //change the colour of sign up button
        signinBtn.classList.add("disable"); //adds colour of sign in 
    } 

    //add click function  
//should display the sign in option only 

