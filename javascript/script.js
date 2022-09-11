"use strict";

let result = document.querySelector("#result");

const calculateTip = () => {
  let bill = Number(document.querySelector("#billAmount").value);
  let numberOfPeople = Number(document.querySelector("#numberOfPeople").value);
  let tipPercentage = Number(document.querySelector("#tipPercentage").value);

  let tip = bill * (tipPercentage / 100);
  let billTotal = bill + tip;
  let tipPerPerson = tip / numberOfPeople;

  document.querySelector("#tipPercentageText").innerHTML = `${tipPercentage}%`;
  document.querySelector("#numberOfPeopleText").innerHTML = `${numberOfPeople}`;

  result.innerHTML =
    `
      <h5 class="my-4 flex justify-between">
        <span>Tip Amount</span>
        <span class="text-lg">$ ${tip.toFixed(2)}</span>
      </h5>
      <h5 class="my-4 flex justify-between">
        <span>Total</span>
        <span class="text-lg">$ ${billTotal.toFixed(2)}</span>
      </h5>
      <h5 class="my-4 flex justify-between">
        <span>Each person pays</span>
        <span class="text-lg">$ ${tipPerPerson.toFixed(2)}</span>
      </h5>
    `
};