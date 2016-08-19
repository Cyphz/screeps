var roleTaker = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.taking && creep.carry.energy == 0) {
            creep.memory.taking = false;
            creep.say('taking');
        }
        if (!creep.memory.taking && creep.carry.energy == creep.carryCapacity) {
            creep.memory.taking = true;
            creep.say('transfering');
        }

        if (creep.memory.taking) {
            //true - go to places
            var needs = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (((structure.structureType == STRUCTURE_SPAWN) ||
                        (structure.structureType == STRUCTURE_EXTENSION)) && (
                        (structure.energy = structure.energyCapacity) && structure.my))

                }
            });
            if (needs > 0) {
                if (creep.transfer(needs, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(needs);
                }
            }
            else {
                tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return ((structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.energy < structure.energyCapacity && structure.my)
                    }
                });
                if (tower > 0) {
                    if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower);
                    }
                }

                else {
                    cont = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return ((structure.structureType == STRUCTURE_TOWER) &&
                                structure.energy < structure.energyCapacity && structure.my)
                        }
                    });
                    if (cont > 0) {
                        if (creep.transfer(cont, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(cont);
                        }
                    }
                }
            }
        }
        else {
            //take from container

            var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE)

                }
            });

            if (container) {
                creep.say(true)
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(container);
                }

            }
        }
    }
}
module.exports = roleTaker;