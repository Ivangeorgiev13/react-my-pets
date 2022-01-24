import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setState(result))
    });
};
export default useFetch;