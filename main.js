// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Закрытие алертов
    document.querySelectorAll('.alert-dismissible').forEach(function(alert) {
        const btn = alert.querySelector('.btn-close');
        if (btn) {
            btn.addEventListener('click', function() {
                alert.style.opacity = '0';
                setTimeout(function() {
                    alert.style.display = 'none';
                }, 300);
            });
        }
    });

    // Авто-закрытие алертов через 5 секунд
    document.querySelectorAll('.alert').forEach(function(alert) {
        setTimeout(function() {
            if (alert) {
                alert.style.opacity = '0';
                setTimeout(function() {
                    alert.style.display = 'none';
                }, 300);
            }
        }, 5000);
    });
});