/* O que cada expressão retorna?
Dê uma olhada nestes exemplos e pense sobre o que cada um retorna: */
!true // False
!false // True
!!false // False
!!true // True
!1 // False
!!1 // True
!0 // True
!!0 // False
!!"" // False

let x = 5 ;
let y = 9;
x < 10 && x!==5 // False
x>9 || x===5 // True
!(x===y) // True


/* O que cada expressão retorna?
Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false? */

let x=10
let y ="a"
y==="b" || x >= 10 // True

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) //False

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito) //False

