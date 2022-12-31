import { useState } from 'react';
import PeopleListInput from './PeopleListInput';
import RandomPeoplePicker from './RandomPeoplePicker';
import TeamGenerator from './TeamGenerator';

function App() {
  const [peopleList, setPeopleList] = useState([]);
  return (
    <div className="App">
      <PeopleListInput onChange={setPeopleList}/>
      <RandomPeoplePicker list={peopleList}/>
      <TeamGenerator list ={peopleList}/>
    </div>
  );
}

export default App;
