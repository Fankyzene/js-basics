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
    "kulcs4": "123",
    tomb: ['lara croft', 'indiana jones']

}
const arr = [
    'string',
    123,
    'false',
    '456'
]

arr[18] = 987

//    rootElement.innerHTML += "Ciao"

//    rootElement.insertAdjacentHTML('beforeend', `
//        <h1> This is the title</h1 >`)

//

//window.addEventListener('load', loadEvent)

function countryComponent(country) {
    return `
    <div class= "Country">
        ${country.name.common}
    </div> 
    `
}

async function loadEvent() {
    let root = document.getElementById('root')
    //    root.insertAdjacentHTML('beforeend',
    //        `<h1>${arr.length}</h1 > `)

    //    for (let index = 5; index <= 10; index++) {
    //        console.log('the current value of index is: ', index);
    //        root.insertAdjacentHTML('beforeend',
    //            `<h1>${index}</h1>`)
    //    }


    const countries = await fetch('https://restcountries.com/v3.1/all')
    console.log(countries);
    const countriesJSON = await countries.json();
    console.log(countriesJSON);

    for (let index = 0; index < 10; index++) {
        //        console.log(countriesJSON[index].name.common);
        root.insertAdjacentHTML('beforeend', countryComponent(countriesJSON[index]));

    }

}


window.addEventListener('load', loadEvent)

