



function checkAnswers()
{

    var feedback=[];
    var score=0;


    //answer 1
    var q1answer = document.quiz.a1.value.toLowerCase();
    if(q1answer === 'a watermelon')

    {
       score = score + 1;

       feedback.push("Question 1 is corrrrect!!!");
    }
    else
    {
        feedback.push("WRONG! Question 1 was a watermelon");
    }


    //answer 2
    var q2answer = document.quiz.a2.value.toLowerCase();
    if(q2answer === 'yes')
    {
        score++;

        feedback.push("Question 2 is correct in a technical sense");
    }
    else
    {
        feedback.push("WRONG! Question 2 was yes");
    }

    //answer 3

    if (document.quiz.a3.value === 'Vegetable Pizza')
    {
        score++;

        feedback.push("Question 3 is corrrrect!!!");
    }
    else
    {
        feedback.push("WRONG! Question 3 was Vegetable Pizza");
    }

    //answer 4

    if(document.quiz.a4.value === 'Doge')
    {
        score++;
        feedback.push("Question 4 is corrrrect!!!");
    }
    else
    {
        feedback.push("WRONG! Question 4 was Doge");
    }

    //answer 5

    if (document.quiz.a5A.checked === true && document.quiz.a5B.checked === true && document.quiz.a5C.checked === true && document.quiz.a5D.checked === true)
    {
        score++;
        feedback.push("Question 5 is corrrrect!!!");
    }
    else
    {
        feedback.push("WRONG! Question 5 was all of the seasons");
    }

    //answer 6

    if (document.quiz.a6A.checked === true && document.quiz.a6B.checked === true && document.quiz.a6C.checked === true && document.quiz.a6D.checked === true)
    {
        score++;
        feedback.push("Question 6 is corrrrect!!!");
    }
    else
    {
        feedback.push("WRONG! Question 6 was all of the seasons");
    }

    return feedback[0] + '<br>' + feedback[1] + '<br>' + feedback[2] + '<br>' + feedback[3] + '<br>' + feedback[4] + '<br>' + feedback[5] + '<br>' + "You scored:" + score;



}



