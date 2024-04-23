const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault;
    //Will do nothing if the form is not validated
    if (!validateForm(form))
        return;

    //Will submit if the form is validated
    alert("Message successfully sent");
    });

    const validateForm = (form) => {
    let valid = true;
    //checking for empty fields
        let name = form.querySelector(".name");
        let email = form.querySelector(".email");
        let message = form.querySelector(".message");

        //Name validation
        if (name.value == ""){
            giveError(name, "Please enter your name!");
            valid = false;
        }

        //Message validation
        if (name.value == ""){
            giveError(message, "Please enter a message!");
            valid = false;
        }

        //Email Validation
        let emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        let emailValue = email.value;
            if(!emailRegex.test(emailValue)) {
                giveError(email, "Please enter a valid email address");
                valid = false;
           }

        //Returns true if valid
        if(valid) {
            return true;
        }
   };

   const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    //if error message already exists it will remove it
    let existingError = parentElement.querySelector(".error-msg")
    if(existingError){
        existingError.remove();
    }
    let error = document.createElement("span")
    error.textContent = message;
    error.classList.add("error-msg")
    parentElement.appendChild(error)
  };

  //removing errors on inputs
  const inputs = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");

  let allFields = [... inputs, ... textareas];

  allFields.forEach((field) => {
     field.addEventListener("input", () =>{
        removeError(field)
     });
  })

const removeError = (field) => {
   let parentElement = field.parentElement;
   parentElement.classList.remove("error");
   let error = parentElement.querySelector("error-msg");
      if(error){
          error.remove;
      }
   };
