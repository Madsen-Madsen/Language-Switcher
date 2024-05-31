document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language-selector');

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

    languageSelector.addEventListener('change', function () {
        const selectedLanguage = languageSelector.value;
        const translation = translations[selectedLanguage];

        document.getElementById('title').textContent = translation.title;
        document.getElementById('description').textContent = translation.description;
    });
});
