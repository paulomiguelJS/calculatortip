const bill = document.getElementById('billTotal');
const tipBtns = document.querySelectorAll('.tip')
const customTip = document.getElementById('custom')
const people = document.getElementById('totalPeople')
const errorMsg = document.querySelector('.error')
const results = document.querySelector

bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

customTip.addEventListener('input', setTipCustom)
people.addEventListener('input', setPeople)

let billValue = 0.00; //default value
let tipValue = 0.15;
let peopleValue = 1;
console.log(peopleValue)


function validateNumber(s) {
    let rgx= /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx)
}

function validateInt(s){
    let rgx = /^[0-9]/
    return s.match(rgx)
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }

   
    billValue = parseFloat(bill.value).toFixed(2);
}

function handleClick(event){
    tipBtns.forEach(btn =>{
        btn.classList.remove('btnActive')

        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btnActive')
            tipValue = parseFloat(btn.innerHTML)/100
        }
    })

    customTip.value = '';
}

function setTipCustom(){
    if(!validateInt(customTip.value)){
        customTip.value = customTip.value.substring(0, customTip.value,length-1)
    }
    tipValue = parseFloat(customTip.value/100)

    tipBtns.forEach(btn => {
        btn.classList.remove('btnActive')
    })
}

    function setPeople(){
        if(!validateInt(people.value)){
            people.value = people.value.substring(0, people.value,length-1)

        }
        peopleValue = parseFloat(people.value)

        if(peopleValue <= 0){
            errorMsg.classList.add('showError');
            setTimeout(function(){
                errorMsg.classList.remove('showError')
            }, 3000)
        }
console.log(peopleValue)
    }

    function calculateTip(){
        if(peopleValue >=1) {
            let tipAmount = billValue * tipValue / peopleValue
            let total = billValue * (tipValue + 1) / peopleValue
        }
    }
