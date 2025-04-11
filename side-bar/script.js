const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

function showSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

toggleBtn.addEventListener("click", function (e) {
  showSidebar();
});

closeBtn.addEventListener("click", function (e) {
  showSidebar();
});
