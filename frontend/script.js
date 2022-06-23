console.log('Hello World!');

//function loadEvent() {
//    console.log('Loaded');

//    let rootElement = document.getElementById('root')

//    rootElement.innerHTML = "Sziasztok"
/*console.dir(document.getElementById('root'))*/
/*console.dir(document.querySelector('#root'))*/

const x = "egy változó vagyok"
console.log(x);

const obj = {
    "kulcs": "ertek",
    kulcs2: 132,
    boolivan: true,
    "kulcs4": "123"
}
const arr = [
    'string',
    123,
    'false',
    '456'
]



//    rootElement.innerHTML += "Ciao"

//    rootElement.insertAdjacentHTML('beforeend', `
//        <h1> This is the title</h1 >`)

//

//window.addEventListener('load', loadEvent)

function loadEvent() {
    let root = document.getElementById('root')
    root.insertAdjacentHTML('beforeend',
        `<h1> ${arr} </h1>`
    )
}

window.addEventListener('load', loadEvent)