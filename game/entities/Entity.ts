import * as s from "../structs";

export class Entity
{
    //these are the variables that any entity in the game will have. If not decided about variable yet it will be string as a place holder.
    name: string;
    stats: s.dict<number> = {};
    weapons: s.dict<s.Weapon> = {};
    armor: s.dict<s.Armor> = {};
    accesories: s.dict<number> = {}; //make class for accesories
    spells: s.dict<number> = {}; //make class for spells
    appearance: string;

    constructor()
    {
        this.name = "DEFAULT_NAME";
        this.stats["str"] = 10;
        this.stats["agl"] = 10;
        this.stats["stm"] = 10;
        this.stats["int"] = 10;
        this.stats["wis"] = 10;
        this.stats["chr"] = 10;
        this.stats["lck"] = 10;
        this.stats["vit"] = 10;
    }
    //add more constructors depeding on different entity creation
}