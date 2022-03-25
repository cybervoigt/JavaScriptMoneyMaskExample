

/*
Based on the code of this example
  https://codepen.io/559wade/pen/LRzEjj

But with a different logic... on the key up, fill the decimal separator automatically
Example: onKeyUp1(this,3,'.')
Press 1 => 0.001
Press 2 => 0.012
Press 3 => 0.123
Press 4 => 1.234
Press 5 => 12.345

That's it! 

 */

// https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
function onlyNumbers(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return numsStr;
}

function onKeyUp1(input,decimals,separator) {
    var input_val = onlyNumbers( input.value );

//console.log(input_val);

    // don't validate empty input
    if (input_val === "") { return; }


    // meu objetivo é incluir a virgula antes dos 3 ultimos digitos
    var left_side = '';
    var right_side = '';
    var limit_cents = '';

    // padding '9'
    while (limit_cents.length < decimals) {
    //for(var i = 1; i<= decimals; i++) {
        limit_cents = limit_cents + '9';
    }

    // the cents bigger than the limit (decimals)
    if(parseInt(input_val) > parseInt(limit_cents)) {
        // decimals(cents) are in the position of the last xx digits
        const pos_of_cents = input_val.length - decimals;
        left_side = left_side + parseInt(input_val.toString().substring(0,pos_of_cents)).toString();
        right_side = input_val.toString().substring(pos_of_cents);
    }
    else
    {
        right_side = parseInt(input_val).toString();
    }

    // pad zero to left
    if(left_side == '')
    {
        left_side = "0";
    }

    // pad zeros on left...
    while(right_side.length < decimals)
    {
        right_side = "0"+right_side;
    }


    // join numbers by decimal separator
    input_val = left_side + separator + right_side;

    // send updated string to input
    input.value = input_val;
}