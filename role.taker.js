var roleTaker = {
 
    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.takeing && creep.carry.energy == 0) {
            creep.memory.taking = false;
            creep.say('taking');
        }
        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('transfering');
        }

        if (creep.memory.upgrading) {
            var tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_TOWER ||
                            (structure.structureType == STRUCTURE_CONTAINER)) && 
                            structure.energy < structure.energyCapacity &&
                            structure.my);
                }
            });

            if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(tower);
            }
        }
           
};

module.exports = roleTaker;