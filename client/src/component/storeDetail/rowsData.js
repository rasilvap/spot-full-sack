//https://nordschool.com/react-data-fetching/
let id = 0;
const createData = (name, adress, distance, avaiableLunchDay, menu) => {
  id += 1;
  return { id, name, adress, distance, avaiableLunchDay, menu };
};

export default [
  createData(
    "JOhan Cocaine s",
    159,
    6.0,
    24,
    4.0
  ),
  createData(
    "Ice cream ",
    237,
    9.0,
    37,
    4.3
  ),
  createData(
    "Eclairsdfas",
    262,
    16.0,
    24,
    6.0
  ),
  createData(
    "Cupcakesad",
    305,
    3.7,
    67,
    4.3
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  )
];
