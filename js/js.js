 var obj = {

  calculate : document.getElementById('calculate');

  init: function()
  {

    obj.calculate.onclick = obj.render();
  };



  var render = function ()
  {
    var zip;

    /* Grabs the entered number */
    zip = document.getElementById('aprenZip').value;

    /* Checks if the Zip Entered is 5 digits long */
    if (zip.length > 4 && zip.length < 6) 
    {
      /* If number entered is 5 digits long then run this...*/
      function findLength()
      {
        /* Converts the object to a number */
        var removedPrefix = Number(zip);

        /* Adds 100000 */
        var added = removedPrefix + 100000;

        if
        (

        /* Section 1: Manuel Barajas */

        /* 80101 to 80997 */
           (added >= 180001 && added <= 180047)           || (added >= 180101 && added <= 180166)           || (added >= 180201 && added <= 180329)           || (added >= 180401 && added <= 180553)           || (added >= 180601 && added <= 180654)           || (added >= 180701 && added <= 180705)          || (added >= 180723 && added <= 180723)          || (added >= 180740 && added <= 180740)          || (added >= 180742 && added <= 180742)          || (added >= 180750 && added <= 180750)          || (added >= 180757 && added <= 180757)          || (added >= 180801 && added <= 180866)          || (added >= 180901 && added <= 180997)
        )
        {
          printProctor1()
        }

        else if
        (
        /* Section 2: J. Brian Payne */

        /* 17201 to 17415 */
           (added >= 180001 && added <= 180047)           || (added >= 117201 && added <= 117272)           || (added >= 117301 && added <= 117375) 
        || (added >= 117401 && added <= 117415)           /* 20000 to 21869 */          || (added >= 120000 && added <= 121499) 
        || (added >= 121600 && added <= 121799)          || (added >= 121837 && added <= 121869)
        /* 22000 to 25499 */          || (added >= 122000 && added <= 122806)          || (added >= 125400 && added <= 125499)
        )
        {
          alert('Class Group: #2, J. Brian Payne');
        }

        else if
        (

        /* Section 2: J. Brian Payne */

        /* 17201 to 17415 */ (added >= 180001 && added <= 180047)         || (added >= 117201 && added <= 117272)           || (added >= 117301 && added <= 117375)           || (added >= 117401 && added <= 117415) 

        /* 20000 to 21869 */
        || (added >= 120000 && added <= 121499)           || (added >= 121600 && added <= 121799)          || (added >= 121837 && added <= 121869)

        /* 22000 to 25499 */
        || (added >= 122000 && added <= 122806)          || (added >= 125400 && added <= 125499)
        )
        {
          alert('Class Group: #2, J. Brian Payne');
        }

        else
        {
          alert('Independant Proctor')
        }
      }

      findLength();
    }

    else 
    {
      /* If number entered is NOT 5 digits long then run this...*/
      alert('Not a valid 5 digit Zip Code');
    }

  };

  function printProctor1()
  {
    document.getElementById("proctor").innerHTML = "Paragraph changed!";
  };
};