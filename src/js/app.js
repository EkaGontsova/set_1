import { Team } from './team'; 
import { Character } from './character'; 

const team = new Team();
const character1 = new Character('Warrior');
const character2 = new Character('Mage');
const character3 = new Character('Archer');

try {
    team.add(character1);
    team.add(character2);
    team.add(character1); 
} catch (error) {
    console.error(error.message); 
}

team.addAll(character2, character3); 

console.log(team.toArray()); 