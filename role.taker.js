var roleTaker = {
 
    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.takeing && creep.carry.energy == 0) {
            creep.memory.taking = false;
            creep.say('taking');
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.taking = true;
            creep.say('transfering');
        }

        if (creep.memory.taking) {
            var storage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_STORAGE))

                }
            });

            if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
            }
        }
        else {
            var 
               needed = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_CONTAINER) &&
                        structure.energy < structure.energyCapacity && structure.my)

                }
               });
            if(needed > 0)
            {
                if (creep.transfer(needed, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(needed);
                }

            }
            else {
                tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_TOWER) &&
                            structure.energy < structure.energyCapacity && structure.my)
                    }
                });
                if(tower > 0)
                {
                    if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower);
                    }
                }
            }
        }
    }
};

module.exports = roleTaker;