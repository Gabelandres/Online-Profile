const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.top = scrollTop < lastScrollTop ? '0' : '-50px';
    lastScrollTop = scrollTop;
});

document.addEventListener('mousemove', (event) => {
    navbar.style.top = event.clientY < 50 ? '0' : '-50px';
});

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

const projectLinks = {
    'converter': 'https://github.com/8RIII/cc206_converter_app',
    'proposer': 'https://mainpy-d4tatysvgwgeelcjp9hxce.streamlit.app/',
    'dragonfruit': 'https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.dragonfruitclassifier.com%2F&h=AT0dKGTfjfbnXgEWArjZcBlsUyqyGFxOTKI2IEQFyOQvYgHdsVqB4-jL7p44jrRHqQvHrvK5rgFpEgqd2hhgUVQgHiffm5S6KZTbOF93xa92D6n3lm_deJa0Y_ovY4R4gENzyA'
};

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        if (projectLinks[projectId]) {
            window.open(projectLinks[projectId], '_blank');
        }
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    },
    { threshold: 0.1 }
);

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.skill-category').forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(20px)';
    skillObserver.observe(box);
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});