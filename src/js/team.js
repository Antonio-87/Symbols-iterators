import Characters from './characters';

export default class Team {
    constructor() {
        this.enemyCharacters = [];
        this.enemyCharacters.push(new Characters('Лучник', 'Bowman'));
        this.enemyCharacters.push(new Characters('Демон', 'Daemon'));
        this.enemyCharacters.push(new Characters('Маг', 'Magician'));
    }

    [Symbol.iterator]() {
        let count = 0;
        return {
            enemys: this.enemyCharacters,
            next() {
                if (count < this.enemys.length) {
                    return {
                        done: false,
                        // eslint-disable-next-line no-plusplus
                        value: this.enemys[count++],
                    };
                }
                return { done: true };
            },
        };
    }
}
