<script>
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("navlinks");
    const icon = document.getElementById("menu-icon");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // icon change
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
</script>
