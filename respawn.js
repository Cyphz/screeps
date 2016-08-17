var clearDead = require('clearDead');
var helpers = require('helpers');
var names = ""
var maxValue = 0
var energyValue = 0
var bWait = false
var bSpawning = false

var respawn = {   
    run: function(role, count)
    {
        bWait = false;
        //console.log("----Respawner -----" )
        _.forEach(Memory.roles, function(value, key)
        {   
            if
                if(key == "max")
            {
                maxValue = value
            }
            if(key == "energy")
            {
                energyValue = value
            }
        })
        //console.log(key + " - " + filterList.length + " of " + maxValue + " -- Energy: " + energyValue )
        if(filterList.length < maxValue && bWait == false )
        {   
            console.log(key + " - " + filterList.length + " of " + maxValue + " -- Energy: " + energyValue )
            console.log("Need a: " + key)
            console.log("Room Energy: " + Game.spawns['Spawn1'].room.energyAvailable + " of " + Game.spawns['Spawn1'].room.energyCapacityAvailable)
            if(Game.spawns['Spawn1'].room.energyAvailable   >= energyValue)
            { 
                //spawn
                helpers.createOne(key)
                console.log("Spawning " + key)
                 
                clearDead.run()
                bWait = true
                bSpawning = true
            }
            else
            {
                //wait
                console.log("Waiting for : " + energyValue)
                bWait = true
                bSpawning = false
            }
                
        }
    })
}   
}
        
module.exports = respawn;

String.prototype.capitalizeFirstLetter = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1)
}
