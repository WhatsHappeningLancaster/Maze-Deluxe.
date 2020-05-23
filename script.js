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

  `########################################`,
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
  `#########################################`,
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
  `#############################################################`,
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
  `#############################################################`,
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
let levels = [maze2];
let body = document.querySelector('body');
let divTable = document.getElementById('cover');
let tableEl = document.querySelector('table');
//if button clicked it loads this function for info on keys
let info = () => {
  let b1 = document.querySelector('#startGame')// TODO: Make a info page of the game
  b1.textContent = 'WASD to move mover and press me to play';
}; //end of info function
//if button clicked it loads the game for easy access
let loadPage = () => {
  //the function below removes the two menu buttons from the page by making it invisible to the user
  let updatePageMenu = () => {
    let b1 = document.querySelector('#startGame');
    let b2 = document.querySelector('#controls');
    let b3 = document.querySelector('#winners');
    let h1 = document.querySelector('h1');
    let backButton = document.querySelector('#backButton');
    b1.style.display = 'none';
    b2.style.display = 'none';
    b3.style.display = 'none';
    h1.style.display = 'none';
    backButton.style.display = 'flex';
    backButton.setAttribute('onclick', 'window.location.reload();');
    backButton.setAttribute('type', 'button');
    backButton.style.position = 'relative';
    backButton.style.top = '1px';
    body.style.flexDirection = 'row';
    body.style.justifyContent = 'flex-start';
    body.style.alignItems = 'flex-start';

  }; //end of getRideOfMenu function
  updatePageMenu();


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

  let ending = () => {

    let endingP = document.createElement('section')
    let para = document.createElement('p');
    let h1 = document.createElement('h1');
    let button = document.createElement('button');
    clearTable(tableEl);
    mover.style.display = 'none';// TODO: Need to make mover not exist
    h1.textContent = 'Congrats you have won! I hope you enjoyed the journey.';
    para.textContent = 'Press the Button below to play again!.';
    button.textContent = 'Play Agian?';
    button.setAttribute('onclick', 'window.location.reload();');
    button.setAttribute('type', 'button');
    //adding end para to body and other child elements
    body.appendChild(endingP);
    endingP.appendChild(h1);
    endingP.appendChild(para);
    endingP.appendChild(button);
    body.style.justifyContent = 'center';

  }

  //clear table function for clearing the levels after every level is completed
  const clearTable = (tableEl) => {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    } //end of clearTable funcition
  };

  let mover = document.createElement('div');
  let mazeName = document.querySelector('#mazeName');
  mazeName.style.display = 'block';

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
        //which adds 10 and px.
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
          let losingPos = pos.x < wowWalls.x + wowWalls.width && pos.x + pos.width > wowWalls.x && pos.y < wowWalls.y + wowWalls.height && pos.y + pos.height > wowWalls.y

          if (losingPos) {
            lose();
          }
          if (pos.x == 0) {
            lose();
          }
        }
         // the wining cordinate of each level
         let winingPos = pos.x < wins.x + wins.width && pos.x + pos.width > wins.x && pos.y < wins.y + wins.height && pos.y + pos.height > wins.y

         if (winingPos) {

         // for each level the switch statement will update the levels array
         switch (currentLevel) {
           case maze2:
              levels.push(maze3);
             break;

            case maze3:
              levels.push(maze4);
              break;

            case maze4:
              levels.push(maze5);
              break;

            case maze5:
              levels.push(maze6);
              break;

            case maze6:
              levels.push(maze7);
              break;

            case maze7:
              levels.push(maze8);
              break;

            case maze8:
              levels.push(maze9);
              break;

            case maze9:
              levels.push(maze10);
              break;

            case maze10:
              levels.push(maze11)
              break;

            case maze11:
            ending()
            break;

         }
         // for the length of the levels array
         for (let i = 0; i < levels.length; i++) {

              // print each level via the DOM
              currentLevel = levels[i]
              clearTable(tableEl);
              mover.style.left = '10px';
              mover.style.top = '50px';
              drawMaze(currentLevel);
              // Changing the level name
              mazeName.textContent = `Current maze is ${currentLevel}`;
              let mazeCount = 2;
              for (let i = 2; i <= currentLevel.length; i++) {
                mazeCount += 1 
                let mazeCountName = `Current maze level maze ${mazeCount}`
                console.log(mazeCountName)

              }


          }


        }
  }); //end of eventListener

}; //end of on click function
