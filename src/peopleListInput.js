function PeopleListInput(props) {
    return (
        <textarea onChange={(event)=> {
            const listString=event.target.value;
            const list = listString.split(',').filter(str=> {
                return str.trim().length
            }).map(str => {
                return str.trim();
            });
            props.onChange(list)

        }}/>
    )
}
export default PeopleListInput;