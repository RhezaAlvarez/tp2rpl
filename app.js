const DB_USER = [
    {
        username: "rheza",
        password: "1234"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;
    /*console.log(valueInputUsername);
    console.log(valueInputPassword);*/

    let flag = 0;

    DB_USER.map((data) => {
        if(data.username === valueInputUsername && data.password === valueInputPassword){
            flag = 1;
        }
    })

    const warninglsg = document.querySelector(".warning");

    console.log(warninglsg.className);

    if(flag === 0){
        warninglsg.className = "text-danger";
    }
    else{
        alert("Selamat anda masuk ke Home");
    }
})

/*console.log(inputUsername);
console.log(inputPassword);
console.log(buttonSubmit);*/