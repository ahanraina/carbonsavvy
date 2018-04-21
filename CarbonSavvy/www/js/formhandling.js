function namefunc(form) {
    sessvars.myObj.name = form.name.value;
}


function nameoutput() {
    document.getElementById(nameplace).innerHTML = "Hi there, " + sessvars.myObj.name + "!";
}

function registerInfo(form) {
    sessvars.myObj.kwh = form.kwh.value;
    sessvars.myObj.zipcode = form.zipcode.value;
    sessvars.myObj.mileage = form.mileage.value;
    sessvars.myObj.miles = form.miles.value;
    for (var i = 0; i < document.getElementsByName('radio').length; i++) {
        if(document.getElementsByName('radio')[i].checked) {
            sessvars.myObj.diet = document.getElementsByName('radio')[i].value;
        }
    }
}

// Getter functions

function returnkwh() {
    return sessvars.myObj.kwh;
}

function returnzipcode() {
    return sessvars.myObj.zipcode;
}

function returnmileage() {
    return sessvars.myObj.mileage;
}

function returndiet() {
    return sessvars.myObj.diet;
}

function returnname() {
    return sessvars.myObj.name;
}

function returnmiles() {
    return sessvars.myObj.miles;
}

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=DIET FOOTPRINT FUNCTIONS=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function Diet_Footprint()
{
    var Diet = returndiet();
    var DietFootprint = 0;

    switch (Diet.dietChoice)
    {
        case 0: //Vegan
            DietFootprint = 1360.78; //1.5 Tons
            break;
        case 1: //Vegetarian
            DietFootprint = 1542.21; //1.7 Tons
            break;
        case 2: //Non-Vegetarian
            DietFootprint = 2267.96; //2.5 Tons
            break;
        default:
            DietFootprint = 0;
            break;
    }

    return DietFootprint;
}

function FinalFootprint()
{
    var FinalElecFootprint = 0;
    var ElecEmissionFactor = 496.3659508;

    FinalElecFootprint = ElecEmissionFactor * 10000; // should be returnkwh()
    return FinalElecFootprint;

    var g = 1/returnmileage();
    var GalYear = g*returnmiles();
    var Footprint_Transport = GoalYear(0.00878);
    return Footprint_Transport;

    var foot = CalcElectricFootprint() + Transportation_Footprint() + DietFootprint();
    console.log(foot);
    return foot;

}
function FinalFootprintEmbed(){
    document.getElementById("footprint").innerHTML = FinalFootprint() + "killograms of CO2 per year.";
}





