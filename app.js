const box = document.querySelectorAll('.box');
const resultEl = document.querySelector('.result');
const actionEl = document.querySelector('.transactions');

let result = ''
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', (e) => {
        let targ = e.target.dataset.numb
        if(targ == "=") {
            result = eval(result);
            resultEl.innerHTML = result
            result = ''
        }else if(targ == "C") {
            actionEl.innerHTML = 0
            resultEl.innerHTML = 0
            result = ''
        }else if(targ == ','){
            result += '.'
            actionEl.innerHTML = result

        }else if(targ == 'x2'){
            result = `(${result})*(${result})`
            actionEl.innerHTML = result

        }else if (targ == '√'){
            result = Math.sqrt(eval(result));
            actionEl.innerHTML = result
        }
        else if(targ != '='){
            result += e.target.dataset.numb
            actionEl.innerHTML = result
        }
    })
}


