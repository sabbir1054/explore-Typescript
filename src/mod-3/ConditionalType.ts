// it means a type is dependent in another type
type a1 = string;

type a2 = a1 extends string ? string : null;

// nested conditional type

type a3 = undefined;
type a4 = number;

type nested = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;


type Friend = "Rasel" | "Robin" | "Roky";

type RemoveFriend<T> = T extends "Robin" ? never : T

type CurrentFriend = RemoveFriend<Friend>;

// we can also use this syntax
/* 
type RemoveFriend<T, K> = T extends K ? never : T;

type CurrentFriend = RemoveFriend<Friend, "Rasel">; */