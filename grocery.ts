class Grocery{
    name:string;
    quantity:number;
    price:number;
    description:string;
    
    constructor(name: string, quantity: number, price: number, description: string){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
    }
}

//Create the array of grocery objects
function createArray(): void{
    const grocArr: Grocery[] = [new Grocery("Apples", 3, 3.98, "Apples 3 lbs"),
    new Grocery("Milk", 2, 3.29, "Milk 2%"),
    new Grocery("Bread", 1, 4.59, "Whole Grain Bread"),
    new Grocery("Eggs", 1, 1.89, "One Dozen Large Eggs")];
    //calls the function to display the grocery items on the screen
    printArrayElements(grocArr);
};

//loops through the array of grocery objects and creates an html paragraph element for each one
function printArrayElements(grocArr:Grocery[]){
    for (let index=0; index<grocArr.length; index++){
        var paragraphElement = document.createElement('p');
        var paragraphElementText = document.createTextNode('Item: ' + grocArr[index].name + '  Desc: ' + grocArr[index].description + '  Qty: ' + grocArr[index].quantity + '  Price:' + grocArr[index].price);
        paragraphElement.appendChild(paragraphElementText);
        document.getElementById('parent').appendChild(paragraphElement);
    };
};