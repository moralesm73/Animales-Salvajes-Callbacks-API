import Animal from "./animal.js";

export default class Oso extends Animal {
    constructor(...args) {
        super(...args);
    }

    Gruñir(index) {
        return `document.getElementById('player${index}').play()`;
    }
}