import { useState } from "react";
import "./App.css";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [breed, setBreed] = useState("");
  const [subBreed, setSubBreed] = useState("");
  const [fileName, setFileName] = useState("");
  const [banList, setBanList] = useState([]);

  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const parts = data.message.split("/");
    const breedPart = parts[parts.length - 2];
    const file = parts[parts.length - 1];
    const breedPieces = breedPart.split("-");

    const mainBreed = breedPieces[0];

    let sub = "None";
    if (breedPieces.length > 1) {
      sub = breedPieces[1];
    }

    if (
      banList.includes(mainBreed) ||
      banList.includes(sub) ||
      banList.includes(file)
    ) {
      fetchDog();
      return;
    }

    setDogImage(data.message);
    setBreed(mainBreed);
    setSubBreed(sub);
    setFileName(file);
  };

  const addToBanList = (item) => {
    if (item !== "" && !banList.includes(item) && item !== "None") {
      setBanList([...banList, item]);
    }
  };

  const removeFromBanList = (itemToRemove) => {
    const updatedList = banList.filter((item) => item !== itemToRemove);
    setBanList(updatedList);
  };

  return (
      <div className="app">
    <h1>Dog Discover</h1>

    <button onClick={fetchDog}>Discover Dog</button>

<div className="attributes">
  <button onClick={() => addToBanList(breed)}>Breed: {breed}</button>
  <button onClick={() => addToBanList(subBreed)}>Sub-breed: {subBreed}</button>
  <button onClick={() => addToBanList(fileName)}>File: {fileName}</button>
</div>

    {dogImage && <img src={dogImage} alt="dog" width="300" />}

   <div className="ban-list">
  {banList.map((item, index) => (
    <button key={index} onClick={() => removeFromBanList(item)}>
      {item}
    </button>
  ))}
</div>
  </div>
);
}

export default App;