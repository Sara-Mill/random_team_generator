import { useState } from "react";
import { shuffle } from "./helper";
import "./style.css";

function RandomPeoplePicker(props) {
  const [noOfPeopleToSelect, setNoOfPeopleToSelect] = useState();
  const [randomPeople, setRandomPeople] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handlePickBtnClick = () => {
    setErrorMessage("Please select a number of people");
    //Logic for selecting random people here..
    const shuffledArray = shuffle(props.list);

    //return an empty array if no number selected(need an error message?)
    if (noOfPeopleToSelect === undefined || noOfPeopleToSelect < 0) {
      setRandomPeople([]);
    } else {
      const slicedArray = shuffledArray.slice(0, noOfPeopleToSelect);
      setRandomPeople(slicedArray);
    }
  };

  return (
    <div className="random-human-picker-outer-container">
      <h3>Select Random People</h3>
      <div className="random-human-picker-container">
        {/* getting the number of people to pick from the user input*/}
        <input
          type="number"
          onChange={(event) => {
            setNoOfPeopleToSelect(event.target.value);
          }}
        />
        <button onClick={handlePickBtnClick}>Pick</button>
        {errorMessage && <p className="error"> {errorMessage} </p>}
        
        {/*choosing a person from the index and displyaing as a list element*/}
        <ul className="list">
          {randomPeople.map((person, index) => (
            <li className="list-item" key={index}>{person}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RandomPeoplePicker;
