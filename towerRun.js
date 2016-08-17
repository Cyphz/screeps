var roleTowerRun = {

    /** @param {Creep} creep **/
    run: function (creep) {

        var sources = creep.room.find(FIND_SOURCES);
        if ((creep.carry.energy < 50) || (((creep.harvest(sources[0]) != ERR_NOT_IN_RANGE) && (creep.carry.energy != creep.carryCapacity)))) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1]);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });

            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION) && structure.energy < structure.energyCapacity;
                    }
                });
                if (targets.length > 0) { //if runs out of energy it stops if on 1, check for energy amount in 1 and use 2
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
                else {
                    creep.moveTo(31, 33)
                }

            }

        }



    }
};

module.exports = roleTowerRun;