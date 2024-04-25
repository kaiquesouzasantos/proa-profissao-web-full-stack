const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=brl"

const options = {
  method: 'GET', 
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-fj5RWLRjcdzi3ExJwn7fX9vF'
  }
}

function requestCoinsCotation(url, options) {
  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      setElementById("bitcoin", response.bitcoin.brl)
      setElementById("ethereum", response.ethereum.brl)
      setElementById("dogecoin", response.dogecoin.brl)
    })
    .catch(error => console.error(error))
}

function setElementById(id, value) {
  document.getElementById(id).innerHTML = formatMoney(value) || "Unavailable"
}

function formatMoney(value) {
  try {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  } catch(ignored) {}
}

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    requestCoinsCotation(url, options)
  }, 500)
})
