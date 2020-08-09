import styled, { keyframes } from 'styled-components';

const leftToRightAnimation = keyframes`
  0% {
    left: -10rem;
  }
  100% {
    left: 22.2875rem;
  }
`;

export const ChattingWrapper = styled.div<{ isChatOpened: string }>`
  display: inline-block;
  position: absolute;
  width: 28.09375rem;
  background-color: white;
  height: 41.6875rem;
  border-radius: 1.875rem;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.21);
  overflow: hidden;
  bottom: 1.75rem;
  left: ${(props) => (props.isChatOpened ? '22.2875rem' : '-10rem')};
  transition: left 0.5s;
`;

export const ChattingCloseBtn = styled.img`
  position: absolute;
  top: 2.21875rem;
  right: 1.70625rem;
  width: 1.2875rem;
  height: 1.2875rem;
  cursor: pointer;
`;

export const ChattingHeader = styled.p`
  height: 5.425rem;
  padding: 1.525rem 1.8375rem;
  font-size: 1.875rem;
  font-weight: 700;
  color: #59545d;
  box-sizing: border-box;
  box-shadow: 0 0.5px 3px 0 rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid #e9e9e9;
`;

export const ChattingMessageWrapper = styled.div`
  height: 30.13rem;
`;

export const ChattingInputWrapper = styled.div`
  width: 28.09375rem;
  height: 6.063rem;
  display: flex;
  border-top: 1px solid #e9e9e9;
  align-items: center;
`;

export const ChattingMessageInput = styled.input`
  width: 22rem;
  margin-left: 1.813rem;
  font-size: 1.313rem;
  border: none;
`;

export const SendMessageButton = styled.img`
  width: 1.5rem;
  height: 1.25rem;
`;
