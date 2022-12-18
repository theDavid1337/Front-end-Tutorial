let box = document.querySelector('.box'),
    button = document.querySelector('button'),
    allChars = 'qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM',
    arrayForAllChars = [],
    resultStr = '',
    count = 1;

function putKeys() {
    button.removeAttribute('onclick')
    console.log('Working...');
    window.addEventListener('keydown', (keyInfo) => {
        for (let i = 0; i < allChars.length; i++) {
            if (keyInfo.key == allChars[i]) {
                resultStr += allChars[i]
                box.innerHTML = resultStr
            }
        }
    })
}