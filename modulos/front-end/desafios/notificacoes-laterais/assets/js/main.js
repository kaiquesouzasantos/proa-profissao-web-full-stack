const toastContent = document.getElementById("toast-content")

const messages = {
  success: '<i class="fa-solid fa-circle-check"></i> Successfully submitted',
  error: '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!',
  invalid: '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'
}

function showToast(type) {
  const toast = document.createElement("div")
  toast.classList.add("toast")
  toast.innerHTML = messages[type]

  if (type === "error") {
    toast.classList.add("error")
  } else if (type === "invalid") {
    toast.classList.add("invalid")
  }

  toastContent.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 6000);
}
