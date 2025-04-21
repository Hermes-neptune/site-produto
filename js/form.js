const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

if (contactForm) {
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});
}

if (newsletterForm) {
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por se inscrever em nossa newsletter!');
    this.reset();
});
}

window.addEventListener('scroll', function() {
const header = document.querySelector('header');
if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
} else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
}
});