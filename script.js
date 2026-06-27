document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-specs');
    var specsList = document.querySelector('ul');
    var scrollButton = document.getElementById('scroll-top');
    var images = document.querySelectorAll('img');

    toggleButton.addEventListener('click', function () {
        if (specsList.style.display === 'none') {
            specsList.style.display = 'block';
            toggleButton.textContent = 'Hide specs';
        } else {
            specsList.style.display = 'none';
            toggleButton.textContent = 'Show specs';
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    images.forEach(function (img) {
        img.addEventListener('mouseenter', function () {
            img.style.transform = 'scale(1.04)';
        });
        img.addEventListener('mouseleave', function () {
            img.style.transform = 'scale(1)';
        });
    });
});
