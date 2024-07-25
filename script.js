document.getElementById("nav-icon").addEventListener("click", function () {
  var menuList = document.getElementById("menu-list");
  if (menuList.style.display === "flex") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "flex";
  }
});
