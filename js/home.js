document
  .getElementById("btn-donate-noakhail")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const noakhailDonate = getInputFieldValueById("input-donation-noakhali");
    const balance = getTextFieldValueById("main-balance");
    if (noakhailDonate > balance) {
      alert("Insufficient Balance.");
    } else if (noakhailDonate > 0) {
      const mainBalance = balance - noakhailDonate;
      document.getElementById("main-balance").innerText = mainBalance + " BDT";

      const donateBalance = getTextFieldValueById("donate-amount-noakhali");
      const donateAmount = noakhailDonate + donateBalance;
      document.getElementById("donate-amount-noakhali").innerText =
        donateAmount + " BDT";

      // History Notification Part ****
    } else {
      alert("Invalid Amount, Try Again");
    }
  });

// donate for feni
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const feniDonate = getInputFieldValueById("input-donation-feni");
    const balance = getTextFieldValueById("main-balance");
    if (feniDonate > balance) {
      alert("Insufficient Balance.");
    } else if (feniDonate > 0) {
      const mainBalance = balance - feniDonate;
      document.getElementById("main-balance").innerText = mainBalance + " BDT";

      const donateBalance = getTextFieldValueById("donate-amount-feni");
      const donateAmount = feniDonate + donateBalance;
      document.getElementById("donate-amount-feni").innerText =
        donateAmount + " BDT";

      // History Notification Part *
    } else {
      alert("Invalid Amount, Try Again");
    }
  });

// donate for quota movement

document
  .getElementById("btn-donate-movement")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const quotaMovementDonate = getInputFieldValueById(
      "input-donation-movement"
    );
    const balance = getTextFieldValueById("main-balance");
    if (quotaMovementDonate > balance) {
      alert("Insufficient Balance.");
    } else if (quotaMovementDonate > 0) {
      const mainBalance = balance - quotaMovementDonate;
      document.getElementById("main-balance").innerText = mainBalance + " BDT";

      const donateBalance = getTextFieldValueById("donate-amount-movement");
      const donateAmount = quotaMovementDonate + donateBalance;
      document.getElementById("donate-amount-movement").innerText =
        donateAmount + " BDT";
    } else {
      alert("Invalid Amount, Try Again");
    }
  });
