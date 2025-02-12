// h1, p, list of 6 netflix series using ordered list
const series = [
  "Hit & Run",
  "Barbarians",
  "Treason",
  "Marco Polo",
  "Shadowhunters",
  "The Recruit",
];

function Task1() {
  return (
    <>
      <h1>Netflix</h1>
      <p>Action Series: </p>
      <ol>
        {series.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </>
  );
}

export default Task1;
