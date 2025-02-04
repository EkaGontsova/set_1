import { Team } from './team'; 
import { Character } from './character'; 

const team = new Team();
const character1 = new Character('Warrior');
const character2 = new Character('Mage');
const character3 = new Character('Archer');

try {
    team.add(character1);
    team.add(character2);
} catch (error) {
    console.error(error.message); 
}

try {
    team.addAll(character2, character3); 
} catch (error) {
    console.error(error.message);
}

console.log(team.toArray()); 