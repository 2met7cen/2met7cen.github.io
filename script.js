// Простой пример JavaScript для интерактивности
document.addEventListener('DOMContentLoaded', function() {
    
    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Анимация кнопки
    const heroButton = document.querySelector('.hero-button');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            alert('Привет! Это JavaScript в действии!');
        });
    }
    
    // Добавление класса при прокрутке для шапки
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.backgroundColor = '';
        }
    });
});
