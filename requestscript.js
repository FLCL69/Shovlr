/*
    JS script to submit requests to the database...
    ...uses javascript to "ajaxify" the html content on request.html (i.e to pass input data from the form to the database)
*/

$(document).ready( function(e)
{
    $('#submitButton').click( function() 
    {  
        var LName = $('#LName').val();
        var FName = $('#FName').val();
        var Phone = $('#Phone').val();
        var AreaSize = $('#AreaSize').val();
        var Street = $('#Street').val();
        var City = $('#City').val();
        var Zip = $('#Zip').val();
        
        var MissingData = "";

        if (FName == "") {MissingData = MissingData.concat("First Name\n");}
        if (LName == "") {MissingData = MissingData.concat("Last Name\n");}
        if (Phone == "") {MissingData = MissingData.concat("Phone\n");}
        if (AreaSize == "") {MissingData = MissingData.concat("Area Size\n");}
        if (Street == "") {MissingData = MissingData.concat("Street\n");}
        if (City == "choose city") {MissingData = MissingData.concat("City\n");}
        if (Zip == "") {MissingData = MissingData.concat("Zip\n");}

        if(MissingData != ""){
            alert("Please fill in the following to contiune: \n\n" + MissingData);
            return false;
        } 
        
    });

    $.ajax
    (
        {
            type: 'POST',
            data: {LName: LName, FName: FName, Phone: Phone, AreaSize: AreaSize, Street: Street, City: City, Zip: Zip},
            url : "submitquery.php",
            success: function(result)
            {
                //$("#result").html(info);  
                alert(result);
            }

        }
    );


});

