'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.creates = function(){
    if(this.selector.startsWith('.')){
        let div = document.createElement('div');
        document.body.prepend(div);
        div.textContent = ' - если передана строка \'.block\', то функция конструктор создает элемент с class = "block"';
        div.classList.add(this.selector.slice(1, this.selector.length));
        div.style.cssText = `
        height : ${this.height}px;
        width : ${this.width}px;
        background : ${this.bg};
        font-size : ${this.fontSize}px;`;
    }
    if(this.selector.startsWith('#')){
        let p = document.createElement('p');
        document.body.append(p);
        p.textContent = '- если передана строка \'#best\', то функция конструктор создает элемент с id = "best"';
        p.id = this.selector.slice(1, this.selector.length);
        p.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;
    }
};

let div = new DomElement('.blok', '60', '850', 'coral', '22');
let p = new DomElement('#dest', '200', '700', 'lime', '28');


div.creates();
p.creates();


