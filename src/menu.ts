function toggleMenu(): void {
    const menu = document.getElementById("dropdownMenu") as HTMLElement;
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }
  
  // Close the menu if the user clicks outside of it
  document.addEventListener("click", (event: MouseEvent) => {
    const menuIcon = document.querySelector(".menu-icon") as HTMLElement;
    const menu = document.getElementById("dropdownMenu") as HTMLElement;
    
    if (menu && !menuIcon.contains(event.target as Node)) {
      menu.style.display = "none";
    }
  });
  