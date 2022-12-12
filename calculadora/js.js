const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
const screen = document.getElementById('screen')
const history = document.getElementById('history_')
const c = new calculator()
let isOperator = false

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', function(){
        screen.textContent += this.textContent
    })
}

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click', function(){
            screen.textContent += this.textContent
    })
}
document.getElementById('equal').addEventListener('click',() => {
    history.textContent=`${screen.textContent}=`
    screen.textContent = c.getResult(screen.textContent)
})
document.getElementById('reset').addEventListener('click',()=>{
    screen.textContent = '0'
    history.textContent = ''
})