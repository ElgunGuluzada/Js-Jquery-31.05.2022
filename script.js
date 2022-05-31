// $(document).ready(function () {

// if (localStorage.getItem("user") == null) {
//     localStorage.setItem("user", JSON.stringify([]))
// }
// let arr = JSON.parse(localStorage.getItem("user"));
// let productId = this.parentElement.getAttribute("data-id");
// let existProductId = arr.find(p => p.id == productId);
// if (existProductId == undefined) {
//     arr.push({
//         id: productId,
//         price: this.previousElementSibling.firstElementChild.innerText,
//         imageUrl: this.parentElement.previousElementSibling.getAttribute("src"),
//         name: this.parentElement.firstElementChild.innerText,
//         count: 1
//     })
// }
// else {
// }
// localStorage.setItem("basket", JSON.stringify(arr));

// })


let registerBtn = document.getElementById("register")
let formSignUp = document.getElementById("form-signup")
let signUpName = document.getElementById("signUpName")
let signUpSurname = document.getElementById("signUpSurname")
let signUpUsername = document.getElementById("signUpUsername")
let signUpEmail = document.getElementById("signUpEmail")
let signUpPassword = document.getElementById("signUpPassword")
let signUpRePassword = document.getElementById("signUpRePassword")


registerBtn.addEventListener("click", function () {
    console.log(signUpName.value);

    if (localStorage.getItem("user") == null) {
        localStorage.setItem("user", JSON.stringify([]))
    }
    let arr = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("dbUser") == null) {
        localStorage.setItem("dbUser", JSON.stringify([]))
    }
    let dbArr = JSON.parse(localStorage.getItem("dbUser"));


    if (signUpEmail.value != "") {
        arr.push({
            Name: signUpName.value,
            Surname: signUpSurname.value,
            Username: signUpUsername.value,
            Email: signUpEmail.value,
            Password: signUpPassword.value
        })
        localStorage.setItem("user", JSON.stringify(arr));
        dbArr.push({
            Name: signUpName.value,
            Surname: signUpSurname.value,
            Username: signUpUsername.value,
            Email: signUpEmail.value,
            Password: signUpPassword.value
        })
        localStorage.setItem("dbUser", JSON.stringify(arr));

    }

})