function towerBuilder(nFloors) {
  let space = " ";
  let star = "*";
  let currentFloor = 1;
  let arr = [];
  let floorsR = nFloors - 1;
  for (let i = 0; i < nFloors; i++) {
    let filler = space.repeat(floorsR);
    let starN = star.repeat(currentFloor);
    arr[i] = filler + starN + filler;
    floorsR--;
    currentFloor += 2;
  }
  return arr;
}

module.exports = towerBuilder;

console.log(towerBuilder(1));
