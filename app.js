const bill = document.getElementById('billTotal');
const tipBtns = document.querySelectorAll('.tip')

bill.addEventListener('input', setBillValue);

billValue = 0.00; //default value

function validateNumber(s) {
    var rgx= /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx)
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }

   
    billValue = parseFloat(bill.value).toFixed(2)
    console.log(billValue)
}


console.log(tipBtns[0])