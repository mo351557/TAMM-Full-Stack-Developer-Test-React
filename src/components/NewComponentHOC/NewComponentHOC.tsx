import { useState } from 'react';

/* Higher order Component */

const NewComponentHOC = (NormalComponent: React.FC<any>) => {
    const WrapperComponent = () => {

    /* State used for the component */
    const [color, setColor] = useState('black');
    const [title, setTitle] = useState('Mouse is Out');

    /* Function to get random color */
    const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    /* Function to handle click event */
    const handleClick = () => {
        let clr = getRandomColor();
        setColor(clr);
    }

    /* Function to handle Mouse Over event */
    const handleMouseOver = () => {
        setTitle('Mouse is Over')
    }

    /* Function to handle Mouse Leave event */
    const handleMouseLeave = () => {
        setTitle('Mouse is Out')
    }

  return (
    <div className="newComponentHOC">
     <NormalComponent onClick={handleClick} color={color} title={title}  onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}/> 
    </div>
  );
  }
  return WrapperComponent;
}

export default NewComponentHOC;
