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

let lsys = ['a'];

const iterator = (iterations) => {

    for (i = 0; i < iterations; i++) {

        const singleIteration = () => {
            let currentLength = lsys.length
            for(j = 0; j < currentLength; j++) {
                // a => ab
                if(lsys[j] === 'a') {
                    lsys.splice(j, 1, 'a', 'b')
                // b => aa
                }else if(lsys[j] === 'b') {
                    lsys.splice(j, 1, 'a', 'a')
                }
            }
        }
        console.log(lsys)
        singleIteration()
    }
}

iterator(5)