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
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;


    }
    if(this.selector.startsWith('#')){
        let p = document.createElement('p');
        document.body.append(p);
        p.textContent = '- если передана строка \'#best\', то функция конструктор создает элемент с id = "best"';
        p.id = this.selector.slice(1, this.selector.length);
        p.style.height = this.height;
        p.style.width = this.width;
        p.style.backgroundColor = this.bg;
        p.style.fontSize = this.fontSize;
    }


};

let div = new DomElement('.blok', '60px', '850px', 'coral', '22px');
let p = new DomElement('#dest', '200px', '700px', 'lime', '28px');


div.creates();
p.creates();


