import styled from 'styled-components';


const Main = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:20px auto;
    text-align:center;


    @media(max-width:900px){
        width:100%

    }
`;

const Card = styled.div`
    width:600px;
    margin: auto;
    text-align: center;
    height: 30px;
    background-color:#FFFFFF;
`;

const Cardimage = styled.div`

`;


export {Card,Main};