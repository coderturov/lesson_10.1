'use strict';

class Options {
    constructor(height, width, backgroundColor, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.backgroundColor = backgroundColor;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        
    }
    method () {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = "какой то текст";
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.backgroundColor}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
       
    }
}

const jane = new Options(100, 1000, "red", 43, "center");
jane.method();


