window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        if (window.scrollY > 20) {
            nav.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
        } else {
            nav.style.boxShadow = "none";
        }
    }
});

const buttons = document.querySelectorAll(".btn, button");
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

const largeImage = document.querySelector('.large-pizza');
const smallImages = document.querySelectorAll('.plate-wrapper img');

if (largeImage && smallImages.length > 0) {
    smallImages.forEach(img => {
        img.addEventListener('click', () => {
            
            largeImage.style.opacity = 0;
            setTimeout(() => {
                const tempSrc = largeImage.src;
                largeImage.src = img.src;
                img.src = tempSrc;
                largeImage.style.opacity = 1;
            }, 200);
        });
    });
}

const menuIcon = document.querySelector('.fa-bars');
const navEl = document.querySelector('nav');

if (menuIcon && navEl) {
    menuIcon.addEventListener('click', () => {
        navEl.classList.toggle('active');
        if (navEl.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
}

const searchIcon = document.querySelector('.fa-magnifying-glass');
const headerEl = document.querySelector('header');

if (searchIcon && headerEl) {
    const searchBox = document.createElement('div');
    searchBox.className = 'search-box';
    searchBox.innerHTML = '<input type="text" placeholder="Search...">';
    headerEl.appendChild(searchBox);

    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchBox.querySelector('input').focus();
        }
    });
}
