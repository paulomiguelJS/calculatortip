const bill = document.getElementById('billTotal');
const tipBtns = document.querySelectorAll('.tip')
const customTip = document.getElementById('custom')
const people = document.getElementById('totalPeople')
const errorMsg = document.querySelector('.error')
const results = document.querySelectorAll('.value')
const resetBtn = document.querySelector('.reset')

bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

customTip.addEventListener('input', setTipCustom)
people.addEventListener('input', setPeople)
resetBtn.addEventListener('click', reset)

let billValue = 0.00; //default value
let tipValue = 0.15;
let peopleValue = 1;


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
    calculateTip()
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

    calculateTip()
}

function setTipCustom(){
    if(!validateInt(customTip.value)){
        customTip.value = customTip.value.substring(0, customTip.value,length-1)
    }
    tipValue = parseFloat(customTip.value/100)

    tipBtns.forEach(btn => {
        btn.classList.remove('btnActive')
    })
    if(customTip.value !== ''){
    calculateTip()

    }
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
    calculateTip()

    }

    function calculateTip(){
        if(peopleValue >=1) {
            let tipAmount = billValue * tipValue / peopleValue
            let total = billValue * (tipValue + 1) / peopleValue
            results[0].innerHTML = '$' + tipAmount.toFixed(2)
            results[1].innerHTML = '$' + total.toFixed(2)
            console.log(tipAmount)
            console.log(total)

        }
    }

    function reset(){
        bill.value = '0.0'
        setBillValue()

        tipBtns[2].click()
        peopleValue = '1'
        setPeopleValue();
    }