const menuLinks = document.querySelectorAll('nav a');
console.log(menuLinks);
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
        });
    }
    });
});botao.addEventListener('click', clicar);
