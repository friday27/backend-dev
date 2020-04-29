/*
	https://eloquentjavascript.net/07_robot.html

	The automaton must decide, at each point, where to go next. 
	It has finished its task when all parcels have been delivered.
*/

const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

// let first = new VillageState(
//   "Post Office",
//   [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Alice's House");

// console.log(next.place);
// // → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}


function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

/*
	Measuring a robot

	It’s hard to objectively compare robots by just letting them solve a few scenarios. 
	Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, 
	whereas the other didn’t.

	Write a function compareRobots that takes two robots (and their starting memory). 
	It should generate 100 tasks and let each of the robots solve each of these tasks. 
	When done, it should output the average number of steps each robot took per task.

	For the sake of fairness, make sure you give each task to both robots, 
	rather than generating different tasks per robot.
*/

function countSteps(state, robot, memory) {
  for (let steps = 0;; steps++) {
    if (state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
	let steps1 = 0;
	let steps2 = 0;
	for (let i=0; i<100; i++) {
		const state = VillageState.random();
		// steps1 += countSteps(state, robot1, memory1);
		// steps2 += countSteps(state, robot2, memory2);
		steps1 += runRobot(state, robot1, memory1);
		steps2 += runRobot(state, robot2, memory2);
	}
	steps1 = Math.round(steps1/100);
	steps2 = Math.round(steps2/100);
	console.log(`Avg steps of robot1: ${steps1}\nAve steps of robot2: ${steps2}\nSo the winner goes to ${steps1 <= steps2? 'robot1': 'robot2'} !`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);


/*
	Robot efficiency

	Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
	If you observe that robot’s behavior, what obviously stupid things does it do? 
	How could those be improved?

	If you solved the previous exercise, you might want to use your compareRobots function 
	to verify whether you improved the robot.
*/

function bfs(graph, from, to, route) {
	console.log(`from: ${from}, to: ${to}`);
	const queue = graph[from];
	while(queue.length !== 0 && queue[0] !== to) {
		queue.concat(graph[queue.shift()]);
	}
	if (queue.length === 0) {
		return null;
	}
	return 'OK';
}

bfs();

// // keep memory
// function newRobot({place, parcels}, memory) {


// 	return {direction: route[0], memory};
// };

// runRobot(VillageState.random(), newRobot, []);
// // runRobotAnimation(VillageState.random(), yourRobot, memory);
