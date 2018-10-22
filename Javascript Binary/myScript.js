
//B Level Binary Project

function tenToSmall(num, base) //function will convert a base-10 number to a smaller base
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of 'base'
    num = document.toBinary.input.value; //num to convert
    base = 2; //destination base
    smallNum = "";  //store remainders here

    while (num > 0) //continue looping while num isn't 0
    {
        smallNum = num%base + smallNum; //(% means remainder). Will return remainder
        //setup num for the next iteration of the loop
        num = Math.floor(num/base); //floor makes remainder go away
        alert(smallNum); //alert makes stuff pop up. For ex. LocalHost blah blah blah says: ...
        alert(num);
    }

    return smallNum
}

function smallToTen(num, base) //convert a small-base num to base-10
{
    num = document.toBase.input.value; //13
    base = 2; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, the n counts the number of characters in the string

    while (numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1... 01/10 = 0... 1/1 = 1
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        //currentDigit*2^3 .... currentDigit*2^2... currentDigit*2^1 etc.
        num = num%denominator; //reduces num for next iteration...
        //1101 -> 101 -> 01 -> 1 -> 0
        numLength--; //decreases the numLength value by 1 ... eventually it will hit zero
    }
    return tenNum;
}




//A Level Binary Project

function smallToTen(num, base) //convert a small-base num to base-10
{
    num = document.chosenOne.input.value; //13
    base = 2; //base of number to convert to base 10
    tenNum = 0; //stores number to be output at the end
    numLength = num.toString().length; //converts num to a STRING, the n counts the number of characters in the string

    while (numLength > 0)
    {
        var denominator = Math.pow(10, (numLength-1)); //gets denominator of fraction
        //for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(num/denominator); //captures a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1... 101/100 = 1... 01/10 = 0... 1/1 = 1
        tenNum = tenNum + currentDigit*Math.pow(base,numLength-1);
        //currentDigit*2^3 .... currentDigit*2^2... currentDigit*2^1 etc.
        num = num%denominator; //reduces num for next iteration...
        //1101 -> 101 -> 01 -> 1 -> 0
        numLength--; //decreases the numLength value by 1 ... eventually it will hit zero
    }
    return tenNum;
}

function tenToSmall(num, base) //function will convert a base-10 number to a smaller base
{
    //the tenToSmall function is expecting a number (num) in base 10
    //it will convert the number (num) to the value of 'base'
    num = document.baseType.input.value; //num to convert
    base = 2; //destination base
    smallNum = "";  //store remainders here

    while (num > 0) //continue looping while num isn't 0
    {
        smallNum = num%base + smallNum; //(% means remainder). Will return remainder
        //setup num for the next iteration of the loop
        num = Math.floor(num/base); //floor makes remainder go away
        alert(smallNum); //alert makes stuff pop up. For ex. LocalHost blah blah blah says: ...
        alert(num);
    }

    return smallNum
}

function wantedBase ()