


function madlib()
{

    var word = [document.getElementById('adjective1').value,
                document.getElementById('adjective2').value,
                document.getElementById('verb').value,
                document.getElementById('food1').value,
                document.getElementById('noun1').value,
                document.getElementById('noun2').value,
                document.getElementById('food2').value,
                document.getElementById('adjective3').value];

    return "We are currently in an environmental crisis. " + word[0].bold() + " fish are becoming very " + word[1].bold() +
           ". The reason behind this is because they " +
           word[2].bold() + " on too many " + word[3].bold() + "." + '<br>' + " This then creates off the charts "
           + word[4].bold() + " in their once orderly " +
           word[5].bold() + ". Help us solve this crisis by feeding them " + word[6].bold() + " instead. " +
           " It will make them " + word[7].bold() + '<br>' + " and help decrease the " + word[4].bold() + " in their " +
           word[5].bold() + ".";

   




}
