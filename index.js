
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.splice(-1)
}

function destructivelyRemoveFirstCat(name) {
    cats.splice(0,1)
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = [...cats, 'Broom'];
   
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const cats1 = ['Broom', ...cats];
}

function removeLastCat() {
    cats.splice(-1)
}

function removeFirstCat() {
    cats.splice(1)
}
