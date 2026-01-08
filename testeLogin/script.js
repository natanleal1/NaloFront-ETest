const form = document.getElementById("login-form")
btn = document.getElementById("submit-btn")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    btn.textContent = "..."
    btn.disabled = true

    setTimeout(() => {
    btn.textContent = "Enviar"
    btn.disabled = false
  }, 2000)
})