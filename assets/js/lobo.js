import Animal from "./animal.js";

export default class Lobo extends Animal {
    constructor(...args) {
        super(...args);
    }

    Aullar(index) {
        return `document.getElementById('player${index}').play()`;
    }
}