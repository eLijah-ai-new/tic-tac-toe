

let symbol = "X"
let winArr = []
boardArr = [   
    "0","1","2",   
    "3","4","5",   
    "6","7","8",
]
pcArr = [   
    0,1,2,3,4,5,6,7,8
]

const WinObj={
    0: [
    [0,1,2],
    [0,3,6],
    [0,4,8]],
  1: [
    [1,0,2],
    [1,4,7]],
  2: [
    [2,1,0],
    [2,5,8],
    [2,4,6]],
  3: [
    [3,0,6],
    [3,4,5]],
  4: [
    [4,1,7],
    [4,3,5],
    [4,0,8],
    [4,2,6]],
  5: [
    [5,2,8],
    [5,3,4]],
  6: [
    [6,3,0],
    [6,7,8],
    [6,4,2]],
  7: [
    [7,1,4],
    [7,6,8]],
  8: [
    [8,2,5],
    [8,6,7],
    [8,0,4]]
}

const boardDiv = document.getElementById("board")

const place = (num)=>{
    boardArr[num]= symbol
    let i = pcArr.indexOf(num)
    pcArr.splice(i,1)
    boardDiv.children[num].textContent=symbol
    checkWin(num)
}

const checkWin = (num)=>{
 let obj = WinObj[num]
 for(let i =0;i<obj.length;i++){
 let currentArr = obj[i]
  if(boardArr[currentArr[0]]==symbol && boardArr[currentArr[1]]==symbol && boardArr[currentArr[2]]==symbol){
  winArr = currentArr.slice()
  return true
      }
    }
    winArr = []
    return false
}

const play = (num)=>{
    console.log(num)
    if(boardArr[num]=="X"||boardArr[num]=="O"){
    }else{
        place(num)
        boardArr[num] = symbol
        let i

        if(checkWin(num)){
            alert(symbol + " wins!")
            resetBoard()
            return
        }

        if(pcArr.length==0){
            alert("Draw!")
            resetBoard()
            return
        }

        if(symbol=="X"){
            symbol="O"
            pcTurn()
        }else{
            symbol="X"



            // I need alert to pop up  after X or O has been plced.
        }
    }
}

const pcTurn = ()=>{
    if(pcArr.length==0) return
    let choice = pcArr[Math.floor(Math.random()*pcArr.length)]
    place(choice)
    if(checkWin(choice)){
        alert("O wins!")
        resetBoard()
        return
    }
    if(pcArr.length==0){
        alert("Draw!")
        resetBoard()
        return
    }
    symbol = "X"
}

const resetBoard = ()=>{
    for(let e=0; e<9; e++){
        boardArr[e] = e
        pcArr[e] = e
        boardDiv.children[e].textContent = ""
    }
    winArr = []
    symbol = "X"
  }
