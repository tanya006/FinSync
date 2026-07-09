function togglePwd(id, icon) {
    const inp = document.getElementById(id);
    inp.type = inp.type === "password" ? "text" : "password";
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}

function checkStrength() {
    const val = document.getElementById("password").value;
    const fill = document.getElementById("strengthFill");
    const label = document.getElementById("strengthLabel");
    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 10) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (!val) {
        fill.style.width = "0%";
        label.textContent = "";
        return;
    }
    if (score <= 1) {
        fill.style.width = "25%";
        fill.style.background = "#ef4444";
        label.textContent = "Weak";
        label.style.color = "#ef4444";
    } else if (score === 2) {
        fill.style.width = "55%";
        fill.style.background = "#f59e0b";
        label.textContent = "Fair";
        label.style.color = "#f59e0b";
    } else if (score === 3) {
        fill.style.width = "80%";
        fill.style.background = "#6ec800";
        label.textContent = "Good";
        label.style.color = "#539600";
    } else {
        fill.style.width = "100%";
        fill.style.background = "#376400";
        label.textContent = "Strong";
        label.style.color = "#376400";
    }
}
