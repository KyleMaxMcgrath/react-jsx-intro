function Person({name = "John Doe", age = 21, hobbies = ["jogging"]}) {
    let voteText = ""
    if(age > 18) {
        voteText = <h3>please go vote!</h3>;
    } else {
        voteText = <h3>you must be 18</h3>;
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {voteText}
            <ul>
                {hobbies.map((hobby, i) => <li key = {i}>hobby</li>)}
            </ul>
        </div>
    );
    
}