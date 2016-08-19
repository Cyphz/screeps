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
            //true
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
        }
        else {
            //false
            var  store = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_STORAGE) &&
                        structure.energy < 0 && structure.my)

                }
               });
            if (store > 0) {
                if (creep.transfer(store, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(store);
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
    }
};

module.exports = roleTaker;