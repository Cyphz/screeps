var roleTower = {

    /** @param {Creep} creep **/
    defend: function (tower) {
        if (tower) {
            var closestHostile = tower.room.find(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        }
    },
    rep: function (tower) {
        if (tower) {


            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (((structure.structureType == STRUCTURE_RAMPART) ||
                        (structure.structureType == STRUCTURE_WALL) ||
                         (structure.structureType == STRUCTURE_ROAD))
                        && structure.energy < 1000 && structure.energy < structure.energyCapacity)
                }
            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
                console.log('1000' + closestDamagedStructure)
            }
            else {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (((structure.structureType == STRUCTURE_RAMPART) ||
                            (structure.structureType == STRUCTURE_WALL) ||
                             (structure.structureType == STRUCTURE_ROAD))
                            && structure.energy < 5000 && structure.energy < structure.energyCapacity)
                    }
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                    console.log('5000')
                }
                else {
                    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (((structure.structureType == STRUCTURE_RAMPART) ||
                                (structure.structureType == STRUCTURE_WALL) ||
                                 (structure.structureType == STRUCTURE_ROAD))
                                && structure.energy < 10000 && structure.energy < structure.energyCapacity)
                        }
                    });
                    if (closestDamagedStructure) {
                        tower.repair(closestDamagedStructure);
                        console.log('10000')
                    }
                    else {
                        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (((structure.structureType == STRUCTURE_RAMPART) ||
                                    (structure.structureType == STRUCTURE_WALL) ||
                                     (structure.structureType == STRUCTURE_ROAD))
                                    && (structure.energy < 500000 && structure.energy < structure.energyCapacity))
                            }
                        });
                        if (closestDamagedStructure) {
                            tower.repair(closestDamagedStructure);
                            console.log('500000')
                        }
                        else {
                            var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                                filter: (structure) => structure.hits < structure.hitsMax
                            });
                            if (closestDamagedStructure) {
                                tower.repair(closestDamagedStructure);
                                console.log('open')
                            }
                        }
                    }
                }
            }
        }
    }
}
module.exports = roleTower;