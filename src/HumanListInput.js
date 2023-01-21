import './style.css';

function HumanListInput(props) {
  return (
    <div className="human-list-input-container">
        <label htmlFor="human-list-input">Please enter names seperated by commas </label>
      <textarea id="human-list" 
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
export default HumanListInput;
