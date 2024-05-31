# Language Switcher

A simple language switcher in JavaScript.

## Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/language-switcher.git
    ```

2. Navigate to the project directory:
    ```bash
    cd language-switcher
    ```

3. Open the `index.html` file in your browser.

## Structure

- `index.html`: The main HTML file that contains the user interface.
- `styles.css`: The CSS file for styling the buttons.
- `script.js`: The JavaScript that enables the language switching.
- `README.md`: This file, explaining the usage and setup.

## How It Works

- When the page loads, the content is displayed in English.
- When the user selects a different language from the dropdown menu, the text is updated to the corresponding language.
- The translations are stored in an object in the `script.js` file.

## Example

When changing the language from "English" to "Deutsch", the text changes from "Hello, World!" to "Hallo, Welt!" and the description is updated accordingly.

## Customization

You can customize this script as you wish to fit your own needs. Feel free to modify, improve, or expand the code!

## Reporting Issues

If you have questions, encounter problems, or just want to provide feedback, simply create an issue in this repository!

## Language Switcher with Buttons

You can also create a language switcher using buttons with the flags of the languages. Below is an example of how to do this.

### HTML

Create a file named `index.html` and add the following content:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Language Switcher with Flags</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <p id="description">This is a simple language switcher example.</p>
    
    <div>
        <button class="flag-button" data-language="en">
            <img src="https://flagcdn.com/us.svg" alt="English">
        </button>
        <button class="flag-button" data-language="de">
            <img src="https://flagcdn.com/de.svg" alt="Deutsch">
        </button>
        <button class="flag-button" data-language="es">
            <img src="https://flagcdn.com/es.svg" alt="Español">
        </button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

### CSS

Create a file named `styles.css` and add the following content:

```
.flag-button {
    cursor: pointer;
    border: none;
    background: none;
}
.flag-button img {
    width: 30px;
    height: 20px;
}
```

### JavaScript

Create a file named `script.js` and add the following content:

```
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
```
