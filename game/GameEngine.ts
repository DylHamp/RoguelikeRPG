import { Character } from "./entities/Character";
import * as fs from 'fs';
import * as path from 'path';
import * as items from "./items/items";
import { actionLoop } from "./choices";
import { Entity } from "./entities/entity";

items.readInItems();
//These things above must be first

let testEntity = new Character();

//testEntity.setClass("Warrior");

console.log(testEntity.showEquips());

//actionLoop();


