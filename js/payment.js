document.addEventListener("DOMContentLoaded", function () {
  setTotalPaymentText()
  const submitBtn = document.getElementById("submitBtn")

  submitBtn.addEventListener("click", function (event) {
    resetShoppingCart()
    setTotalPaymentText()
    event.preventDefault()
    if ($("form")[0].checkValidity()) {
      $("#myModal").modal("show")
      $("form")[0].reset()
    } else {
      $("form")[0].reportValidity()
    }
  })
})

function setTotalPaymentText() {
  document.getElementById("totalPayment").innerText = calculateTotal() + ' ש"ח '
}
