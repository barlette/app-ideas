const input = document.querySelector('input');
const output = document.getElementById('centsOutput');

input.addEventListener('change', toCents);

function toCents(e){

    let dollars = 0.0;
    
    try {
        dollars = 100*parseFloat(e.target.value);
    }
    catch(err){
        document.getElementById('notValidWarning').style.display="block";
        
    }

    //dollars = Number(Math.round(dollars+'e2')+'e-2');

    const penny     = 1;
    const nickel    = 5;
    const dime      = 10;
    const quarter   = 25;

    let nPenny      = 0;
    let nNickel     = 0;
    let nDime       = 0;
    let nQuarter    = 0;

    nQuarter = Math.floor(dollars/quarter);
    dollars = dollars % quarter;

    nDime = Math.floor(dollars/dime);
    dollars = dollars % dime;
    
    nNickel = Math.floor(dollars/nickel);
    dollars = dollars % nickel;

    nPenny = Math.floor(dollars/penny);
    dollars = dollars % penny;


    let totalCoins = nPenny + nQuarter + nNickel + nDime;
    let outputText = "The total number of coins is " + totalCoins;
    if (totalCoins > 0){
        outputText = outputText + ": ";
    }
    let before = false;

    if (nQuarter != 0){
        outputText = outputText + nQuarter + " quarter";
        if(nQuarter > 1){
            outputText = outputText + "s";
        }
        before = true;
    }
    if (nDime != 0){
        if (before){
            outputText = outputText + ", ";
        }
        outputText = outputText + nDime + " dime";
        if(nDime > 1){
            outputText = outputText + "s";
        }
        before = true;
    }
    if (nNickel != 0){
        if (before){
            outputText = outputText + ", ";
        }
        outputText = outputText + nNickel + " nickel";
        if(nNickel > 1){
            outputText = outputText + "s";
        }
        before = true;
    }
    if (nPenny != 0){
        if (before){
            outputText = outputText + ", ";
        }
        outputText = outputText + nPenny + " penn";
        if(nPenny > 1){
            outputText = outputText + "ies";
        }
        else{
            outputText = outputText + "y";
        }
        before = true;
    }
    outputText = outputText + ".";
    console.log(outputText);

    output.textContent = outputText;

}