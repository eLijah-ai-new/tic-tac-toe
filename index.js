let symbol = "X"
boardArr =[
    "x","1","o",
    "3","x","o",
    "6","7","8",

]
pcArr = [
    1,2,
]
// ran num based on arr leng. 

const WinObj={
    0:[
        [0,1,2],
        [0,3,6],
        [0,4,8]
    ]
}

const play = (num)=>{
    console.log(num)

    if(boardArr[num]=="X"||boardArr[num]=="O"){

    }else{
        // boardArr
        // paArr
        // boardDiv
    }
    boardDiv.children[num].textContent="O"
}
// 0. Check whose turn it is.
// 1. check if player can place.
// 2. update boardArr with x or o 
// 3. Check if win
// 4. if not win pc choice
// random square select.
// 5. run sequence from step 2.

// NB zero index HTML
const boardDiv = document.getElementById("board")




