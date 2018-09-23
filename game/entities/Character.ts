import * as s from "../structs";
import { Entity } from "./Entity";
import { WEAPONS } from "../items/items";
import { ARMORS } from "../items/items";


export class Character extends Entity
{
    class: string;//make a class for class
    inventory: s.Inventory<any>;
    
    constructor()
    {
        super();
        this.name = "CHARACTER_NAME";
        this.inventory = new s.Inventory;
    }

    setClass(newClass)
    {
        this.class = newClass;
        console.log(this.name + " was given the new class ");
        //eventually implement file that holds different classes, modifiers, and starting items
        switch(newClass)
        {
            case "Warrior":
            console.log("Give player starting items for class Warrior.");
            console.log(WEAPONS["sword"]);
            this.inventory.add(WEAPONS["Sword"]);
            this.inventory.add(ARMORS["Helm"]);
            this.inventory.add(ARMORS["Chest Piece"]);

                break;
        }
    }
}