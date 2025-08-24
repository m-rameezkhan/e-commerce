const showSignupAttributes = () => {
    let signupAttributes = document.querySelectorAll(".signup-attribute")
    let loginAttributes = document.querySelectorAll(".login-attribute")
    
    signupAttributes.forEach(element => {
        element.classList.remove("hide")
    });
    loginAttributes.forEach(element => {
        element.classList.add("hide")
    });
}

const showLoginAttributes = () => {
    let signupAttributes = document.querySelectorAll(".signup-attribute")
    let loginAttributes = document.querySelectorAll(".login-attribute")
    
    signupAttributes.forEach(element => {
        element.classList.add("hide")
    });
    loginAttributes.forEach(element => {
        element.classList.remove("hide")
    });
}