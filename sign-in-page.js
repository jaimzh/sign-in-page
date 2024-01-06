function showPassword() {
    let passwordInput = document.getElementById('passwordInput');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}