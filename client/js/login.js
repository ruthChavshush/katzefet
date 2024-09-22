import axios from "axios"

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn")
  const logoutBtn = document.getElementById("logoutBtn")
  const usernameHeader = document.getElementById("userName")
  const submitBtn = document.getElementById("submitBtn")

  const username = sessionStorage.getItem("username")
  if (username) {
    usernameHeader.textContent = "שלום, " + username
    logoutBtn.style.display = "inline-block"
    loginBtn.style.display = "none"
  } else {
    usernameHeader.textContent = ""
    logoutBtn.style.display = "none"
    loginBtn.style.display = "inline-block"
  }

  submitBtn.addEventListener("click", function () {
    const inputValue = document.getElementById("userNameId").value
    sessionStorage.setItem("username", inputValue)
    axios
      .get("http://localhost:3000")
      .then((response) => {
        console.log("Success:", response.data)
        location.reload()
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  })

  logoutBtn.addEventListener("click", function () {
    sessionStorage.removeItem("username")
    location.reload()
  })
})
