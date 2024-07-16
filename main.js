const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const username = inputUsername.value.trim();
  const password = inputPassword.value.trim();

  if (username === "" || password === "") {
    alert("Vui lòng không để trống");
    return;
  }

  const storedUser = localStorage.getItem(username);
  if (!storedUser) {
    alert("Tài khoản không tồn tại");
    return;
  }

  const user = JSON.parse(storedUser);
  if (user.password !== password) {
    alert("Mật khẩu không đúng");
    return;
  }
  alert("Đăng Nhập Thành Công ");
  window.location.href = "Home.html";
});