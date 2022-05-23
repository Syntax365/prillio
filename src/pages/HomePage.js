import React from "react";
import Grid from "../components/Grid";

function HomePage() {
  const width = 30;
  const height = 30;

  //Functions here
  function runCode() {
    const initialize2DArray = (n, m) => {
      let d = [];
      for (let i = 0; i < n; i++) {
        let t = Array(m).fill(0);
        d.push(t);
      }
      return d;
    };

    let n, m, x, y;
    const spiralMatrixIII = (
      rows = width,
      cols = height,
      rStart = 10,
      cStart = 9,
    ) => {
      (n = rows), (m = cols), (x = rStart), (y = cStart);
      let tot = n * m,
        d = "R",
        res = [],
        visit = initialize2DArray(n, m);
      while (res.length < tot) {
        if (ok(x, y)) {
          res.push([x, y]);
          visit[x][y] = 1;
        }
        if (d == "R") {
          y++;
          if (ok(x + 1, y)) {
            if (!visit[x + 1][y]) d = "D"; // go right, down neighbour not visited, turn
          } else {
            d = "D"; // out of border turn
          }
        } else if (d == "D") {
          x++;
          if (ok(x, y - 1)) {
            if (!visit[x][y - 1]) d = "L"; // go down, left neighbour not visited, turn
          } else {
            d = "L";
          }
        } else if (d == "L") {
          y--;
          if (ok(x - 1, y)) {
            if (!visit[x - 1][y]) d = "U"; // go left, up neighbour not visited, turn
          } else {
            d = "U";
          }
        } else if (d == "U") {
          x--;
          if (ok(x, y + 1)) {
            if (!visit[x][y + 1]) d = "R"; // go up, right neighbour not visited, turn
          } else {
            d = "R";
          }
        }
      }
      return res;
    };

    const ok = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

    let executionPath = spiralMatrixIII();
    let delay = 25;
    executionPath.forEach((coord) => {
      document
        .querySelectorAll(`[coordinates="${coord[0]},${coord[1]}"]`)
        .forEach((element) => {
          setTimeout(() => {
            element.classList.add("color-red");
          }, delay);
          delay += 25;
        });
    });
  }

  function clearGrid(width = width, height = height) {
    let clearArr = document.getElementsByClassName("color-red");
    for (let i = 0; i < clearArr.length; i++) {
      clearArr[i].classList.remove("color-red");
    }
  }

  return (
    <>
      <div id={"Grid-1"} key={"1"}>
        <Grid width={width} height={height} />
      </div>
      <button onClick={runCode}>Run Code</button>
      <button onClick={clearGrid}>Clear</button>
    </>
  );
}

export default HomePage;
