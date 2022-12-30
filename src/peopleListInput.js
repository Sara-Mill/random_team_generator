function PeopleListInput(props) {
    return (
        <textarea onChange={(event)=> {
            console.log(event.target.value)
        }}/>
    )
}
export default PeopleListInput;