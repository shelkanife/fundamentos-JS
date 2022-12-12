const values = {'+':0,'-':0,'/':1,'*':1}
const operatos = Object.keys(values)

class calculator {
    constructor() {
        this.currentNumber = undefined
        this.currentResult = 0
    }
    getResult(expresion){
        const i = this.split(expresion)
        const e = this.inToPost(i)
        return(this.evalExpression(e).join(''))
    }
    split(expression){
        const array = []
        let str=''
        for(let chr of expression){
            if(operatos.includes(chr)){
                array.push(str)
                array.push(chr)
                str = ''
            }else{
                str+=chr
            }
        }
        array.push(str)
        
        return array.filter(e =>e!=='')
    }
    inToPost(expresion){
        let finalExpression=[]
        const array=expresion
        const stack=[]
        for(let chr of expresion){
            if(!operatos.includes(chr)){
                finalExpression.push(chr)
            }else{
                if(stack.length >= 1){
                    if(values[chr] === values[stack[stack.length-1]]){
                        finalExpression.push(stack.pop())
                        stack.push(chr)
                    }
                    else stack.push(chr)
                }else{
                    stack.push(chr)
                }
            }
        }
        finalExpression.push(...stack.reverse())
        return finalExpression
    }
    evalExpression(expression){
        console.log(expression)
        const stack = [] 
        const array = expression
        for(let chr of array){
            switch(chr){
                case '+':
                    stack.push(stack.pop() + stack.pop())
                    break
                case '-':
                    const b = stack.pop(), a=stack.pop()|| 0
                    stack.push(a - b)
                    break
                case '*':
                    stack.push(stack.pop() * stack.pop())
                    break
                case '/':
                    const y = stack.pop(), x =stack.pop()
                    stack.push(x / y)
                    break
                default:
                    stack.push(parseFloat(chr))
            }
        }
        return stack
    }
        
}
