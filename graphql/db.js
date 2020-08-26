export let peoples = [
  { id: 1, name: "kh", age: 20, gender: "male" },
  { id: 2, name: "kkkh", age: 200, gender: "female" },
];

export const getPeople = () => peoples;

export const getById = (id) => {
  const filteredPeople = peoples.filter((person) => person.id === id);
  return filteredPeople[0];
};

export const deletePeople = (id) => {
  const cleanedPeoples = peoples.filter((person) => person.id !== id);
  if (peoples.length > cleanedPeoples.length) {
    peoples = cleanedPeoples;
    return true;
  } else {
    return false;
  }
};

export const addPeople = (name, age) => {
  const newPeople = {
    id: `${peoples.length + 1}`,
    name,
    age,
  };
  peoples.push(newPeople);
  return newPeople;
};
