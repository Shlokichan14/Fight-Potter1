class Form{
    constructor(){
        this.input = createInput("");
        this.button = createButton("Play");
        this.titleImg = createImg("","game title");
        this.greeting = createElement("h2");
  
    }

    setElementsPosition(){
        this.titleImg.position(120,50);
        this.input.position(width/2-100,height/2-80);
        this.button.position(width/2-50,height/2-20);
        this.greeting.position(width/2-300, height/2-100);
    }

    setElementStyle(){

    }

    display(){
       this.setElementsPosition();
       this.setElementStyle();
    }
}