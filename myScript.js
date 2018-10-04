


function assignGrade()

{
    //capture a score from HTML
    var score = Number (document.project1.num1.value);  //fully qualified name

    if (score >= 90) //that's an A
    {
        return 'A';
    }
    else if (score >= 80)
    {
        return 'B';
    }
    else if (score >= 70)
    {
        return 'C';
    }
    else if (score >= 60)
    {
        return 'D';
    }
    else if (score >= 0)
    {
        return 'F';
    }

}



function temperatureBug()

{
    //capture a score from HTML
    var temp = Number (document.project2.num1.value);  //fully qualified name
    var img = document.getElementById("weather"); //collaborated with Shreya

    if (temp >= 115)
    {
        img.src = "image/lava.png";
        return 'Lava. Lava everywhere.'
    }
    else if (temp >= 75)
    {
        img.src = "image/summer.png";
        return 'Summer';
    }
    else if (temp >= 55)
    {
        img.src = "image/fall.jpg";
        return 'August';
    }
    else if (temp >=50)
    {
        img.src = "image/spring.jpg";
        return 'Spring';
    }
    else if (temp >= 20)
    {
        img.src = "image/winter.jpg";
        return 'Winter';
    }
    else if (temp >= -100)
    {
        img.src = "image/rip.jpg";
        return 'RIP. Good luck.'
    }


}


function calorieCounter()
{
    var exercise = document.project3.exercise.value.toLowerCase();
    var time = document.project3.time.value.toLowerCase();

//CALORIES!!!

    if (exercise == 'running' && time == '60 minutes')
    {
        return '498 calories';
    }
    else if (exercise == 'running' && time == '30 minutes')
        {
            return '249 calories';
        }


    if (exercise == 'jogging' && time == '60 minutes')
    {
        return '360 calories';
    }
    else if (exercise == 'jogging' && time == '30 minutes')
        {
            return '180 calories';
        }

    if (exercise == 'swimming' && time == '60 minutes')
    {
        return '200 calories';
    }
    else if (exercise == 'swimming' && time == '30 minutes')
        {
            return '100 calories';
        }

   if (exercise == 'jumping jacks' && time == '60 minutes')
   {
        return '100 calories';
   }
   else if (exercise == 'jumping jacks' && time == '30 minutes')
        {
            return '50 calories';
        }

}

//code taken from w3schools + collaborated with my dad