const input = document.querySelector('input');
const output = document.getElementById('decimalOutput');

input.addEventListener('change', toBinary);

function toBinary(e){
    let number = e.target.value;
    let index = 0;
    let exponent = number.length-1;
    let finalSum = 0;

    // check if there is anyting other than zeroes and ones in the input
    let re = /^(?=.*?[2-9])\d+(\.\d+)?$/;
    let matches = re.exec(number);

    if (matches != null){
        document.getElementById('notValidWarning').style.display="block";
    }
    else{
        document.getElementById('notValidWarning').style.display="none";
        for (index=0; index<number.length; index++){
            finalSum += parseInt(number[index]) * (Math.pow(2,exponent));
            exponent--;   
        }
        output.textContent = finalSum.toString();
    }
}