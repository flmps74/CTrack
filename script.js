document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    document.getElementById("authContainer").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
});
