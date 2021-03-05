interface Animal{
    name: string;
    speak: () => string;
  
  }
  
  class Dog implements Animal{
     name= "Dog"
     constructor(str: string){
       this.name = str
       
     }
     speak = ()=>{
       return "Gheu Gheu"
     }
  }
  class Cat implements Animal{
     name = "Cat";
      constructor(str: string){
       this.name = str
     }
     speak = ()=>{
       return "meu meu"
     }
  }
  
  //Factory
  
  class GiveMeAnimalBaseOnLogic{
      static give(num: number){
          if(num == 1)
              return new Dog("Dogy")
          else 
              return new Cat("nuni")
  
      }
  
  }
    let anAnimal :Animal = GiveMeAnimalBaseOnLogic.give(2);
  
  console.log(anAnimal.speak() ) 
    let anAnimal_ :Animal = GiveMeAnimalBaseOnLogic.give(1);
  console.log(anAnimal_.speak() ) 
  