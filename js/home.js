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

      //**** History  Part ****

      const div = document.createElement("div");
      div.style.border = "2px solid #f2f2f2";
      div.style.padding = "20px";
      div.style.borderRadius = "8px";
      div.style.marginBottom = "24px";
      document.getElementById("donate-history").append(div);
      const h2 = document.createElement("h2");
      h2.innerText =
        donateAmount +
        "  Taka is Donated for famine-2024 at Noakhali , Bangladesh";
      h2.style.fontSize = "2.5 rem";
      h2.style.fontWeight = "700";
      h2.style.marginBottom = "14px";
      const p = new Date();
      div.append(h2, p);
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

      //**** History Part ****
      const div = document.createElement("div");
      div.style.border = "2px solid #f2f2f2";
      div.style.padding = "20px";
      div.style.borderRadius = "8px";
      div.style.marginBottom = "24px";
      document.getElementById("donate-history").append(div);
      const h2 = document.createElement("h2");
      h2.innerText =
        donateAmount + " Taka is Donated for Flood Relief in Feni,Bangladesh";
      h2.style.fontSize = "2.5 rem";
      h2.style.fontWeight = "700";
      h2.style.marginBottom = "14px";
      const p = new Date();
      div.append(h2, p);
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

      //**** History  Part ****
      const div = document.createElement("div");
      div.style.border = "2px solid #f2f2f2";
      div.style.padding = "20px";
      div.style.borderRadius = "8px";
      div.style.marginBottom = "24px";
      document.getElementById("donate-history").append(div);
      const h2 = document.createElement("h2");
      h2.innerText =
        donateAmount +
        " Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh";
      h2.style.fontSize = "2.5 rem";
      h2.style.fontWeight = "700";
      h2.style.marginBottom = "14px";
      const p = new Date();
      div.append(h2, p);
    } else {
      alert("Invalid Amount, Try Again");
    }
  });
