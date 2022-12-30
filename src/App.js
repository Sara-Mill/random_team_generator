import { useState } from 'react';
import PeopleListInput from './peopleListInput';
import RandomPeoplePicker from './RandomPeoplePicker';

function App() {
  const [peopleList, setPeopleList] = useState([]);
  return (
    <div className="App">
      <PeopleListInput onChange={setPeopleList}/>
      <RandomPeoplePicker list={peopleList}/>
    </div>
  );
}

export default App;
