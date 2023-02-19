const App = () => (
    <div>
        <FirstComponent msg="My very first component" />
        <NamedComponent name="Charlie" />
    </div>
);


ReactDOM.render(<App />, document.getElementById("root"));
