const Person = (props) => {

    return <div>
        <p>
            Learn some information about {props.name.length >= 8 ? props.name.substring(0, 6) : props.name}
        </p>
        <h3>{props.age >= 18 ? "Pleage go vote!" : "You must be 18 to vote"}.<hr></hr></h3>
        <ul>
            {props.hobbies.map(h => <li>{h}</li>)}
        </ul>
    </div>
};



