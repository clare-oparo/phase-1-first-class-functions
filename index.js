 const fruit = "bananas"
 function receivesAFunction(fruit){
    fruit();

 }

 function returnsANamedFunction(){
    return function zombieMustWatch() {
        console.log("if you enjoy zombie movies, you're in for a treat");
      };
 }

 function returnsAnAnonymousFunction(){
    return () => console.log("this is an anonymous function");
 }