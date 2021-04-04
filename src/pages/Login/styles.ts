import styled from 'styled-components';

export const InputLogin = styled.div` 
    display: flex;
    flex-flow: column;
    justify-content:center;
    align-items:center;
    margin-top:5rem;

    h1{
        height: 47px;

        font:700 1.8rem Lobster;
        color: #000000;
    }

    form{
        display: flex;
        flex-flow: column;
        justify-content:center;
        align-items:center;
    }

    input{
        background-color:#FFF8B7;
        border-bottom:3px solid rgba(30, 17, 107, 0.4);
        width: 512.25px;
        height: 2.4rem;
        margin-bottom:1.4rem;
    }

    label{
        margin-bottom:;
        color:rgba(0,0,0,0.85);
        font-family: Roboto slab;
        weight: 700;
        font-size: 1.2rem;
    }

    form button{
        width: 512.25px;
        height: 3.6rem;

        font-family: Roboto;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;

        background: #FFEF62;
        border-radius: 60px;
        border: 3px solid rgba(0,0,0,0.5)
    }

    form button:hover{
        background-color:#FFE921;
    }

    button{
        background-color:white;
        border:0px;
        height:0 auto;
    }

    button h6{
        margin:0.3rem;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 1.2rem;

        color: #FFEF62;
    }

    button h6:hover{
        color:#FFE921;
        background-color:rgba(0,0,0,0.05);
    }
`;