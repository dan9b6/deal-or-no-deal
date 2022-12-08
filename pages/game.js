import Grid from "../components/Grid/Grid";
import GridItem from "../components/Grid/GridItem";
import Box from "../components/Box";
import ModalValue from "../components/Modal/Value";
import SidePanel from "../components/SidePanel";

import { useState, useEffect } from "react";

function App() {
  let boxes = Array.from(Array(20).keys(), (n) => n + 1),
    boxValues = [
      0.5, 1, 5, 10, 50, 100, 250, 500, 750, 1000, 3000, 5000, 10000, 15000,
      20000, 35000, 50000, 75000, 100000, 250000,
    ],
    bottomBoxValues = boxValues.slice(0, Math.ceil(boxValues.length / 2)),
    topBoxValues = boxValues.slice(
      Math.ceil(boxValues.length / 2),
      boxValues.length + 1
    ),
    boxContents = [];

  console.log(bottomBoxValues, topBoxValues);

  const [boxArr, setBoxArr] = useState(boxes);
  const [modalValueData, setModalValueData] = useState({});

  function shuffleBoxes(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const removeBox = (box) => {
    modalOpen(box);

    boxes = boxArr.filter(function (item) {
      return item !== Number(box.getAttribute("data-box-number"));
    });
    box.style.visibility = "hidden";
    setBoxArr(boxes);
  };

  const modalOpen = (data) => {
    console.log("Modal Opened");
    setModalValueData(data);
  };

  const boxClick = (e) => {
    removeBox(e.target.offsetParent);
  };

  const boxValuePair = (boxNumberArr, boxValueArr) => {
    boxNumberArr.map((el, i) => {
      boxContents.push({ number: el, value: boxValueArr[i] });
    });
  };

  useEffect(() => {
    shuffleBoxes(boxValues);
    boxValuePair(boxes, boxValues);
    console.log({ "box-pair values:": boxContents });
  }, []);

  return (
    <div className="App">
      <div className="layout-grid">
        <SidePanel arr={bottomBoxValues} />
        <Grid>
          {boxes.map((box, i) => (
            <GridItem key={i}>
              <Box number={box} points="9" click={boxClick} />
            </GridItem>
          ))}
        </Grid>
        <SidePanel arr={topBoxValues} red={true} />
      </div>
      <ModalValue />
    </div>
  );
}

export default App;
