import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { projects } from '../data/projects';

import { one, two, three, four, bar } from '../images';

const ButtonDiv = styled.div`
    width: 100%;
    ${'' /* max-width: 1300px; */}
    display: flex;
    align-self: center;
    justify-content: space-between;
    background-color: pink;
    height: 100%;
    z-index: 500;

    .button {
        width: 20%;
        height: 100%;

        :hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, .5);
        }

        :last-child {
          margin-left: auto;
        }
    };

`

const Container = styled.div`
  display: flex;
  align-self: center;
  width: 100vw;
  min-height: 200px;
  z-index: 100;
  grid-gap: 1em;
  margin: 1em auto;

  .button {
    width: 50px;
    background-color: ${props => props.theme.three};
    color: white;
    border: none;
  }

  .button:hover {
    cursor: pointer;
  }
`

const Scroll = styled.div`
    margin: 0 auto;
    text-align: center;
    position: relative;
    
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 66%;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    transition: 1s ease;
    scroll-behavior: smooth;
    min-height: 200px;
    max-height: max-content;
    width: 100%;
    
    ${'' /* @media (max-width: 600px) {
      grid-auto-columns: 44%;
    }; */}

    @media (min-width: 1300px) {
      grid-auto-columns: 45%;
    };

  ::-webkit-scrollbar { 
      background: transparent; 
      display: none;
  };

  > * {
      scroll-snap-align: start;
  };

  .media-elements {
      padding: 0 .5em;
      grid-template-rows: min-content;
      display: grid;
      align-self: center;

      :first-child {
        padding-left: 0;
      };

      :last-child {
        padding-right: 0;
      };

      .albums {
        object-fit: cover;
        width: 100%;
        height: 300px;
      };
  };
`

export default function Scroller() {
    const divRef = React.useRef(null);
    const [position, setPosition] = React.useState(0);
    const [maxScrollLeft, setMaxScrollLeft] = React.useState();
    const { theme } = useContext(ThemeContext);
    
    React.useEffect(() => {
      divRef.current.scrollLeft = position;
      setMaxScrollLeft(divRef.current.scrollWidth - divRef.current.clientWidth);
    }, [position]);
    

    const elements = () => {
        const images = [ two, three, four, bar];
        const elements = images.map((image) => {
            return <div key={image} className="media-elements"><img className="albums" src={image} alt="" /></div>
        });
        return elements;
    }
    
    const left = () => {
      setPosition(position - 500);
      if (position <= 0) setPosition(maxScrollLeft);
    };
    
    const right = () => {
      setPosition(position + 500);
      if (position > maxScrollLeft) setPosition(0);
    };
    
    return (
      <>
      <Container theme={theme}>
        <button className="button" onClick={left}><i className="fas fa-angle-left"></i></button>
        <Scroll ref={divRef} className="scroll">{elements()}</Scroll>
        <button className="button" onClick={right}><i className="fas fa-angle-right"></i></button>
      </Container>
      </>
    );
};