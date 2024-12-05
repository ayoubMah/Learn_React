const Main = () => {
  const name = "Ayoub";
  const listAyoubFreinds = ["Ayoub", "Ayoub", "Ayoub", "Ayoub", "Ayoub"];
  const multiplication = (a,b) => {
    return a*b;
  }
  const date = new Date();



    return (
        <main>
          <h1>Welcome {name}</h1>
          <p>this is the ayoub freid list: {listAyoubFreinds} </p>
          <h1>Main</h1>
          <p>Hello every body can you plaese make a something </p>
          <p>The a*b est:  {multiplication(12,10)}</p>
          <p>The date is: {date.toString()}</p>
        </main>
    );
};
export default Main;