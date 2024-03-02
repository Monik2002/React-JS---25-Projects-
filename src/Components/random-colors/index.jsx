// Hex -> # 0-9 A-F (6 times)
// RGB -> rgb(0-255 0-255 0-255) (3 times)

import { useEffect, useState } from 'react';
// import { useCallback } from 'react';
import './styles.css';

export default function RandomColors() {

    const [typeofColor , setTypeofColor] = useState('hex');
    const [color , setColor] = useState('#000000');

    function generateRandomHexColor() {
    const hex = '0123456789ABCDEF'; // this is the imp part 
    let hexColor = '#'; // this is the imp part 
    for (let i = 0; i < 6; i++) { // this is the imp part  
        hexColor += hex[Math.floor(Math.random() * 16)]; // this is the imp part 
    }
    setColor(hexColor);
}

function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256); // this is the imp part 
    const green = Math.floor(Math.random() * 256); // this is the imp part 
    const blue = Math.floor(Math.random() * 256); // this is the imp part 
    setColor(`rgb(${red},${green},${blue})`); // this is the imp part 
}
    useEffect(() => {
        if(typeofColor === 'hex') {
            setColor(generateRandomHexColor());
        }
        else {
            setColor(generateRandomRGBColor());
        }
    }, [typeofColor]);

    // const handlerandomcolor = useCallback((typeofColor) => {
    //     if(typeofColor === 'hex') {
    //         const hex = '0123456789ABCDEF';
    //         let hexColor = '#';
    //         for(let i=0;i<6;i++) {
    //             hexColor += hex[Math.floor(Math.random() * 16)];
    //         }
    //         setColor(hexColor);
    //     }
    //     else {
    //         const red = Math.floor(Math.random() * 256);
    //         const green = Math.floor(Math.random() * 256);
    //         const blue = Math.floor(Math.random() * 256);
            
    //         const rgbColor = `rgb(${red},${green},${blue})`;
    //         setColor(rgbColor);
    //     }
    // }, [])

    // useEffect(() => {
    //     handlerandomcolor(typeofColor);
    // }, [typeofColor , handlerandomcolor]);
    
    return (
        <div className="container" style={{background: color,
                height: '100vh',
                width: '100vw',
                margin: 0,
                padding: 0,
                overflow: 'hidden', 
            }}>
            <button onClick={() => setTypeofColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeofColor('rgb')}>Create RGB Color</button>
           <button onClick={typeofColor === 'hex' ? generateRandomHexColor : generateRandomRGBColor}>Generate Random Color</button> 
           {/* <button onClick={handlerandomcolor(typeofColor)}>Generate Random Color</button>  */}
           <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                gap: '1rem'
           }}>
                <h3>{typeofColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
           </div>
        </div>
    )
}

