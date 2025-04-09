const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");


// Cambia el tema al hacer clic en el botón
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = 'assets/icon/sun.svg';
        toggleText.textContent = "Light Mode";  
    } else {
        toggleIcon.src = "assets/icon/moon.svg";
        toggleText.textContent = "Dark Mode";
    }
});



// Datos personalizables (modifica estos valores)
const profileData = {
    name: "Luis Gerardo Martinez Hernandez",
    description: "¡Sígueme en mis redes!",
    imageUrl: "assets/image/perfil2.jpg",
};

const links = [
    { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram", class: "instagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "fab fa-youtube", class: "youtube" },
    { name: "TikTok", url: "https://tiktok.com", icon: "fab fa-tiktok", class: "tiktok" },
    { name: "WhatsApp", url: "https://wa.me/tunumero", icon: "fab fa-whatsapp", class: "whatsapp" },
    { name: "Facebook", url: "https://facebook.com", icon: "fab fa-facebook", class: "facebook" },
    { name: "X", url: "https://x.com/DJLuisGMartinez", icon: "fab fa-", class: "X" },
    { name: "Spotify", url: "https://spotify.com", icon: "fab fa-spotify", class: "spotify" },
    { name: "LinkedIn", url: "https://linkedin.comhttps://www.linkedin.com/in/luis-gerardo-martinez-03898582/", icon: "fab fa-linkedin", class: "linkedin" },
];

// Cargar datos en la página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('description').textContent = profileData.description;
    document.getElementById('profile-img').src = profileData.imageUrl;

    const linksContainer = document.getElementById('links-container');
    
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `link ${link.class}`;
        linkElement.target = "_blank";
        linkElement.innerHTML = `<i class="${link.icon}"></i> ${link.name}`;
        linksContainer.appendChild(linkElement);
    });
});

