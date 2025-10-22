let symbol = "X"
let winArr = []
boardArr =[
    "0","1","2",
    "3","4","5", 
    "6","7","8",

]
pcArr = [
    0,1,2,3,4,5,6,7,8
]
// ran num based on arr leng. 

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

const place = (num)=>{
    boardArr[num]= symbol
    let i = pcArr.indexOf(num)
    pcArr.splice(i,1)
    boardDiv.children[num].textContent=symbol
    checkWin(num)
}

const checkWin = (num)=>{
    console.log(num)
    let obj = WinObj[num]
        for(let i =0;i<obj.length;i++){
      console.log(obj[i])
    }
}

const play = (num)=>{
    console.log(num)

    if(boardArr[num]=="X"||boardArr[num]=="O"){

    }else{
        place(num)

         boardArr[num] = symbol

         let i 

         // not finished with this psrt
        
    }

     if(won){
            alert(symbol + " wins!")
            resetBoard()
            return
        }

         if(pcArr.length==0){
            alert("Draw!")
          resetBoard()
            return

            if(symbol=="X"){
            symbol="O"
            pcTurn()
        }else{
            symbol="X"
        }

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
