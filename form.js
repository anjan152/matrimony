let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = e.target.email.value;
    alert(email);

} );
