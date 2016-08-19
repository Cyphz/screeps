var roleHarvester = require('role.harvester');
var roleFiller = require('role.filler');
var roleTaker = require('role.taker');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleBuilder2 = require('role.builder2');
var roleTowerRun = require('role.towerRun');
var roleDefend1 = require('role.defend1');
var roleTower = require('role.tower');
var respawn = require('respawn');

module.exports.loop = function () {
    roleTower.defend(tower);
    //if enemy creep - enable defenses
    var bDefense = false;
    var targets = Game.spawns["Spawn1"].room.find(FIND_HOSTILE_CREEPS)
    if (targets.length > 0) {
        bDefense = true;
    }
    var tower = Game.getObjectById('57b34a9ac71cc8133030ba50');
    if (tower.energy > 0) {

        if (bDefense) {
            roleTower.defend(tower);
        }
        else {
            if (tower.energy > tower.energyCapacity / 2) {
                roleTower.rep(tower);
            }
        }
    }

    //loop creeps
    var current_creeps = {
        harvester: 0, filler: 0, taker: 0, defense: 0, upgrader: 0, builder: 0, builder2: 0,
        towerRun: 0, ling: 0, ultra: 0
    };

    for (var name in Game.creeps) {

        //count of roles while assigning jobs

        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
            current_creeps.harvester++
        }

        if (creep.memory.role == 'filler') {
            roleFiller.run(creep);
            current_creeps.filler++
        }

        if (creep.memory.role == 'taker') {
            roleTaker.run(creep);
            current_creeps.taker++
        }
        if (creep.memory.role == 'ling') {
            if (bDefense) {
                roleDefend1.taskOne(creep);
            }
            current_creeps.ling++
        }
        if (creep.memory.role == 'ultra') {
            if (bDefense) {
                roleDefend1.taskOne(creep);
            }
            current_creeps.ultra++
        }

        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
            current_creeps.upgrader++
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
            current_creeps.builder++
        }
        if (creep.memory.role == 'builder2') {
            roleBuilder2.run(creep);
            current_creeps.builder2++
        }
        if (creep.memory.role == 'towerRun') {
            roleTowerRun.run(creep);
            current_creeps.towerRun++
        }

    }
    respawn.run(current_creeps);


}