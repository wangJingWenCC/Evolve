import { global, breakdown } from './vars.js';
import { deepClone, adjustCosts, messageQueue } from './functions.js';
import { races } from './races.js';
import { craftCost, tradeRatio, atomic_mass, tradeBuyPrice, tradeSellPrice } from './resources.js';
import { actions, checkTechRequirements, checkAffordable } from './actions.js';
import { fuel_adjust, int_fuel_adjust } from './space.js';
import { f_rate } from './industry.js';
import { armyRating } from './civics.js';
import { alevel } from './achieve.js';
import { loc } from './locale.js';

export function enableDebug(){
    if (global.settings.expose){
        window.evolve = {
            actions: deepClone(actions),
            races: deepClone(races),
            tradeRatio: JSON.parse(JSON.stringify(tradeRatio)),
            craftCost: JSON.parse(JSON.stringify(craftCost())),
            atomic_mass: JSON.parse(JSON.stringify(atomic_mass)),
            f_rate: JSON.parse(JSON.stringify(f_rate)),
            checkTechRequirements: deepClone(checkTechRequirements),
            checkAffordable: deepClone(checkAffordable),
            adjustCosts: deepClone(adjustCosts),
            armyRating: deepClone(armyRating),
            tradeBuyPrice: deepClone(tradeBuyPrice),
            tradeSellPrice: deepClone(tradeSellPrice),
            fuel_adjust: deepClone(fuel_adjust),
            int_fuel_adjust: deepClone(int_fuel_adjust),
            alevel: deepClone(alevel),
            messageQueue: deepClone(messageQueue),
            loc: deepClone(loc),
            updateDebugData: deepClone(updateDebugData),
            global: {},
            breakdown: {},
        };
    }
}

export function updateDebugData(){
    if (global.settings.expose){
        // window.evolve.global = JSON.parse(JSON.stringify(global));
        window.evolve.global = global;
        window.evolve.craftCost = JSON.parse(JSON.stringify(craftCost())),
        window.evolve.breakdown = JSON.parse(JSON.stringify(breakdown));
    }
}