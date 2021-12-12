import { num, numOfColumn, numOfRow } from '../store/grid'

const columnOne = ["5", "10", "15", "20"]
const columnTwo = ["6", "11", "16", "21"]
const columnThree = ["7", "12", "17", "22"]
const columnFour = ["8", "13", "18", "23"]
const columnFive = ["9", "14", "19", "24"]

const firstRow = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && event.target.innerHTML < 5) {
            let grid = event.target.innerHTML;
            for (let step = 0; step < event.target.innerHTML; step++) {
                let value = grid - 1;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && event.target.innerHTML < 5) {
            let grid = event.target.innerHTML;
            for (let step = 0; step < event.target.innerHTML; step++) {
                let value = grid - 1;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })

    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && event.target.innerHTML < 5) {
            numOfRow.set(1)
            numOfColumn.set(parseInt(event.target.innerHTML) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

const firstColumn = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && columnOne.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            for (let step = 0; step < event.target.innerHTML / 5; step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && columnOne.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            for (let step = 0; step < event.target.innerHTML / 5; step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })
    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && columnOne.includes(event.target.innerHTML)) {
            numOfColumn.set(1)
            numOfRow.set((parseInt(event.target.innerHTML) / 5) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

const secondColumn = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && columnTwo.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-50", "opacity-100");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 1].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && columnTwo.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-100", "opacity-50");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 1].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })
    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && columnTwo.includes(event.target.innerHTML)) {
            numOfColumn.set(2)
            numOfRow.set((parseInt(Math.trunc(event.target.innerHTML) / 5)) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

const thirdColumn = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && columnThree.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 2].classList.replace("opacity-50", "opacity-100");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 1].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 2].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && columnThree.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 2].classList.replace("opacity-100", "opacity-50");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 1].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 2].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })
    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && columnThree.includes(event.target.innerHTML)) {
            numOfColumn.set(3)
            numOfRow.set((parseInt(Math.trunc(event.target.innerHTML) / 5)) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

const fourthColumn = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && columnFour.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 2].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 3].classList.replace("opacity-50", "opacity-100");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 1].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 2].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 3].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && columnFour.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 2].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 3].classList.replace("opacity-100", "opacity-50");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 1].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 2].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 3].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })
    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && columnFour.includes(event.target.innerHTML)) {
            numOfColumn.set(4)
            numOfRow.set((parseInt(Math.trunc(event.target.innerHTML) / 5)) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

const fifthColumn = (picker) => {
    picker.addEventListener("mouseover", (event) => {
        if (!(event.target.tagName == "UL") && columnFive.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 2].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 3].classList.replace("opacity-50", "opacity-100");
            picker.children[grid - 4].classList.replace("opacity-50", "opacity-100");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 1].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 2].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 3].classList.replace("opacity-50", "opacity-100");
                picker.children[value - 4].classList.replace("opacity-50", "opacity-100");
                grid = value;
            }
        }
    })

    picker.addEventListener("mouseout", (event) => {
        if (!(event.target.tagName == "UL") && columnFive.includes(event.target.innerHTML)) {
            let grid = event.target.innerHTML;
            picker.children[grid - 1].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 2].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 3].classList.replace("opacity-100", "opacity-50");
            picker.children[grid - 4].classList.replace("opacity-100", "opacity-50");
            for (let step = 0; step < Math.trunc(event.target.innerHTML / 5); step++) {
                let value = grid - 5;
                picker.children[value].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 1].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 2].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 3].classList.replace("opacity-100", "opacity-50");
                picker.children[value - 4].classList.replace("opacity-100", "opacity-50");
                grid = value;
            }
        }
    })
    picker.addEventListener("click", (event) => {
        if (!(event.target.tagName == "UL") && columnFive.includes(event.target.innerHTML)) {
            numOfColumn.set(5)
            numOfRow.set((parseInt(Math.trunc(event.target.innerHTML) / 5)) + 1)
            num.set(numOfColumn.get() * numOfRow.get());
        }
    })
}

export { firstRow, firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn }