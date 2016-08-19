var roleTower = {

    /** @param {Creep} creep **/
    defend: function (tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile[0]);
        }
    },
    rep: function (tower) {
        if (tower) {


            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_RAMPART ||
                        structure.structureType == STRUCTURE_WALL ||
                         structure.structureType == STRUCTURE_ROAD)
                        && structure.hits < 1000 && structure.hits < structure.hitsMax)
                }
            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);

            }
            else {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (((structure.structureType == STRUCTURE_RAMPART) ||
                            (structure.structureType == STRUCTURE_WALL) ||
                             (structure.structureType == STRUCTURE_ROAD))
                            && structure.hits < 5000 && structure.hits < structure.hitsMax)
                    }
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }
                else {
                    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (((structure.structureType == STRUCTURE_RAMPART) ||
                                (structure.structureType == STRUCTURE_WALL) ||
                                 (structure.structureType == STRUCTURE_ROAD))
                                && structure.hits < 10000 && structure.hits < structure.hitsMax)
                        }
                    });
                    if (closestDamagedStructure) {
                        tower.repair(closestDamagedStructure);
                    }
                    else {
                        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => {
                                return (((structure.structureType == STRUCTURE_RAMPART) ||
                                    (structure.structureType == STRUCTURE_WALL) ||
                                     (structure.structureType == STRUCTURE_ROAD))
                                    && structure.hits < 100000 && structure.hits < structure.hitsMax)
                            }
                        });
                        if (closestDamagedStructure) {
                            tower.repair(closestDamagedStructure);
                        }
                        else {
                            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (((structure.structureType == STRUCTURE_RAMPART) ||
                                        (structure.structureType == STRUCTURE_WALL) ||
                                         (structure.structureType == STRUCTURE_ROAD))
                                        && (structure.hits < 500000 && structure.hits < structure.hitsMax))
                                }
                            });
                            if (closestDamagedStructure) {
                                tower.repair(closestDamagedStructure);
                            }
                            else {
                                var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                                    filter: (structure) => structure.hits < structure.hitsMax
                                });
                                if (closestDamagedStructure) {
                                    tower.repair(closestDamagedStructure);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
module.exports = roleTower;