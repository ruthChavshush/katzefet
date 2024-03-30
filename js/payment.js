document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn")

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if ($("form")[0].checkValidity()) {
      $("#myModal").modal("show")
      $("form")[0].reset()
    } else {
      $("form")[0].reportValidity()
    }
  })


  document.getElementById("totalPayment").innerText =
    calculateTotal() + ' ש"ח '
})
