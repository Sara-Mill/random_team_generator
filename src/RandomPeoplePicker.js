import { useState } from 'react';
import { shuffle } from './helper';

function RandomPeoplePicker(props) {
    const [noOfPeopleToSelect, setNoOfPeopleToSelect] = useState();
    const [randomPeople, setRandomPeople] =useState([]);

    const handlePickBtnClick = () => {
        //Logic for selecting random people here..
        const shuffledArray = shuffle(props.list);
        
        //return an epmty array if no number selected(need an error message?)
        if(noOfPeopleToSelect=== undefined || noOfPeopleToSelect<0){
           setRandomPeople([]); 
        }else {
            const slicedArray = shuffledArray.slice(0, noOfPeopleToSelect);   
            setRandomPeople(slicedArray); 
        }
        
    }
   
    return (
        <>
            {/* getting the number of people to pick from the user input*/}
            <input type='number' onChange={(event)=> {
                setNoOfPeopleToSelect(event.target.value);
            }}/>
            <button onClick={handlePickBtnClick}>Pick</button>
            {/*choosing a person from the index and displyaing as a list element*/}
            <ul>
                {
                   randomPeople.map((person, index)=> <li key={index}>{person}</li>) 
                }

            </ul>
        </>
    )

}

export default RandomPeoplePicker;