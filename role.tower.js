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
                    return (((structure.structureType == STRUCTURE_RAMPARTS) ||
                        (structure.structureType == STRUCTURE_WALLS) ||
                         (structure.structureType == STRUCTURE_ROADS))
                        && (structure.energy < 1000 && structure.energy < structure.energyCapacity))
                }


            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
                console.log('1000' + closestDamagedStructure)
            }
            else {
                var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 5000
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                    console.log('5000')
                }
                else {
                    var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                        filter: (structure) => structure.hits < 10000
                    });
                    if (closestDamagedStructure) {
                        tower.repair(closestDamagedStructure);
                        console.log('10000')
                    }

                    else {
                        var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
                            filter: (structure) => structure.hits < 500000
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