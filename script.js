//below are maze levels 1 through 10
let maze1 = [
  `##########`,
  `_.......##`,
  `#..###..##`,
  `#....#..##`,
  `#..###..##`,
  `#..###..##`,
  `#..###..##`,
  `#..###..##`,
  `#....#..!#`,
  `##########`,
];

let maze2 = [
  `###############`,
  `_.........#####`,
  `#..#..##..#####`,
  `#..#..##......#`,
  `#..#..######..#`,
  `#..#..######..#`,
  `#..#..##......#`,
  `#..#..#########`,
  `#..#..........#`,
  `#..#######..###`,
  `#..#######..###`,
  `#...........###`,
  `#..########.###`,
  `#............!#`,
  `###############`,
];
let maze3 = [
  `##############################`,
  `_.....................########`,
  `##########..########..########`,
  `##########..#......#.........#`,
  `#...........#..##..########..#`,
  `#..#######..#..##..########..#`,
  `#..#....##..#..##..####......#`,
  `#..###..#####..##.....########`,
  `#...............####........!#`,
  `##############################`,
];
let maze4 = [
  `##############################`,
  `_....###..........#........###`,
  `###..###..###..####..####..###`,
  `###.......###..#.....####..###`,
  `#############..####..#.......#`,
  `#..............####..#..###..#`,
  `#..################..#..###..#`,
  `#..##........######..#....#..#`,
  `#..##..####..#.......######..#`,
  `#......####..#..###.......#..#`,
  `###########..#..###########..#`,
  `#............#..#.......##...#`,
  `#..###########..#..###..##..##`,
  `#..................###..#...!#`,
  `##############################`,
];
let maze5 = [
  `##############################`,
  `_......####.........#........#`,
  `#..##..#.....#####..#..####..#`,
  `#......#..#..#......#..#.....#`,
  `#####..####..#####..#..#######`,
  `#......#..#..##..#...........#`,
  `...##........#..##..#..#######`,
  `#..#..##..#####..####..#.....#`,
  `#..#####..#...#..#.....#..#..#`,
  `#.........##..#..#..####..#..#`,
  `#####..#......#..#..####..#..#`,
  `#......#..#####..#........####`,
  `#..##..#.....#####..##..###..#`,
  `#..##..###..##########..#....#`,
  `#..##..#................###..#`,
  `#..##..###############..###..#`,
  `#..##..#..##..##..#########..#`,
  `#..#........................!#`,
  `##############################`
];

let maze6 = [
  `##############################`,
  `_........##..#######..##..#..#`,
  `#..####..##......#...........#`,
  `#....##..##..##..#..##..###..#`,
  `#....##......##..#..#####....#`,
  `#..####..####.......#..##..###`,
  `####..####..##..#####..##..###`,
  `#........#..##..#...#..##....#`,
  `#..#######..######..#..####..#`,
  `#..#........##...#..####.....#`,
  `#..#..##..####..##..#.....#..#`,
  `#..#..#####..#......####..####`,
  `#..#..#...........###..#..#..#`,
  `#.....#..###..#..##.......#..#`,
  `#######..#....#..##..###..#..#`,
  `#........###..#.......#...#..#`,
  `#..########################..#`,
  `#...........................!#`,
  `##############################`
];

let maze7 = [
  `##############################`,
  `_..........####.............##`,
  `#..############..#########..##`,
  `#.............#..#.....###..##`,
  `#..#########..#..#..#..###..##`,
  `#..##..#####..#..#..#..###..##`,
  `#..#.....###..#..#..#..###..##`,
  `#..####..###.....#..#.......##`,
  `#..####..#########..##########`,
  `#..####..........#.......#####`,
  `#..####..######..######..#####`,
  `#..#.....######.....#........#`,
  `#..#..#..#########..#######..#`,
  `#.....#.......#####.......#.!#`,
  `##############################`,
];



let maze8 = [

  `########################################`, //index 1
  `_......................#...............#`,
  `#..#################...#...#########...#`,
  `#..#.......#.......#...#...#.......#...#`,
  `#..#...#...#...#...#...#...#...#..##...#`,
  `#..#...#.......#...........#...#...#...#`,
  `#..#########...#############...#...#...#`,
  `#..........#...............#...#...#...#`,
  `#####################..#...#...#...#...#`,
  `#......................#...#...#.......#`,
  `#..#################...#...#...#########`,
  `#..#...............#...#...#...........#`,
  `#..#############...#...#...#####...#...#`,
  `#......#.......#.......#.......#...#...#`,
  `#..#...#...#...#...#########...#####...#`,
  `#..#.......#...#...........#.......#...#`,
  `############...#################...#...#`,
  `#..............#.......#.......#...#...#`,
  `#..#############...#...#...#...#####...#`,
  `#..................#.......#..........!#`,
  `########################################`
];

let maze9 = [
  `#########################################`, //index 2
  `_.......................#...............#`,
  `#####################...#...#############`,
  `#...#.......#.......#...#...#...........#`,
  `#...#...#...#...#...#...#...#...#####...#`,
  `#.......#.......#.......#.......#...#...#`,
  `#...#########...#############...#...#####`,
  `#...........................#.......#...#`,
  `#######..#####..#########...#...#...#...#`,
  `#..........#............#...#...#.......#`,
  `#...#####..##########...#...#...#########`,
  `#...#...............#.......#...........#`,
  `#...#############...#...#...#####...#...#`,
  `#...#....#......#.......#.......#...#...#`,
  `#...###..#..#....#...#########...#####..#`,
  `#..........#....#...........#.......#...#`,
  `########..####...####..###########...#..#`,
  `#...............#.......#.......#.......#`,
  `#...#############...#...#...#...#####...#`,
  `#...................#.......#..........!#`,
  `#########################################`
];

let maze10 = [
  `#############################################################`, //index 3
  `_.......######.............##............#..................#`,
  `######..##......#..######......#####..#..#########..######..#`,
  `#....#..#########..##..######..#..##..#..................#..#`,
  `###.....##.........##.................#..#################..#`,
  `#....#######...######..########..######..#...............#..#`,
  `###.......#######..##..##.....#..#..###..#..#################`,
  `########..#.........#..##..#..###........#..#...........##..#`,
  `#......#..#..#..#####..##..#..#....#######..#..#..#..#..##..#`,
  `#..#####..#..#.........##..#..###..#.....#..#..#..#..#......#`,
  `#.........#..#..#..######..#..###..####..####..#..#..#..#####`,
  `########..####..#####..#####....#..............#..####..#...#`,
  `##.....#........#.............##################........##..#`,
  `##..#..#..#######..#..#..######...................####...#..#`,
  `#####..####..####..#..#..##..##..##################..#..##..#`,
  `###..........#.....#..#..##..............................#..#`,
  `#....######..####..#..#..##..#############################..#`,
  `###..#..###.....#..#..#..##..#..............##..............#`,
  `#.#..#.......####..#..#..##..###..####..#..#..#..#####..#####`,
  `#.#..######..#..#..#..#..##..#....#..#..#..#..#..#..#####..##`,
  `#.#.......#........#..#####....#..#..#..#..................##`,
  `#.######..##..######.........###..#.....################..###`,
  `#......#..#####..#####..##############..#..........#####..###`,
  `#..#####.............####...............###..#######........#`,
  `#..#......#########..#..#..################..#........#..#..#`,
  `#..#..##..##.........#..#..#..............#######..####..#..#`,
  `#..#####..#########..#..#..#..#..#..####..#..............#..#`,
  `#................##.....#..#..#..####..#..#..###..#..##..#..#`,
  `########..#####..########..#..#........#..#..#..###..##..#..#`,
  `#.............#...............##########.....#........#....!#`,
  `#############################################################`
];

let maze11 = [
  `#############################################################`, //index 4
  `_.........#.....................#.....................#######`,
  `########..##...#######..######..#..#################........#`,
  `##.....#..###..##............#..##########..##############..#`,
  `##..#.......#..##..#..#####..#..........................##..#`,
  `##..#########..##..####..#########..#############..#######..#`,
  `##..#..........##...............................#..#######..#`,
  `##..#..######..################..################...........#`,
  `##..#.......#..#................................##########..#`,
  `##..#########..######..###########..######################..#`,
  `##.............#............#..........#.............#......#`,
  `#############..######..######..#..########..###..#####..##..#`,
  `######..#########..##########..#######..##...............#..#`,
  `#.......................................##..#################`,
  `##########################################..#..............##`,
  `#.......#...................................###..########..##`,
  `#########..####################################..#......#..##`,
  `#.......#..#........#........................##..#..#####..##`,
  `#########..#..####..#..####################..##..#.........##`,
  `#.......#..#.....#..#..#..................#..##..############`,
  `#########..#######..#..#..##############..#..##..#..........#`,
  `#..........#...........#..#......#.....#..#..##.....######..#`,
  `#..##################..#..#..##..#..#..#..#..##########..#..#`,
  `#..#...................#..#..##..#..#..#..#..............#..#`,
  `#..########..########..#..#####..#..#..#..##########..#..#..#`,
  `#..#.........#.........#.........#..#..#..............#..#..#`,
  `#..#..############################..#..################..#..#`,
  `#..#.............#....##............#....................#..#`,
  `#..############..###..##..################################..#`,
  `#.....................##...................................!#`,
  `#############################################################`
];

//global variables
let currentLevel = maze1;
let levels = [maze6];
let body = document.querySelector('body');
let divTable = document.getElementById('cover');
let tableEl = document.querySelector('table');
//if button clicked it loads this function for info on keys
let info = () => {
  let b1 = document.querySelector('#one')
  b1.textContent = 'WASD to move mover and press me to play';
}; //end of info function
//if button clicked it loads the game for easy access
let loadPage = () => {
  //the function below removes the two menu buttons from the page by making it invisible to the user
  let getRideOfMenu = () => {
    let b1 = document.querySelector('#one');
    let b2 = document.querySelector('#two');
    b1.style.display = 'none';
    b2.style.display = 'none';
    body.style.flexDirection = 'row';
    body.style.justifyContent = 'flex-start';
    body.style.alignItems = 'flex-start';

  }; //end of getRideOfMenu function
  getRideOfMenu();

  let lose = () => {
    //needed variables for end condition
    let looseP = document.createElement('section');
    let para = document.createElement('p');
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    clearTable(tableEl);
    //styles for end condition
    mover.style.display = 'none';
    h1.textContent = 'GAME OVER';
    para.textContent = 'Press the Button below to restart.';
    button.textContent = 'Restart??';
    button.setAttribute('onclick', 'window.location.reload();');
    button.setAttribute('type', 'button');
    //adding end para to body and other child elements
    body.appendChild(looseP);
    looseP.appendChild(h1);
    looseP.appendChild(para);
    looseP.appendChild(button);
    body.style.justifyContent = 'center';
  }; //end of lose function


  //clear table function for clearing the levels after every level is complete
  const clearTable = (tableEl) => {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    } //end of clearTable funcition
  };

  let mover = document.createElement('div');
  const drawMaze = (maze) => {
    //creating a function to draw maze
    //defining basic layout
    clearTable(tableEl);
    divTable.appendChild(mover);
    //equipting the mover
    mover.style.left = '10px';
    mover.style.top = '50px';
    mover.setAttribute('id', 'player');
    mover.textContent = '@';

    for (let i = 0; i < currentLevel.length; i++) { //loop for tr's

      let rowEl = document.createElement('tr');

      tableEl.appendChild(rowEl);

      for (let x = 0; x < currentLevel[i].length; x++) { //loop for td's
        let tdEl = document.createElement('td');
        rowEl.appendChild(tdEl)

        tdEl.innerHTML = maze[i].charAt(x);


        switch (maze[i].charAt(x)) { //each case is for a specific char which determines how the player interacts
          //with the td in the game
          case '#':
            tdEl.setAttribute('class', 'wall');
            break;
          case '.':
            tdEl.setAttribute('class', 'freespace');
            break;
          case '_':
            tdEl.setAttribute('id', 'start');
            break;
          case '!':
            tdEl.setAttribute('id', 'win');
            break;

        }

      }

    };

  }; //end of drawMaze

  // print the maze and table on the page
  drawMaze(currentLevel);


  window.addEventListener('keydown', event => {
    //mover based on which key is press then the action will occur
    switch (event.key) {
      case 'w':
        mover.style.top = parseInt(mover.style.top) - 10 + 'px';
        //the mover moves on left and top axis then parseInt gives a integer
        //which adds 5 and px.
        break;
      case 'a':
        mover.style.left = parseInt(mover.style.left) - 10 + 'px';
        break;
      case 's':
        mover.style.top = parseInt(mover.style.top) + 10 + 'px';

        break;
      case 'd':

        mover.style.left = parseInt(mover.style.left) + 10 + 'px';
        break;
    }

    //defining variables to use for win and lose conditions
    let pos = mover.getBoundingClientRect();
    let win = document.querySelector('#win');
    let wins = win.getBoundingClientRect();
    let walls = document.querySelectorAll('.wall');

    for (let wall of walls) {
          let wowWalls = wall.getBoundingClientRect();
          // checks for wall and player collision
          if (pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y) {
            lose();
          } else if (pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y) {
            for (let i = 0; i < levels.length; i++) {
              currentLevel = levels[i]
              clearTable(tableEl);
              mover.style.left = '10px';
              mover.style.top = '50px';
              drawMaze(currentLevel);



            }
          }
          if (pos.x == 0) {
            lose();
          }
        }
  }); //end of eventListener

}; //end of on click function
