import Animal from "./animal.js";

export default class Leon extends Animal {
    constructor(...args) {
        super(...args);
    }

    Rugir(index) {
        return `document.getElementById('player${index}').play()`;
    }
}