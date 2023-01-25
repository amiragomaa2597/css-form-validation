window.addEventListener("load",function(){

  
///selectors 
let p = document.querySelectorAll("p");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

name.oninput = (e) => {
    console.log(e.target.value);
    const regexMatch = /^\w{3,16}$/.test(e.target.value);
    console.log(e.target.value);
    if (regexMatch) {
    
        
        p[0].classList.add("hide");
      
    }
    else{
     
        
        p[0].classList.remove("hide");
    }
  };


  email.oninput = (e) => {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
    console.log(e.target.value);
    if (regexMatch) {

   
        p[1].classList.add("hide");
      
    }
    else{
     
        console.log("matching");
        p[1].classList.remove("hide");
    }
  };

});

