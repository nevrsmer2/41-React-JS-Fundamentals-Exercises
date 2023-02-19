const Tweet = (props) => {
    return (
        <div className="tweet">
            <p> Username:{props.username}</p>
            <p>  Name: {props.name}</p>
            <p> Date: {props.date} </p>
            <p> Message: {props.message}</p>
            <hr></hr>
        </div>);
};

