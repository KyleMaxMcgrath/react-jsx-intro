function Tweet({username, name, date, message}) {
    return (
        <div>
            <p>
                {username}, {name}, {date}
            </p>
            <p>
                {message}
            </p>
        </div>
    );
}