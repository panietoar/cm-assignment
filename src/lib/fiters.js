import Vue from "vue";

Vue.filter("engUnits", value => {
  if (value > 1000) {
    value /= 1000;
   return `${value.toString()} k`;
  }
  return value.toString();
});

Vue.filter("cookingTime", value => {
  let hours, minutes;

  if (value > 60) {
    hours = Math.floor(value / 60);
    minutes = value % 60;
   return `${hours.toString()} hr ${minutes} min`;
  }
  return `${ value.toString() } min`;
});

Vue.filter("caloriesConverter", (value, unit) => {
  let total;

  if (unit === 'kilojoules') {
    total = value * 4,184;

    return `${total.toLocaleString()} kJ`;
  }
  return `${ value.toString() } Calories`;
});