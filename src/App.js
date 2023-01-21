import { useState } from 'react';
import PeopleListInput from './HumanListInput';
import RandomPeoplePicker from './RandomPeoplePicker';
import TeamGenerator from './TeamGenerator';

function App() {
  const [peopleList, setPeopleList] = useState([]);
  return (
    <div className="App">
      <h1>Welcome to Random-Team-Generator!</h1>
      <PeopleListInput onChange={setPeopleList}/>
      <RandomPeoplePicker list={peopleList}/>
      <TeamGenerator list ={peopleList}/>
    </div>
  );
}

export default App;
