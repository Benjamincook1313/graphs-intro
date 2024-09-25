// Graph Intro

// Directed                   Undirected
// (a) -> (b) -> (c)        (a) - (b) - (c)
//  |             |          |     |     |
//  v             v         (d) - (e) - (f)
// (d) <- (e) <- (f)         |     |     |
//  |                       (g) - (h) - (i)
//  v
// (g) -> (h) -> (i)

// Nodes have connecting EDGES

// adjacency list -> map
const dirGraph = {
  a: ['b', 'd'],
  b: ['c'],
  c: ['f'],
  d: ['g'],
  e: ['d'],
  f: ['e'],
  g: ['h'],
  h: ['i'],
  i: []
}

const undirGraph = {
  a: ['b', 'd'],
  b: ['a', 'c', 'e'],
  c: ['b', 'f'],
  d: ['a', 'e', 'g'],
  e: ['b', 'd', 'f', 'h'],
  f: ['c', 'e', 'i'],
  g: ['d', 'h'],
  h: ['e', 'g', 'i'],
  i: ['h', 'f']
}

// ------------------------------------------------

// Depth First Traversal
// uses a stack FILO

function depthFirstPrint(graph, src){
  const stack = [src];
  const visited = new Set();

  while(stack.length > 0){
    const curr = stack.pop();
    visited.add(curr);

    console.log(`(${curr})`);

    graph[curr].forEach(node => {
      if(!visited.has(node) && !stack.includes(node)) stack.push(node);
    });

  }

  console.log('Depth first search complete!');
};

// Breadth First Traversal
// uses a queue FIFO
function breadthFirstPrint(graph, src){
  const queue = [src];
  const visited = new Set();

  while(queue.length > 0){
    let curr = queue.shift();
    visited.add(curr);
    console.log(`(${curr})`);

    graph[curr].forEach(node => {
      if(!visited.has(node) && !queue.includes(node)) queue.push(node);
    });

  }

  console.log('Breadth first search complete!');
};

// depthFirstPrint(dirGraph, 'a');
// depthFirstPrint(undirGraph, 'a');

breadthFirstPrint(dirGraph, 'a');
breadthFirstPrint(undirGraph, 'a');
