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
  e: ['b', 'd', 'f', 'g'],
  f: ['c', 'e', 'i'],
  g: ['d', 'h'],
  h: ['e', 'g', 'i'],
  i: ['h', 'f']
}

// ------------------------------------------------

// Depth First Traversal
// uses a stack FILO

const stack = ['a'];
while(stack.length > 0){
  const curr = stack.pop();
  // console.log(curr);
  stack.push(...dirGraph[curr]);
}

// Breadth First Traversal
// uses a queue FIFO
const queue = ['a'];

while(queue.length > 0){
  const curr = queue.shift();
  console.log(curr);
  queue.push(...dirGraph[curr]);
}