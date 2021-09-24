const bill = document.getElementById('billTotal');
const tipBtns = document.querySelectorAll('.tip')
const customTip = document.getElementById('custom')

bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

customTip.addEventListener('input', setTipCustom)

let billValue = 0.00; //default value
let tipValue = 0.15;


function validateNumber(s) {
    let rgx= /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx)
}

function validateInt(s){
    let rgx = /^[0-9]9/
    return s.match(rgx)
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }

   
    billValue = parseFloat(bill.value).toFixed(2);
    console.log(billValue)
}

function handleClick(event){
    tipBtns.forEach(btn =>{
        btn.classList.remove('btnActive')

        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btnActive')
            tipValue = parseFloat(btn.innerHTML)/100
        }
    })
}

function setTipCustom(){
    if(!validateInt(customTip.value)){
        customTip.value = customTip.value.substring(0, customTip.value,length-1)
    }
    tipValue = parseFloat(customTip.value/100)

    console.log(tipValue)
}