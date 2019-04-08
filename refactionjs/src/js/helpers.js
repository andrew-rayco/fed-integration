// Return correct people based on selection id

export const getSelectedPeople = (people, id) => {
  let chosenPeople;
  switch (id) {
    case 'male':
    case 'female':
      chosenPeople = people.filter(person => person.gender === id);
      return chosenPeople;
      break;
    case 'over30':
    case 'under30':
      chosenPeople = people.filter(person => {
        if (id === 'over30') {
          return person.age >= 30;
        } else {
          return person.age < 30;
        };
      })
      return chosenPeople;
      break;
    default:
      chosenPeople = people;
      return chosenPeople;
  };
  return chosenPeople;
};
