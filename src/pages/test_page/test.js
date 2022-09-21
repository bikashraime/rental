import { useEffect } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

export default function Test() {
    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const getSize = () => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth)
            setHeight(ref.current.offsetHeight)
        }

    }
    useEffect(() => {
        getSize();
    }, [])

    useEffect(() => {
        window.addEventListener('resize', getSize)
    })

    const background1 = {
        backgroundColor: 'red'
    }

    const background2 = {
        backgroundColor: 'green'
    }

    return (
        <div ref={ref} style={width<300? background1: background2}>
            <h2>Width: {width}</h2>

            <h2>Height: {height}</h2>
        </div>
    );
}
