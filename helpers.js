﻿var helpers = {

    worker200: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, CARRY, MOVE], undefined, { role: names })// w-100 c-50 m-50 = 200
    },
    worker300: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, { role: names })// w-100 c-100 m-100 = 300
    },
    worker400: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, { role: names }) //w-200 c-100 m-100 = 400
    },
    worker450: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, { role: names }) //w-200 c-100 m-150 = 450
    },
    worker600: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, { role: names }) //w-300 c-150 m-150 = 600
    },
    worker800: function (names) {
        Game.spawns["Spawn1"].createCreep([WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined, { role: names }) //w-400 c-200 m-200 = 800
    },

    ultra500: function (names) { //tank
        Game.spawns["Spawn1"].createCreep([ATTACK, MOVE, MOVE, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH], undefined, { role: names })
    },
    ling140: function (names) { //lings
        Game.spawns["Spawn1"].createCreep([ATTACK, MOVE, TOUGH], undefined, { role: names })
    },

    createOne: function (names) {
        switch (names) {
            case "harvester":
                this.worker600(names)
                break;
            case "upgrader":
                this.worker600(names)
                break;
            case "builder":
                this.worker400(names)
                break;
            case "builder2":
                this.worker400(names)
                break;
            case "towerRun":
                this.worker600(names)
                break;
            case "ultra":
                this.ultra500(names)
                break;
            case "ling":
                this.ling140(names)
                break;

        }
    }


}
module.exports = helpers