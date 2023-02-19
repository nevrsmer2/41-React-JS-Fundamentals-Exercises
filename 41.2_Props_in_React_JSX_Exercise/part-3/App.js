const App = () => (
    <div>
        < Person name="Fredericka" age={32} hobbies={["Fishing", "Dancing", "Watching football"]} />
        < Person name="Carlitos" age={66} hobbies={["Reading", "Drinking", "Wishful thinking"]} />
        < Person name="Laura" age={15} hobbies={["Ice skating", "Chewing gum", "Designing Rocket ships"]} />
    </div>
);


ReactDOM.render(<App />, document.getElementById("root"));
