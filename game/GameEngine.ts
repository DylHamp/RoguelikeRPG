import { Character } from "./entities/Character";
import * as fs from 'fs';
import * as path from 'path';
import * as items from "./items/items";
import { actionLoop } from "./choices";


let test = new Character();

console.log(test.name + " has the Int stat of " + test.stats["int"]);

items.readInItems();
test.setClass("Warrior");

console.log(test.inventory);

//actionLoop();


