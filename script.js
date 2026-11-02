
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

// Tutup menu selepas pautan dipilih
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu")
            .classList.remove("active");
    });
});

// Tahun automatik
document.getElementById("year").textContent =
    new Date().getFullYear();
