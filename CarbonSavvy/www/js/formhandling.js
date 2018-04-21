function namefunc(form) {
    console.log(form.name.value);
    sessionStorage.setItem("name", form.name.value);
    console.log(sessionStorage.name);
}


function nameoutput() {
    document.getElementById(nameplace).innerHTML = "Hi there, " + sessionStorage.name + "!";
}

function registerInfo(form) {
    sessionStorage.setItem("kwh", form.kwh.value);
    sessionStorage.setItem("zipcode", form.zipcode.value);
    sessionStorage.setItem("mileage", form.mileage.value);
    sessionStorage.setItem("miles", form.miles.value);
    for (var i = 0; i < document.getElementsByName('radio').length; i++) {
        if(document.getElementsByName('radio')[i].checked) {
            sessionStorage.setItem("diet", document.getElementsByName('radio')[i].value);
        }
    }
    console.log(sessionStorage.diet);
}

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=DIET FOOTPRINT FUNCTIONS=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function Diet_Footprint(dietChoice)
{
    switch (dietChoice)
    {
        case "vegan": //Vegan
            DietFootprint = 1360.78; //1.5 Tons
            break;
        case "vegetarian": //Vegetarian
            DietFootprint = 1542.21; //1.7 Tons
            break;
        case "nonveg": //Non-Vegetarian
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
    FinalElecFootprint = ElecEmissionFactor * sessionStorage.kwh;
    var foot = FinalElecFootprint + Transportation_Footprint(sessionStorage.mileage, sessionStorage.miles) + Diet_Footprint(sessionStorage.diet);
    console.log(foot);
    return foot;
}

function FinalFootprintEmbed(){
    document.getElementById("footprint").innerHTML = FinalFootprint() + " killograms of CO2 per year.";
}

/* ------------ transportation.js ---------------- */
var gasmileage = 0;
var miles_per_year = 0;

function Transportation_Footprint(gasmileage, miles_per_year) {
	var g = 1/gasmileage;
	var GalYear = g*miles_per_year;
	var Footprint_Transport = GalYear;
	return Footprint_Transport;

}

function CalcElectricFootprint( coalFoot,  natGasFoot,  hydElecFoot,  oilFoot) //Final Equation for electricity carbon footprint
{
    var FinalElecFootprint = 0;
    var TotalElecFootprint = coalFoot + natGasFoot + hydElecFoot + oilFoot;

    FinalElecFootprint = TotalElecFootprint;
    return FinalElecFootprint;
}

function CalcCoalFootprint(coalkWh) //Convert Coal KiloWatt Hours into Carbon Data
{
	var coalOutput = coalkWh * 1945.00464 * 0.2552;

    return coalOutput;
}
function CalcNatGasFootPrint(natGaskWh) //Convert Natural Gas KiloWatt Hours into Carbon Data
{
     var natGasOutput = natGaskWh * 0.003715182 * 0.2001;

    return natGasOutput;
}
function CalcHydElecFootPrint(hydEleckWh) //Convert Hydroelectricity KiloWatt Hours into Carbon Data
{
      var hydElecOutput = hydEleckWh * 0.000011 * 0.0005;

    return hydElecOutput;
}
function CalcOilFootprint(oilkWh) //Convert Oil KiloWatt Hours into Carbon Data
{
      var oilOutput = oilkWh * 0.0026 * 0.008759688;

    return oilOutput;
}

var PrafulsLoveForTya = true;
