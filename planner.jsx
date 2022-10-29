/*
You to not need to change this planner.jsx file. This task only requires changes to the index.html file and the styles.css file.
*/

function App() {
  const addEvent = (text, dateLocalStr) => {
    const newEvents = [
      ...todos,
      {
        text: text,
        isCompleted: false,
        date: dateLocalStr,
      },
    ];
    setTodos(newEvents);
  };

  const EventForm = () => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addEvent(value, new Date().toLocaleTimeString());
    };

    return (
      <form onSubmit={handleSubmit} className="">
        <input
          id="task-input"
          type="text"
          value={value}
          placeholder="Add Event..."
          onChange={(e) => setValue(e.target.value)}
          className="w-100"
        />
        {/* <span className="bg-primary py-">Press Enter to Submit</span> */}
      </form>
    );
  };

  const removeEvent = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    console.log(index, temp);
    setTodos(temp);
  };

  const [todos, setTodos] = React.useState([
    {
      text: "Get Groceries",
      date: "12:39:38 PM",
    },
    {
      text: "Meal Prep",
      date: "12:41:38 PM",
    },
    {
      text: "Power Nap",
      date: "12:45:38 PM",
    },
    {
      text: "Learn React",
      date: "04:45:38 PM",
    },
  ]);
  return (
    <div className="bg-dark rounded p-4">
      {todos.map((todo, i) => (
        <div
          key={i}
          title="click to remove item"
          className="btn btn-danger w-100 mb-3"
          onClick={(i) => removeEvent(i)}
        >
          {todo.text} - {todo.date || "N/A"} (-)
        </div>
      ))}
      <EventForm addEvent={addEvent} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
