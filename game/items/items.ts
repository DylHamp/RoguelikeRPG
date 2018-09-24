import * as s from "../structs";
import fs = require('fs');

export let WEAPONS: s.dict<s.Weapon> = {};
export let ARMORS: s.dict<s.Armor> = {};
export let content;

//Create function that loads data from files and will start to fill up dictionaries
export function readInItems()
{
    readInWeapons();
    readInArmors();
}

function readInWeapons()
{
    let fields = fs.readFileSync('./game/items/weapons.txt','utf8').split("\r\n");
    for (let thing in fields)
    {
        let values = fields[thing].split(",");
        WEAPONS[values[0]] = {name: values[0], type: values[1], attack: Number(values[2]), accuracy: Number(values[3]), crit: Number(values[4]), weight: Number(values[5]), price: Number(values[6])};
    }
}

function readInArmors()
{
    let fields = fs.readFileSync('./game/items/armors.txt','utf8').split("\r\n");
    for (let thing in fields)
    {
        let values = fields[thing].split(",");
        ARMORS[values[0]] = {name: values[0], type: values[1], defence: Number(values[2])};
    }
}