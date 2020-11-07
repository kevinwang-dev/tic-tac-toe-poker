const arr = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player"); //value of player X or O
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    //if text content is X
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    arr[clickedId] = "X";
    //change text to O
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    arr[clickedId] = "O";
    //change text to X if its not X
  }
  console.log(arr);

  const topLeft = arr[0];
  const topMiddle = arr[1];
  const topRight = arr[2];

  const midLeft = arr[3];
  const midMiddle = arr[4];
  const midRight = arr[5];

  const lowLeft = arr[6];
  const lowMiddle = arr[7];
  const lowRight = arr[8];

  if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
    alert(`${topLeft} win`);
    return;
  }

  if (midLeft !== undefined && midLeft === midMiddle && midLeft === midRight) {
    alert(`${midLeft} win`);
    return;
  }

  if (lowLeft !== undefined && lowLeft === lowMiddle && lowLeft === lowRight) {
    alert(`${lowLeft} win`);
    return;
  }

  if (topLeft !== undefined && topLeft === midMiddle && topLeft === lowRight) {
    alert(`${topLeft} win`);
    return;
  }

  if (lowLeft !== undefined && lowLeft === midMiddle && lowLeft === topRight) {
    alert(`${lowLeft} win`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (arr[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("No Winner");
  }
}
