function validate(e) {
    e.preventDefault();
    let email = document.getElementById("email").value

    let password = document.getElementById("password").value
    let age = document.getElementById("age").value
    console.log(email, password, age)
    let msgbox = document.getElementById("message")
    let message = ""
    if (email == "") {
        message = "Please enter your email"
        msgbox.style.color = "red"

    }
    else if (password == "") {
        message = "Please enter your password"
        msgbox.style.color = "red"
    }
    else if (age == "") {
        message = "Please enter your age"
        msgbox.style.color = "red"
    }
    else {
        message = "login successfully"
        msgbox.style.color = "green"
    }
    msgbox.innerHTML = message
}
