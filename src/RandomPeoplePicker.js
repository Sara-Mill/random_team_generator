import { useState } from 'react';

function RandomPeoplePicker(props) {
    const [noOfPeopleToSelect, setNoOfPeopleToSelect] = useState();
    return (
        <>
        <input type='number' onChange={(event)=> {
            setNoOfPeopleToSelect(event.target.value);
        }}/>
        <button onClick={()=> {
            console.log(noOfPeopleToSelect);
        }}>Pick</button>
        <div>
            List Goes Here...
        </div>
        </>
    )

}

export default RandomPeoplePicker;