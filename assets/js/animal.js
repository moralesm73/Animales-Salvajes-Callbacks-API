export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre (){
        return this._nombre;
    }

    get Edad(){
        return this._edad;
    }

    get Img(){
        return this._img;
    }

    get Comentarios(){
        return this._comentarios;
    }

    set Comentarios(value){
        this._comentarios = value;
    }

    get Sonido(){
        return this._sonido;
    }
}