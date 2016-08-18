var clearDead = {
    run: function () {
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }
        if (Memory.creeps.length == 0) {
            Game.spawns["Spawn1"].createCreep([WORK, CARRY, MOVE], undefined, { role: "harvester" })// w-100 c-50 m-50 = 200
        }
    }
}
module.exports = clearDead;