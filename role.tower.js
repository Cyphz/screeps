var roleTower = {

    /** @param {Creep} creep **/
    defend: function (tower) {
        if (tower) {
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        }
    },
    rep: function (tower) {
        if (tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < 1000
            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
            else {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < 5000
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }
                else {
                    var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => structure.hits < 10000
                    });
                    if (closestDamagedStructure) {
                        tower.repair(closestDamagedStructure);
                    }

                    else {
                        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => structure.hits < 500000
                        });
                        if (closestDamagedStructure) {
                            tower.repair(closestDamagedStructure);
                        }
                    }
                }
            }



            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if (closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
        }
    }
}
module.exports = roleTower;