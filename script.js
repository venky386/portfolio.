document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle dark mode
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Dark mode styles
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #121212;
            color: white;
        }
        .dark-mode section {
            background-color: #1e1e1e;
            color: white;
        }
        .dark-mode header, .dark-mode footer {
            background-color: #222;
        }
    `;
    document.head.appendChild(darkModeStyle);
});
