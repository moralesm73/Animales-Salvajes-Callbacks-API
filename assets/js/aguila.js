import Animal from "./animal.js";

export default class Aguila extends Animal {
    constructor(...args) {
        super(...args);
    }

    Chillar(index) {
        return `document.getElementById('player${index}').play()`;
    }
}