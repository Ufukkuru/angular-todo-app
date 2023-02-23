export class Model{
    name;
    items;

    constructor(){
        this.name="Ufuk";
        this.items=[
            new TodoItem("Breakfast",true),
            new TodoItem("Spor",true),
            new TodoItem("Lunch",false,),
            new TodoItem("Swimming",false),
            new TodoItem("Run",false),
        ];
    }
}

export class TodoItem{
    description;
    action;

    constructor(description:string,action:boolean){
        this.description = description;
        this.action= action;
    }
}
