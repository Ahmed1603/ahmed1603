
/*

Gameplan:
(*) Calculator Window for operations to be shown along with result
() Number buttons for the calculator
()Operator buttuns (+,-, *, etc)
() '==' button
() Resent or Clear button

Javascript:
()Function that captures what was typed in the calculatorWindow
() Function that will add numbers, subtract, etc.
 */



function calculate(expression)
{
    //'expression' is a string of everything in your calculatorWindow
    //We need to EXTRACT the first number from the 'expression'
    //expression = 1+2
   // var firstNum = Number(expression.substr(0, 1)); //1 is the amount of numbers you want to capture
   // var operator = expression.substr(1,1); //captures the '+'
    //var secondNum = Number(expression.substr(2,1)); //2 tells where to start capturing, 1 tells you how many to capture

    //double digits, collaborated with Shreya


    if (expression.substr(1,1)=== '+')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1)==='-')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1)==='*')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1)==='/')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else if (expression.substr(1,1)==='^')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1,1);
        var secondNum = Number(expression.substr(2,1));
    }
    else
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2,1);
        var secondNum = Number(expression.substr(3,2));
    }

    if (operator === '+') // that means I add firstNum and secondNum
    {
        return addNums(firstNum, secondNum); //returns the result of calling 'addNums'
                                             //after sending it firstNum and secondNum
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return pow(firstNum, secondNum);
    }
    else if (operator === 'Clear')
    {
        return clear();
    }
}



function subtractNums(p1, p2)
{

    return p1-p2
}

function addNums(p1, p2)
{
    //p1 and p2 are sent to addNums ... to do this
    return p1+p2
}

function multiplyNums(p1, p2)
{

    return p1*p2
}

function divideNums(p1, p2)
{

    return p1/p2
}

function pow(p1, p2)
{

    return Math.pow(p1, p2)
}

function clear()
{

    return ''
}