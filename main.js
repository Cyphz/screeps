var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleBuilder2 = require('role.builder2');
var roleTowerRun = require('role.towerRun');
var roleDefend1 = require('role.defend1');
var roleTower = require('role.tower');
var clearDead = require('clearDead');
var resp = require('resp');

module.exports.loop = function () {

    resp.run();
    clearDead.run();
    //if enemy creep - enable defense
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


    for (var name in Game.creeps) {

        //count of roles while assigning jobs
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (bDefense) {
            if (creep.memory.role == 'defend1') {
                roleDefend1.run(creep);
            }
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'builder2') {
            roleBuilder2.run(creep);
        }
        if (creep.memory.role == 'towerRun') {
            roleTowerRun.run(creep);
        }
        if (creep.memory.role == 'ling') {
            roleDefend1.taskOne(creep);
        }
        if (creep.memory.role == 'ultra') {
            roleDefend1.taskOne(creep);
        }
    }
}