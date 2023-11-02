const age = 30
const firsnName = 'Krzystzof'

console.log(`Cześć, mama na imie ${firsnName}, mam ${age}lat`)

let zmienna = document.querySelector('.main-header--js')
zmienna.innerHTML = 'jestem tekstem wstrzyknietym z js'

const powitanie = (name, age) =>{
    return `Siema ${name}, serio masz ${age}lat, stara dupa z ciebie`
}

console.log(powitanie('Krzysztof', 30))