function togglePwd(id, icon) {
    const inp = document.getElementById(id);
    inp.type = inp.type === "password" ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}
