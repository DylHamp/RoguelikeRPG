export enum EQUIPS
{
    MAINHAND,
    OFFHAND,
    HEAD,
    TORSO,
    LEGS,
    FEET,
    HANDS,
    SPECIAL
}

export interface dict<T>
{
    [K: string]: T;
}

export class Item
{
    name: string;
    constructor()
    {
        this.name = "DEFAULT_ITEM";
    }
}

export class Weapon extends Item
{
    type: number;
    attack: number;
    accuracy?: number;
    crit?: number;
    weight?: number;
    price?: number;
}

export class Armor extends Item
{
    type: EQUIPS;
    defence: number;
}

export class Inventory<Item>
{
    container: dict<Item>;
    size: number;
    maxSize: number;
    amount: number[];

    constructor()
    {
        this.container = {};
        this.size = 0;
        this.amount = [];
    }

    inInv(item: Item)
    {
        for(let index in this.container)
        {
            if(this.container[index] === item)
            {
                return true;
            }
        }
        console.log("NEW ITEM");
        return false;
    }

    indexOf(item: Item)
    {
        for(let index = 0; index < this.size; index++)
        {
            if(this.container[index] === item)
            {
                return index;
            }
        }
        console.log("ERROR YOU FUCKED UP DYLAN");
        return -1;
    }

    add(item: Item)
    {
        console.log(item);
        if(this.inInv(item))
        {
            this.amount[this.indexOf(item)]++;
            console.log("You have gained one more " + this.container[this.indexOf(item)]);
        }
        else
        {
            this.container[this.size] = item;
            this.amount[this.size] = 1;
            this.size++;
            console.log("You have gained a(n) " + this.container[this.indexOf(item)]);
        }
    }
    
    remove(item: Item)
    {
        this.amount[this.indexOf(item)]--;
        if(this.amount[this.indexOf(item)] === 0)
        {
            console.log("You have no more of this item. Removing it from inventory container.");
            for(let i = this.indexOf(item); i < this.size; i++)//Could be recursive
            {
                this.container[i] = this.container[i++];
            }
            this.size--;
        }
        else
        {
            console.log("You have lost one of this item " + this.container[this.indexOf(item)]);
        }
    }

    clear()
    {
        this.container = {};
        this.size = 0;
        this.amount = [];
    }

}