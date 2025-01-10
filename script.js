document.getElementById("generate-btn").addEventListener("click", function () {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let passwordLength = 15;
  let password1 = "";
  let password2 = "";
  for (var i = 0; i < passwordLength; i++) {
    password1 += charset.charAt(Math.floor(Math.random() * charset.length));
    password2 += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  document.getElementById("password1").textContent = password1;
  document.getElementById("password2").textContent = password2;
});
