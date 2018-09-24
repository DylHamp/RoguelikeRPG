import * as s from "../structs";
import {ARMORS} from "../items/items";
import {WEAPONS} from "../items/items";

export class Entity
{
    //these are the variables that any entity in the game will have. If not decided about variable yet it will be string as a place holder.
    name: string;
    stats: s.dict<number> = {};
    equipment: s.Equipment;
    spells: s.dict<number>;
    appearance: string;

    constructor()
    {
        this.equipment = new s.Equipment();
        this.equipment.mainhand =  WEAPONS["Empty Mainhand"];
        this.equipment.offhand = WEAPONS["Empty Offhand"];
        this.equipment.head = ARMORS["Bare Head"];
        this.equipment.torso =  ARMORS["Bare Chest"];
        this.equipment.legs = ARMORS["Bare Legs"];
        this.equipment.feet = ARMORS["Bare Feet"];
        this.equipment.hands = ARMORS["Bare Hands"];
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

    showEquips()
    {
        let content = "";
        for(let equip in this.equipment)
        {
            console.log(this.equipment[equip]);
        }
    }

    equip(equip: s.Item)
    {
        switch(equip.type)
        {
            case s.EQUIPS.MAINHAND:
                break;
            case s.EQUIPS.OFFHAND:
                break;
            case s.EQUIPS.HEAD:
                break;
            case s.EQUIPS.TORSO:
                break;
            case s.EQUIPS.LEGS:
                break;
            case s.EQUIPS.FEET:
                break;
            case s.EQUIPS.HANDS:
                break;
        }
    }
    //add more constructors depeding on different entity creation
}