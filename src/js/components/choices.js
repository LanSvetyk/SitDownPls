const selectShoices = () => {
  const element = document.querySelector(".form__select");
  const choices = new Choices(element, {
    position: "bottom",
    placeholder: false,
    placeholderValue: false,
    searchPlaceholderValue: false,
    searchEnabled: false,
    itemSelectText: "",
  });
};
selectShoices();

const selectFirstShoices = () => {
  const selectFirst = document.querySelector(".js-choice");
  console.log(selectFirst);
  const choicesFirst = new Choices(selectFirst, {
    position: "bottom",
    placeholder: false,
    placeholderValue: false,
    searchPlaceholderValue: false,
    searchEnabled: false,
    itemSelectText: "",
  });
};
selectFirstShoices();
