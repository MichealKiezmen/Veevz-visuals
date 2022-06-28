var menuButton = document.getElementById("menu-icon");
menuButton.addEventListener("click", function() {
  var menuItems = document.querySelectorAll(".item");

  for (var i = 0; menuItems.length > i; i++) {
    if (menuItems[i].classList.contains("active")) {
      menuItems[i].classList.remove("active");
    } else {
      menuItems[i].classList.add("active");
    }
  }
});



