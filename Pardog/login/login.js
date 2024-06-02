document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".btn-login");

    loginButton.addEventListener("click", function() {
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        if (usuario === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            window.location.href = "../descubra/descubra.html";
        }
    });
});
