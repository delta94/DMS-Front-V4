import styled, { css } from 'styled-components';
import { globalColor } from '../../../GlobalStyle';

const VerticalCenter = css`
  display: flex;
  align-items: center;
`;
export const LogInContnetWrapper = styled.div`
  display: flex;
  width: 24.75rem;
  flex-direction: column;
  justify-content: space-between;
  height: 11rem;
`;

export const LoginBottom = styled.div`
  ${VerticalCenter}
  justify-content: space-between;
`;
export const AutoLoginWrapper = styled.div`
  ${VerticalCenter}
  justify-content: space-between;
`;

export const AutoLoginCheckbtn = styled.input`
  ${VerticalCenter}
  width: 2.25rem;
  height: 1.188rem;
  margin-right: 0.4375rem;
  appearance: none;
  background-color: #dcdcdc;
  box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
  border-radius: 1rem;
  cursor: pointer;
  &:checked {
    background-color: ${globalColor};
    &::after {
      margin-left: 1.25rem;
    }
  }
  &::after {
    content: '';
    margin-left: 0.1875rem;
    display: block;
    width: 0.8125rem;
    height: 0.8125rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);
    transition: 0.5s;
  }
`;

export const ForgetPWLink = styled.span`
  cursor: pointer;
`;

export const SignInLinkWrapper = styled.div`
  ${VerticalCenter}
  width: 100%;
  height: 3.75rem
  border-radius: 0 0 1.455rem 1.455rem;
  font-size: 0.875rem;
  background-color: #eeefe7;  
  justify-content: center;
`;

export const SignInLink = styled.span`
  margin-left: 0.7rem;
  font-weight: bold;
  cursor: pointer;
`;
