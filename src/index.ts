const car = {
  wheels: 4,
  brand: "Toyota",
  color: "red",
  comsumptionType: "gas",
  transmission: "manual"
};

const carProxy = new Proxy(car, {
  get: (obj, prop) => {
    // Proxy valitation
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    // Proxy valitation
    if (prop === "wheels" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for wheels.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    }
    obj[prop] = value;
    return true;
  }
});

const renderValues = () => {
  document.getElementsByClassName("wheels-value")[0].innerHTML = car.wheels;
  document.getElementsByClassName("brand-value")[0].innerHTML = car.brand;
  document.getElementsByClassName("color-value")[0].innerHTML = car.color;
  document.getElementsByClassName("comsumption-type-value")[0].innerHTML =
    car.comsumptionType;
  document.getElementsByClassName("transmission-value")[0].innerHTML =
    car.transmission;
};

renderValues();

const submitUpdates = () => {
  const wheelsField = document.querySelector(
    "input[name=updateWheels]"
  ) as HTMLFormElement;
  const brandField = document.querySelector(
    "input[name=updateBrand]"
  ) as HTMLFormElement;
  const colorField = document.querySelector(
    "input[name=updateColor]"
  ) as HTMLFormElement;
  const consumptionTypeField = document.querySelector(
    "input[name=updateComsumption]"
  ) as HTMLFormElement;
  const transmissionField = document.querySelector(
    "input[name=updateTransmission]"
  ) as HTMLFormElement;

  carProxy.wheels = !wheelsField.value.length
    ? car.wheels
    : parseFloat(wheelsField.value);
  carProxy.brand = !brandField.value.length ? car.brand : brandField.value;
  carProxy.color = !colorField.value.length ? car.color : colorField.value;
  carProxy.comsumptionType = !consumptionTypeField.value.length
    ? car.comsumptionType
    : consumptionTypeField.value;
  carProxy.transmission = !transmissionField.value.length
    ? car.transmission
    : transmissionField.value;
  renderValues();
};

document.getElementById("submitUpdates").onclick = () => submitUpdates();
