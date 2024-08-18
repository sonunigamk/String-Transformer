const input = document.querySelector('input');

const lowerCaseOutput = document.querySelector('#lowercase span');
const upperCaseOutput = document.querySelector('#uppercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimOutput = document.querySelector('#trim span');


function capitalizeString(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1, str.length);

}


function camelCase(str) {
    const lowerCaseString = str.toLowerCase(str);
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word, i) => {
        if (i === 0) return word;
        return capitalizeString(word)
    })
    return finalArray.join('');
}

function pascalCase(str) {
    const lowerCaseString = str.toLowerCase(str);
    const wordsArray = lowerCaseString.split(' ');
    const finalArray = wordsArray.map((word) => {
        return capitalizeString(word)
    })
    return (finalArray.join(''));
}

function snakeCase(str) {
    const wordsArray = str.split(' ');
    return wordsArray.join('_');

    //    return str.replaceAll(' ', '_');   this line will do the same job

}
function kebabCase(str) {
    return str.replaceAll(' ', '-');
}

function trim(str) {
    return str.replaceAll(' ', '');
}

function updateValues() {
    lowerCaseOutput.innerText = input.value.trim().toLowerCase();
    upperCaseOutput.innerText = input.value.trim().toUpperCase();
    camelCaseOutput.innerText = camelCase(input.value.trim());
    pascalCaseOutput.innerText = pascalCase(input.value.trim());
    snakeCaseOutput.innerText = snakeCase(input.value).trim();
    kebabCaseOutput.innerText = kebabCase(input.value.trim());
    trimOutput.innerText = trim(input.value.trim());
}

updateValues();

input.addEventListener('input', () => {
    updateValues();

})

