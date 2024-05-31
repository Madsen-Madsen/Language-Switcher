document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        en: {
            title: 'Hello, World!',
            description: 'This is a simple language switcher example.'
        },
        de: {
            title: 'Hallo, Welt!',
            description: 'Dies ist ein einfaches Beispiel für einen Sprachwechsler.'
        },
        es: {
            title: '¡Hola, Mundo!',
            description: 'Este es un ejemplo simple de un cambiador de idioma.'
        }
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            document.getElementById('title').textContent = translation.title;
            document.getElementById('description').textContent = translation.description;
        });
    });
});
