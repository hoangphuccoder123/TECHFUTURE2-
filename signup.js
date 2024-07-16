const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const username = inputUsernameRegister.value.trim();
  const password = inputPasswordRegister.value.trim();

  if (!username ||!password) {
    alert("Vui lòng không để trống");
    return;
  }

  const user = {
    username,
    password,
  };

  try {
    localStorage.setItem(username, JSON.stringify(user));
    alert("Đăng Ký Thành Công");
    window.location.href = "dangnhap.html";
  } catch (error) {
    console.error("Error registering user:", error);
    alert("Đăng Ký Thất Bại");
  }
});