import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {

    const [count, setCount] = useState(0);
    const [character, setCharacter] = useState({ name: 'Nobody' });

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/1`)
            .then(res => res.json())
            .then(result => setCharacter(result))
    }, []);

    const onCounterButtonClickHandler = () => {
        setCount(oldState => oldState + 1);
    }

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>{character.name}'s - Counter</h1>
            <div>{count}</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>

    );
}
export default Demo;