document.getElementById("btn-submit").addEventListener('click', function () {
    const UserEmail = document.getElementById('user-email');
    const Email = UserEmail.value;
    const UserPassword = document.getElementById('user-password');
    const Password = UserPassword.value;
    //console.log(Email);
    //console.log(Password);
    if (Email == "misbahul.amin2001@gmail.com" && Password == "Towaha4594696") {
        window.location.href = 'banking.html';
    }
    else {
        alert("You information is invalid.");
    }
})