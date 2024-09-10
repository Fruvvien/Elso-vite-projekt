document.addEventListener("DOMContentLoaded", () =>{
  const form = document.getElementById("form")
  const message = document.createElement('div');

  form.addEventListener("submit", (evnet) =>{
    event.preventDefault();
  
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailValidation = email.value.includes("@");

    if(username.value == ""){
      
      message.innerHTML = "Hibás felhasználó";
      message.classList.add("alert");
      message.classList.add("alert-danger");
      document.body.appendChild(message)
  
    }else if(email.value == ""){
      
      message.innerHTML = "Hibás email";
      message.classList.add("alert");
      message.classList.add("alert-danger");
      document.body.appendChild(message)
    }else if(password.value == ""){
      message.innerHTML = "Hibás jelszó";
      message.classList.add("alert");
      message.classList.add("alert-danger");
      document.body.appendChild(message);
    }else if(!emailValidation ){
      
      message.innerHTML = "Hibás email";
      message.classList.add("alert");
      message.classList.add("alert-danger");
      document.body.appendChild(message)
    }
    else{
      alert("Sikeres regisztráció");
    }
  })
})

