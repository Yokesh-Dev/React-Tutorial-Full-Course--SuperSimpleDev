import { useState } from "react"

export default function Login() {
    const [text, setText] = useState("")

    function handleChange(e) {
        e.target
        setText(e.target.value)
    }

    function reset() {
        setText("")
    }

    function sample() {
        setText("Billa")
    }

    return (
        <div>
            <input onChange={handleChange} value={text}>
            </input>
            <p>{text}</p>
            <button onClick={reset}>Reset</button>
            <button onClick={sample}>Example</button>
        </div>
    )
}