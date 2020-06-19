import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -500px, 0);
    animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
  }
  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
  }
`

const fadeOut = keyframes`
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
  }
  100% {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -500px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
  }
`

export const ApplyGoingoutTimeWrapper = styled.div`
  width: 24.9375rem;
  height: 19rem;
  box-sizing: border-box;
  border: 1px solid #bfbfbf;
  border-radius: 1rem;
  box-sizing: border-box;
  animation: .4s ${props=> props.show ? fadeIn : fadeOut};
  will-change: transform;
  position: absolute;
  bottom: -20.125rem;
  padding: 1.875rem;
`