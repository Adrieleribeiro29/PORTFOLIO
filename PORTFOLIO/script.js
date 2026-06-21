const sections = document.querySelectorAll("section");

function mostrarSecoes() {
    sections.forEach((section) => {
        const posicao = section.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            section.classList.add("aparecer");
        }
    });
}

window.addEventListener("scroll", mostrarSecoes);
mostrarSecoes();

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(item => item.classList.remove("ativo"));
        this.classList.add("ativo");
    });
});