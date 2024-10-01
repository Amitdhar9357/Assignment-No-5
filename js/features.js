document
  .getElementById('show-all-history')
  .addEventListener('click', function () {
    showSectionById("donate-history");
    const historyBtn = document.getElementById('show-all-history');
    historyBtn.style.backgroundColor = '#00a86d';
    historyBtn.style.color = 'black';
    const donateBtn = document.getElementById('show-donation-btn');
    donateBtn.style.backgroundColor = '#ffff';
  });

document
  .getElementById("show-donation-btn")
  .addEventListener("click", function () {
    showSectionById('card-container');
    const donateBtn = document.getElementById('show-donation-btn');
    donateBtn.style.backgroundColor = '#00a86d';
    donateBtn.style.color = 'black';
    const historyBtn = document.getElementById('show-all-history');
    historyBtn.style.backgroundColor = '#ffff'

  });
