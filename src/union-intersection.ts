/*
 type NoobDeveloper = {
    name: string
}

type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number,
}

// /* union type

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Sabbir",
    expertise: "JS",
    experience: 5
}; 

*/

/* 
type NoobDeveloper = {
    name: string
}
// intersection &
type JuniorDeveloper =NoobDeveloper& {
    
    expertise: string,
    experience: number,
}

// /* union type 

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Sabbir",
    expertise: "JS",
    experience: 5
}; 

*/

type NoobDeveloper = {
  name: string;
};
// intersection &
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipSkill: boolean;
};

// /* union type

const newDeveloper: NextLevelDeveloper = {
  name: "Sabbir",
  expertise: "JS",
  experience: 5,
  leadershipSkill: true,
};

/* here has enum but i am not write here  enum is not best practice*/
/* 
enum Level {
  junior="Junior",//default it was 0
  mid="mid",//1
  senior="senior",//2
}
 */


