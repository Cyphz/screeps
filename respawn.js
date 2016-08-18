var clearDead = require('clearDead');
var helpers = require('helpers');
var names = ""
var maxValue = 0
var energyValue = 0
var bWait = false
var bSpawning = false

var respawn = {
    run: function (current_creeps) {
        bWait = false;

        _.forEach(Memory.roles, function (value, key) {
            var names = key
            _.forEach(value, function (value, key) {
                if (key == "max") {
                    maxValue = value
                }
                if (key == "energy") {
                    energyValue = value
                }
            })

            var count = current_creeps[names]
            if (count < maxValue && bWait == false) {
                console.log(names + " - " + count + " of " + maxValue + " -- Energy: " + energyValue + " -- Room Energy: " + Game.spawns['Spawn1'].room.energyAvailable + " of " + Game.spawns['Spawn1'].room.energyCapacityAvailable)
                if (Game.spawns['Spawn1'].room.energyAvailable >= energyValue) {
                    helpers.createOne(names)
                    console.log("Spawning " + names)
                    clearDead.run()
                    bWait = true
                    bSpawning = true
                }
                else {
                    console.log("Waiting for : " + energyValue)
                    bWait = true
                    bSpawning = false
                }
            }
        })
    }
}
module.exports = respawn;

