import { useState } from 'react';
import { shuffle } from './helper';

function RandomPeoplePicker(props) {
    const [noOfPeopleToSelect, setNoOfPeopleToSelect] = useState();
    const [randomPeople, setRandomPeople] =useState([]);

    const handlePickBtnClick = () => {
        //Logic for seeting random people here..
        const shuffledArray = shuffle(props.list);
        console.log(shuffledArray);
        const slicedArray = shuffledArray.slice(0, noOfPeopleToSelect);
        console.log(slicedArray);
    }
   
    return (
        <>
        <input type='number' onChange={(event)=> {
            setNoOfPeopleToSelect(event.target.value);
        }}/>
        <button onClick={handlePickBtnClick}>Pick</button>
        <div>
            {randomPeople.join(',')}
        </div>
        </>
    )

}

export default RandomPeoplePicker;