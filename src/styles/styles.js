import styled, { keyframes } from 'styled-components'

const fade = keyframes`
  0% { opacity: 0.5 }
  100% {opacity: 1 }
`

export const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme.one};
  font-family: 'Helvetica Neue', sans-serif;

  h1 {
    color: ${props => props.theme.three};
    font-family: 'Rock Salt', 'Questrial', Helvetica Neue, sans-serif;
    line-height: 1.2em;
    font-weight: 100;
    font-size: 3em;
    text-shadow: 0 0 .3em ${props => props.theme.three};
    align-self: center;

    @media (max-width: 500px) {
      font-size: 2em;
    };

    ${'' /* @media (min-width: 600px) {
      font-size: 4em;
    }; */}

    ${'' /* @media (min-width: 1000px) {
      font-size: 6em;
    }; */}
  };

  h2 {
    color: ${props => props.theme.two};
    font-weight: 100;
    font-family: 'Questrial', 'Helvetica Neue', sans-serif; 
    font-size: 2em;
    margin: 0;
  };

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1em 1em;
    grid-gap: .5em;
  };

  #nav_text {
    display: flex;
    grid-gap: .5em;
  }

  a:hover {
    cursor: pointer;
    transform: scale(1.1);
  };

  #me {
    max-height: 100px;
    object-fit: cover;
    border-radius: 100%;
    border: 4px solid ${props => props.theme.three};
    align-self: center;

    @media (max-width: 1000px) {
      max-height: 50px;
      border: 2px solid ${props => props.theme.three};
    }
  }
`

export const Projects = styled.section`
  z-index: 100;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
  animation: ${fade} 1s linear forwards;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90vw;

  @media (min-width: 800px) {
    max-width: 80vw;
    grid-gap: 1em;
  };

  img {
    width: 50%;
    height: 400px;
    object-fit: cover; 
    display: none;
    filter: contrast(1.2);
    border-radius: 1em;

    @media (max-width: 600px) {
        align-self: center;
        width: 90vw;
        height: 350px;
        margin-bottom: 3em;
        margin-left: 0;
    };
  };


  .fade {
    display: block;
    animation: ${fade} 500ms linear forwards;
  }

  h1 {
    color: ${props => props.theme.three};
    padding-top: .2em;
    ${'' /* text-shadow: 0  0 .1em ${props => props.theme.three}; */}
    
    @media (max-width: 600px) {
      ${'' /* padding-top: .75em; */}
      font-size: 4em;
    }
  };

  h2 {
    color: ${props => props.theme.two};
    font-family: 'Staatliches';

    @media (min-width: 900px) {
      font-size: 3em;
    }
  }

  h3 {
    color: ${props => props.theme.three};
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: .3em;

    @media (max-width: 600px) {
      font-size: .8em;
      width: 95%;
      align-self: center;
    }
  }

  .project:nth-of-type(odd) {
    flex-direction: row-reverse;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  .project {
    display: flex;
    padding: 2em 0;
    grid-gap: .8em;
    transition: 1s ease; 

    @media (max-width: 600px) {
      flex-direction: column;
    }
  };

  #description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 50%;
    height: inherit;

    @media (max-width: 600px) {
      width: 100%;
    };

    p {
      color: ${props => props.theme.four};
      width: 80%;
      align-self: center;
      font-size: 1.1em;
      font-weight: 200;
      letter-spacing: .05em;
    };
  }

  .try {
    text-decoration: none;
    font-family: inherit;
    background-color: ${props => props.theme.three};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: ${props => props.theme.four};
    padding: .8em;
    border-radius: .5em;
    width: 60%;
    align-self: center;
  };
`

export const About = styled.div`
  z-index: 100;
  max-width: 1000px;
  width: 80%;
  align-self: center;
  padding: 0 0 2.5em 0;
  animation: ${fade} 1s linear forwards;

  @media (max-width: 600px) {
      padding: 0 0 1em 0;
    };

  #wrap {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    @media (max-width: 800px) {
      flex-direction: column;
      grid-gap: .5em;
    };
  }
;
  img {
    max-height: 250px;
    margin: 0 auto;
    align-self: center;
    width: 100%;
    object-fit: cover;

    @media(min-width: 600px) {
      max-height: 250px;
      border-radius: 10%;
      width: auto;
    };
  };

  #desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 0 auto;
   };

  p {
    color: ${props => props.theme.four};
    max-width: 450px;
    font-size: 1.1em;
    font-weight: 200;
    letter-spacing: .10em;

    @media (max-width: 600px) {
      font-size: .9em;
    };
  };

  h2 {
    color: ${props => props.theme.two};
    ${'' /* width: max-content; */}
    margin-top: .5em;
    font-family: 'Staatliches';

    @media (min-width: 600px) {
      font-size: 3em;
    };
  };

  #icon-wrapper {
    display: flex;
    grid-gap: 1em;
    font-size: 1.5em;
    text-decoration: none;
    margin-top: .25em;
    
    i {
      text-decoration: none;
      color: ${props => props.theme.four};
      background-color: ${props => props.theme.three};
      border-radius: 100%;
      padding: .5em;
    };
  };
`

export const ReactIcon = styled.i`
  font-size: 50em;
  color: rgba(255, 255, 255, .04);
  top: 10%;
  left: 40%;
  position: fixed;

  @media (min-width: 600px) {
    left: 40%;
  }

  @media (min-width: 800px) {
    left: 50%;
  }

  @media (min-width: 1000px) {
    left: 60%;
  }

  @media (min-width: 1300px) {
    left: 70%;
  }

  ${'' /* @media (max-width: 800px) {
    display: none;
  } */}
`

export const Footer = styled.div`
  min-width: 100vw;
  font-size: .8em;
  min-height: 50px;
  background-color: ${props => props.theme.three};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    align-self: center;
    color: white;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    width: 80%;

    @media (max-width: 400px) {
      font-size: .8em;
    }
  }
`

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 100;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
  }


input:checked + .slider {
  background-color: ${props => props.theme.three};
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

`