import Animal from "./animal.js";

export default class Serpiente extends Animal {
    constructor(...args) {
        super(...args);
    }

    Sisear(index) {
        return `document.getElementById('player${index}').play()`;
    }
}