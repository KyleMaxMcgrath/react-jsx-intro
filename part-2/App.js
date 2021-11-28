const tweets = [
    {
        username: "bobbie88",
        name: "Bob McFerry",
        date: "11/1/2021",
        message: "Happy New Year!"
    },
    {
        username: "harryIgloos",
        name: "John Snow",
        date: "11/5/2021",
        message: "I've sold three igloos just today. WIN!"
    },
    {
        username: "pandaMan",
        name: "Eric Paul",
        date: "11/21/2021",
        message: "Eric Paul is swimming today."
    },
    {
        username: "yellowBirds",
        name: "Lex Thuranni",
        date: "11/22/2021",
        message: "Respect my house!"
    }
]

function App() {
    return (
        <div>
            { tweets.map((tweet, i) => <Tweet key = {i} username = {tweet.username} name = {tweet.name} date = {tweet.date} message = {tweet.message}/>) }
        </div>
    );
}