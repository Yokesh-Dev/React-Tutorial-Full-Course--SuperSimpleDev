export default function Counter({ count, handleClick }) {
    return (
        <button onClick={handleClick}>Clicked {count} {count == 0 ? "time" : "times"} </button>
    )
}