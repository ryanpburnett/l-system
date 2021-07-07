// TRY #1

// var A = "A";
// var B = "B";
// var btn = document.querySelector("#btn")
// var generateP = document.createElement("p")

// generateP.innerText = "A"

// btn.addEventListener("click", lsys)
// function lsys() {
//     document.body.children[1].children[0].appendChild(generateP);
// }


// TRY #2

// maybe use spread operator on lsys array?

// let numero = 10;
// let a = 'a'
// let b = 'b'
// let lsys = [a];

// let newLsys = lsys.map(a => a, b)


// console.log(newLsys);

// TRY #3

let lsys = ['b'];

const iterator = () => {
    let currentLength = lsys.length
    for(i = 0; i < currentLength; i++) {
        // a => ab
        if(lsys[i] === 'a') {
            lsys.splice(lsys[i], 1, 'a','b')
        // b => aa
        }else if(lsys[i] === 'b') {
            lsys.splice(lsys[i], 1, 'a', 'a')
        }
    }
}

iterator()

console.log(lsys)