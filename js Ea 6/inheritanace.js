class Preant{
     constructor(){
          this.fathername = ' Schwerznegger';
     }
}

class Chaild extends Preant{
     constructor(name){
          super();
     this.name = name ;
     }
getullname(){
     return this.name +" "+ this.fathername;
}
     
}
const baby = new Chaild("Arnold");
const baby2 = new Chaild("toma");
console.log(baby.getullname());
console.log(baby2.getullname());
const name = "saidee hasan web designear";
console.log(name)