var roleFiller = {

    /** @param {Creep} creep **/
    run: function (creep) {

        //set the source by id
        var sources = creep.room.find(FIND_SOURCES);
        if (creep.carry.energy != creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(37,37);
            }
            else {
                var container = Game.getObjectById('57b34a9ac71cc8133030ba50');
                if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(37,37);
                }
            }
        }
    }
}
module.exports = roleFiller;
