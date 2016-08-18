var roleDefend = {

    taskOne: function (creep) {
        var role = creep.memory.role;
        switch (role) {
            case "ultra":
                this.defend(creep)
                break;
            case "ling":
                this.defend(creep)
                break;
        }
    },

    defend: function (creep) {

        var targets = Game.spawns["Spawn1"].room.find(FIND_HOSTILE_CREEPS)
        if (targets.length > 0) {
            if (creep.attack(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        else {
            creep.moveTo(23, 33)
        }
    }
}
module.exports = roleDefend;