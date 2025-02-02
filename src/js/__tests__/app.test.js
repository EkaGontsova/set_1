import { Team } from '../team';
import { Character } from '../character';

describe('Team', () => {
    let team;
    let character1;
    let character2;
    let character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Warrior');
        character2 = new Character('Mage');
        character3 = new Character('Archer');
    });

    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('should throw error when adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Этот персонаж уже добавлен в команду.');
    });

    test('should add multiple characters at once', () => {
        team.add(character1);
        team.addAll(character2, character3);
        expect(team.toArray()).toContain(character2);
        expect(team.toArray()).toContain(character3);
    });

    test('should not add duplicate characters using addAll', () => {
        team.add(character1);
        team.addAll(character1, character2);
        expect(team.toArray()).toHaveLength(2); 
    });

    test('should convert members to an array', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character('Warrior');
    });

    test('should create a character with a name', () => {
        expect(character.name).toBe('Warrior');
    });

    test('should return the name when toString is called', () => {
        expect(character.toString()).toBe('Warrior');
    });
});

});