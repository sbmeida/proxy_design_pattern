var car = {
    wheels: 4,
    brand: "Toyota",
    color: "red",
    comsumptionType: "gas",
    transmission: "manual"
};
var carProxy = new Proxy(car, {
    get: function (obj, prop) {
        // Proxy validation
        return !obj[prop] ? console.log("this property doesn't seem to exist on the target object") : console.log("The value of " + prop + " is " + obj[prop]);
    },
    set: function (obj, prop, value) {
        // Proxy validation
        console.log("Changed " + prop + " from " + obj[prop] + " to " + value);
        obj[prop] = value;
        return true;
    }
});
var renderLabelValues = function () {
    var wheelsLabel = document.getElementsByClassName("wheels-value")[0];
    var brandLabel = document.getElementsByClassName("brand-value")[0];
    var colorLabel = document.getElementsByClassName("color-value")[0];
    var consumptionTypeLabel = document.getElementsByClassName("comsumption-type-value")[0];
    var transmissionTypeLabel = document.getElementsByClassName("transmission-value")[0];
    wheelsLabel.innerHTML = car.wheels;
    brandLabel.innerHTML = car.brand;
    colorLabel.innerHTML = car.color;
    consumptionTypeLabel.innerHTML = car.comsumptionType;
    transmissionTypeLabel.innerHTML = car.transmission;
};
renderLabelValues();
var submitUpdates = function () {
    var wheelsField = document.querySelector("input[name=updateWheels]");
    var brandField = document.querySelector("input[name=updateBrand]");
    var colorField = document.querySelector("input[name=updateColor]");
    var consumptionTypeField = document.querySelector("input[name=updateComsumption]");
    var transmissionField = document.querySelector("input[name=updateTransmission]");
    var wheelsFieldLength = wheelsField.value.length;
    var brandFieldLength = brandField.value.length;
    var colorFieldLength = colorField.value.length;
    var consumptionTypeFieldLength = consumptionTypeField.value.length;
    var transmissionFieldLength = transmissionField.value.length;
    console.log(carProxy.test); // Expect failure
    console.log(carProxy.color); // Expect value to be red
    carProxy.wheels = !wheelsFieldLength ? car.wheels : parseFloat(wheelsField.value);
    carProxy.brand = !brandFieldLength ? car.brand : brandField.value;
    carProxy.color = !colorFieldLength ? car.color : colorField.value;
    carProxy.comsumptionType = !consumptionTypeFieldLength ? car.comsumptionType : consumptionTypeField.value;
    carProxy.transmission = !transmissionFieldLength ? car.transmission : transmissionField.value;
    renderLabelValues();
};
document.getElementById("submitUpdates").onclick = function () { return submitUpdates(); };
