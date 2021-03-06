var roleBuilder = {

	/** @param {Creep} creep **/
	run: function (creep) {

		if (creep.memory.building && creep.carry.energy == 0) {
			creep.memory.building = false;
			creep.say('harvesting');
		}
		if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
			creep.memory.building = true;
			creep.say('building');
		}

		if (creep.memory.building) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			if (targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			}
			else {
				var targets = creep.room.find(FIND_STRUCTURES, {
					filter: (structure) => {
						return ((structure.hits < 200000) && (structure.hits > 0) && (structure.structureType == STRUCTURE_WALL))
					}
				});
				if (targets.length > 0) {
					if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
						creep.moveTo(targets[0]);
					}
				}
				else {

					var targets = creep.room.find(FIND_STRUCTURES, {
						filter: (structure) => {
							return ((structure.hits < 5000) && (structure.structureType == STRUCTURE_ROAD))
						}
					});
					if (targets.length > 0) {
						if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
							creep.moveTo(targets[0]);
						}
					}
				}//end else
			}
		}
		else {
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0]);
			}
		}
	}
};

module.exports = roleBuilder;
