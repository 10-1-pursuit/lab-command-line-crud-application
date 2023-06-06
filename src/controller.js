const inform = console.log
//const  = reuire("")
/** 
C reate
R ead 
U pdate 
D elete 
*/

//READING ALL THE DATA IN A COLLECTION 
function create (style, purchases) {
    const purchases = {
      name: ,
    //   id: nanoid(4),
      points: animalPoints[],
    };
.push(newAnimal);
    return;
}

function index(arrayO) {
    return arrayO.map((eachAnimal) => eachAnimal.id + " " + eachAnimal.name).join("\n");
}


function show(, animalId){
    const animalToFind = .find((animal) => animal.id === animalId);
    console.log("animalarray",)
    console.log("find",animalToFind)
    console.log("animal",animal)
    //if (animalToFind) {
    return animalToFind.id + " " + animalToFind.name + " " + animalToFind.points + " points";
// } else {
//     return "Animal not found";
//   }
}



function destroy(, animalId) {
    const index = .findIndex(() => .id === Id);
    if (index > -1) {
      .splice(index, 1);
      inform("Animal successfully removed from collection");
      return animals;
    } else {
      inform("Animal not found. No action taken");
      return animals;
    }
}
  

function edit(animals, animalId, updatedAnimal) {
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
        animals[index].id = animalId;
        animals[index].name = updatedAnimal;
        animals[index].points = animalPoints[updatedAnimal];
        inform("successfully updated");
        return ;
    } else {
        inform("not found. No action taken");
        return ;
    }
}



module.exports = {index, show, create, edit, destroy}