import { useState } from "react";
import { shuffle } from "./helper";

function TeamGenerator(props) {
  const [noOfTeams, setNoOfTeams] = useState();
  const [teams, setTeams] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleGenerateBtnClick = () => {
    setErrorMessage("Please select the number of teams to generate");

    //Logic for selecting random people here..
    const shuffledArray = shuffle(props.list);
    //split the array into multiple teams

    //If noTeams, or number of teams < 0, set to empty array
    if (!noOfTeams || noOfTeams < 0) {
      setTeams([]);
    } else {
      //Lets us know how many people we can have in one team
      const noOfPeoplePerTeam = shuffledArray.length / noOfTeams;
      //split people into teams based on number of people per team
      const res = [];

      for (let i = 0; i < noOfTeams; i++) {
        //make it dynamic by i * noOfPeoplePerTeam
        res.push(
          shuffledArray.slice(
            i * noOfPeoplePerTeam,
            (i + 1) * noOfPeoplePerTeam
          )
        );
      }
      setTeams(res);
      console.log(res);
    }
  };

  return (
    <div className="random-team-generator-outer-container">
      <h3>Generate Random Teams</h3>
      <div className="random-team-generator-container">
        <input
          type="number"
          onChange={(event) => {
            setNoOfTeams(event.target.value);
          }}
        />
        <button onClick={handleGenerateBtnClick}>Generate</button>
        {errorMessage && <p className="error"> {errorMessage} </p>}
        {/*displaying the team in a list format*/}
        {teams.map((team, index) => {
          return (
            <ul className="team-list" key={index}>
              {team.map((member, index) => {
                return <li className= "list-item" key={index}>{member}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default TeamGenerator;
