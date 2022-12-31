import './style.css'
function PeopleListInput(props) {
  return (
    <div className="people-list-input-container">
        <label htmlFor="people-list-input">People List Goes Here:</label>
      <textarea id="people-list-input" 
        onChange={(event) => {
          const listString = event.target.value;
          const list = listString
            .split(",")
            .filter((str) => {
              return str.trim().length;
            })
            .map((str) => {
              return str.trim();
            });
          props.onChange(list);
        }}
      />
    </div>
  );
}
export default PeopleListInput;
