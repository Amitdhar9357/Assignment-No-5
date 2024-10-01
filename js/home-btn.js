document
  .getElementById('home-btn')
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = './home.html'
    console.log('clicked');
  });
