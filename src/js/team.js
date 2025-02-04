export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Этот персонаж уже добавлен в команду.');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            try {
                this.add(character); 
            } catch (error) {
                console.error(error.message);
            }
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}