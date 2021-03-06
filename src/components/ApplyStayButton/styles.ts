import styled from 'styled-components';

export const ApplyButtonWrapper = styled.div`
    min-width: 20rem;
    width: 49.2%;
    height: 23.9375rem;
    background-color: #ffffff;
    box-shadow: 0 0.1875rem 0.625rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.3125rem;
    transition: all 0.4s;
    padding: 4.375rem 1.375rem 3.75rem;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #00be91;
        color: #ffffff;
        transform: scale(1.01);
    }
   
    &:nth-child(n+3) {
        margin-top: 1.5625rem;
    }
`

export const ApplyButtonTitleWrapper = styled.div`
    height: 10.0125rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ApplyButtonTitle = styled.span`
    font-size: 1.875rem;
    font-family:; 'Noto Sans Kr'
    font-weight: bold;
`

export const ApplyButtonIcon = styled.img`
    weight: 4.6875rem;
    height: 4.6875rem;
`

export const ApplyDescriptionWrapper = styled.div`
    height: 3.625rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ApplyDescription = styled.div`
    padding: 0.35rem 0;
    width: 100%;
    font-size: 1.125rem;
    display: flex;
    justify-content: center;
    font-family:; 'Noto Sans Kr'
`