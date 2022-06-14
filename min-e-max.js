function min(a, b) {
    if (a < b) {
        return a
    } else if (a > b) {
        return b
    }
}

function max(a, b) {
    if (a < b) {
        return b
    } else if (a > b) {
        return a
    }
}

console.log(min(55, 10))
console.log(max(25, 40))

function mod(num, mod){

     if (num % mod === 0)
    {
        console.log('num é divisível por mod')
    }
    else
    {
        console.log('num não é divisível por mod')
    }
}
console.log(mod(20, 4))

function countChars(frase, c) {
    var totalDeC = 0
    for (var i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == c) {
            totalDeC++
        }
    }
    return totalDeC
}

console.log(countChars("fernando", "n"))

function range(min, max) {
    if (min > max) {
        console.log("min não pode ser maior que max!!")
        return null
    }
    var vetor = []
    for (var i = min + 1; i < max; i++) {
        vetor.push(i)
    }
    return vetor
}

function range(min, max, i) {
    if (min > max) {
        console.log("min não pode ser maior que max");
        return null
    }
    var vetor = [];
    for (var j = min + i; j < max; j += i) {
        vetor.push(j)
    }

    return vetor
}

console.log(range(2, 15, 3))


 function reverseArray(array) {
     var vetorNovo = []
     for (var i = (array.length - 1); i >= 0; i--) {
         vetorNovo.push(array[i])
     }
     return vetorNovo
 }

var vetor = [2, 4, 6, 8, 10]
console.log(vetor)
console.log(reverseArray(vetor))
console.log(vetor)

function toList(array) {
    var list = null

    for (var length = (array.length - 1); length >= 0; length--) {
        list = {
            value: array[length],
            rest: list
        }
    }
    return list
}

var vetor = [10, 20, 30]
console.log(vetor)
console.log(toList(vetor))

function deepEquals(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (var prop in obj1) {
        if (!(prop in obj2)) {
            return false;
        }
    }
    return true;
}

var obj1 = {
    materia1: "daw",
    materia2: "tp",
    materia3: "ocs",
};

var obj2 = {
    materia1: "daw",
    materia2: "tp",
    materia3: "ocs",
    aluno: "Fernando"
}

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, {
    materia1: "daw",
    materia2: "tp",
    materia4: "estagio",
}));
console.log(deepEquals(obj1, {
    materia1: "daw",
    materia2: "tp",
    materia3: "ocs",
}));