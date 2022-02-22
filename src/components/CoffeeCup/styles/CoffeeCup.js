import styled, { keyframes } from 'styled-components';

// animations

export const Steam1Anim = keyframes`
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(-20px) scale(1); opacity: 0;}
`
export const Steam2Anim = keyframes`
  0% {transform: translateY(0) translateX(0) scale(0.25); opacity: 0.2;}
  100% {transform: translateY(-200px) translateX(20px) scale(1); opacity: 0;}
`

// styles

export const Container = styled.div`
  ${'' /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */}
  margin: 0 auto;
  text-align: center;
  transform: translate(1em, 0);
  transform: scale(.8) translate(1.2em, 0);

  @media (max-width: 600px) {
    transform: scale(.6) translate(1.2em, 0);
    margin: -2em 0;
  }

  @media (max-width: 400px) {
    transform: scale(.4) translate(1.2em, 0);
    margin: -3em 0;
  }

  @media (max-width: 300px) {
    transform: scale(.3) translate(1.2em, 0);
  }

`
export const Steam1 = styled.div`
  -webkit-animation: ${Steam1Anim} 4s ease-out infinite;
  animation: ${Steam1Anim} 4s ease-out infinite;
`

export const Steam2 = styled.div`
  -webkit-animation: ${Steam2Anim} 4s ease-out 0.5s infinite;
  animation: ${Steam2Anim} 4s ease-out 0.5s infinite;
`

export const Steam3 = styled.div`
  -webkit-animation: ${Steam1Anim} 4s ease-out 1s infinite;
  animation: ${Steam1Anim} 4s ease-out 1s infinite;
`
export const Steam4 = styled.div`
  -webkit-animation: ${Steam2Anim} 4s ease-out 1.5s infinite;
  animation: ${Steam2Anim} 4s ease-out 1.5s infinite;
`

export const Cup = styled.div`
  z-index: 1;
`

export const CupBody = styled.div`
  position: absolute;
  height: 200px;
  width: 300px;
  border-radius: 0 0 150px 150px;
  background-color: white;
  margin: auto;
  display: inline-block;
  overflow: hidden;
  z-index: 1;
`

export const CupShade = styled.div`
  position: relative;
  height: 300px;
  width: 200px;
  background-color: #F3F3F3;
  display: inline-block;
  margin-left: 42%;
  margin-top: -3px;
  transform: rotate(50deg);
  z-index: 1;
`

export const CupHandle = styled.div`
  position: relative;
  height: 75px;
  width: 90px;
  border-radius: 0 150px 150px 0;
  border: 15px solid #F3F3F3;
  margin-bottom: 95px;
  margin-left: 250px;
  display: inline-block;
  z-index: 0;
`

export const Saucer = styled.div`
  position: absolute;
  height: 30px;
  width: 300px;  
  border-radius: 0 0 100px 100px;
  background-color: ${props => props.theme.three};
  margin-top: 0;
  margin-left: 5px;
  z-index: 2;
`

// export const Shadow = styled.div`
//   position: absolute;
//   height: 10px;
//   width: 300px;
//   border-radius: 50%;
//   margin-top: 2em;
//   margin-left: 6px;
//   background-color: #7bb8d4;
// `