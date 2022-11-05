const wrapper = document.getElementById("tiles");

const createGrid = () => {
  console.log("on");
  wrapper.innerHTML = "";
  let columns = Math.floor(document.body.clientWidth / 50);
  let rows = Math.floor(document.body.clientHeight / 50);

  const colors = [
    "rgb(229,57,53)",
    "rgb(253,216,53)",
    "rgb(244,81,30)",
    "rgb(76,175,80)",
    "rgb(33,150,243)",
    "rgb(156,39,176)",
  ];

  //let count = -1;

  let toggled = false;

  const handleOnClick = (index) => {
    // count = count + 1;
    toggled = !toggled;
    anime({
      targets: ".tile",
      //backgroundColor: colors[count % (colors.length - 1)],
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
  };

  const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("click", () => handleOnClick(index));
    return tile;
  };
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  createTiles(rows * columns);
};

createGrid();

document.onload = () => createGrid();

window.onresize = () => createGrid();
