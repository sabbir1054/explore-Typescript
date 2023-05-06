interface PersonProblem {
  name: string;
  age: number;
  email: string;
}

const per1: PersonProblem = {
  name: "Sabbir Hossain",
  age: 12,
  email: "sabbir1054@gmail.com",
};
const per2: PersonProblem = {
  name: "Shakil Hossain",
  age: 12,
  email: "shakil@gmail.com",
};
const per3: PersonProblem = {
  name: "Zihad",
  age: 21,
  email: "zihad1054@gmail.com",
};

type PersonArrayType = Array<PersonProblem>;

const dataArr: PersonArrayType = [per1, per2, per3];

const getPersonData = (
  personsArr: PersonArrayType,
  email: string
): PersonProblem|null => {
      for (const person of personsArr) {
        if (person.email === email) {
          return person;
        }
      }
      return null;
};

console.log(getPersonData(dataArr, "shakil@gmail.com"));
