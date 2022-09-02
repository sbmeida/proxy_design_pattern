const car = {
  wheels: 4,
  brand: "Toyota",
  color: "red",
  comsumptionType: "gas",
  transmission: "manual"
};

const carProxy = new Proxy(car, {
  get: (obj, prop) => {
    // Proxy validation
    return !obj[prop] ? console.log(`this property doesn't seem to exist on the target object`) : console.log(`The value of ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    // Proxy validation
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  }
});

const renderLabelValues = () => {
  let wheelsLabel = document.getElementsByClassName("wheels-value")[0] as HTMLElement;
  let brandLabel = document.getElementsByClassName("brand-value")[0] as HTMLElement;
  let colorLabel = document.getElementsByClassName("color-value")[0] as HTMLElement;
  let consumptionTypeLabel = document.getElementsByClassName("comsumption-type-value")[0] as HTMLElement;
  let transmissionTypeLabel = document.getElementsByClassName("transmission-value")[0] as HTMLElement;

  wheelsLabel.innerHTML = car.wheels;
  brandLabel.innerHTML = car.brand;
  colorLabel.innerHTML = car.color;
  consumptionTypeLabel.innerHTML = car.comsumptionType;
  transmissionTypeLabel.innerHTML = car.transmission;
};

renderLabelValues();

const submitUpdates = () => {
  const wheelsField = document.querySelector("input[name=updateWheels]") as HTMLFormElement;
  const brandField = document.querySelector("input[name=updateBrand]") as HTMLFormElement;
  const colorField = document.querySelector("input[name=updateColor]") as HTMLFormElement;
  const consumptionTypeField = document.querySelector("input[name=updateComsumption]") as HTMLFormElement;
  const transmissionField = document.querySelector("input[name=updateTransmission]") as HTMLFormElement;
  const wheelsFieldLength = wheelsField.value.length;
  const brandFieldLength = brandField.value.length;
  const colorFieldLength = colorField.value.length;
  const consumptionTypeFieldLength = consumptionTypeField.value.length;
  const transmissionFieldLength = transmissionField.value.length;

  console.log(carProxy.test); // Expect failure
  console.log(carProxy.color); // Expect value to be red

  carProxy.wheels = !wheelsFieldLength ? car.wheels : parseFloat(wheelsField.value);
  carProxy.brand = !brandFieldLength ? car.brand : brandField.value;
  carProxy.color = !colorFieldLength ? car.color : colorField.value;
  carProxy.comsumptionType = !consumptionTypeFieldLength ? car.comsumptionType : consumptionTypeField.value;
  carProxy.transmission = !transmissionFieldLength ? car.transmission : transmissionField.value;
  renderLabelValues();
};

document.getElementById("submitUpdates").onclick = () => submitUpdates();
