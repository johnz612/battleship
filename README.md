Computer AI Logic FLow

First, Computer will randomly pick available box/tile in the grid until it will hit a ship
Second, It will store the coordinates and the ship ID in an array using the "shipsHit array", It will then begin to create a focus moves object that will be the basis on how it will focus it's moves around the ship or coordinates where the ship was hit.
Third, If ever it hit another ship while the first ship have not been sunk yet. We will store the another ship's details in the shipsHit array, we will store the coordinates where the new ship was hit and it's ship id.
Fourth, The focus move stores, the baseMove = "where the ship was first hit", prevMoveResult = "hit/missed", currentAxis = "x/y", currentDirection="left/right or down/up", prevMove = "previous Move/Coordinate". This focus move will determine what the move the computer will take
  For every move, it will check all the avaialble tiles, around the baseMove or the previousMove depending on where the currenetMove/PrevMove currently is. 
Fifth, When the ship is sunk, it will empty the focus move and remove the sunk ship in the shipsHit array, and the next ship in the shipsHit array will then be the new moves to focus until it is sunk the shipsHit array is empty.
Sixth, if the shipsHit array is empty the computer will then randomly pick the avaialble boxes/tiles in the grid. And the cycle repeats.
