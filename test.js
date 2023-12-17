document.addEventListener('DOMContentLoaded', function () {
    // Create mobile-friendly navigation menu
    const nav = document.querySelector('nav ul');
    const menuToggle = document.createElement('li');
    menuToggle.innerHTML = '<a href="#">Toggle Menu</a>';
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
    nav.appendChild(menuToggle);

    // Add and resize images programmatically
    const imageContainer = document.querySelector('.main-content');
    const imageUrls = [
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw22TGq3TU-Uad9HJz0Shhc8&ust=1702868338501000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjszYW9lYMDFQAAAAAdAAAAABAH',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/500'
    ];

    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        imageContainer.appendChild(img);
    });
});
