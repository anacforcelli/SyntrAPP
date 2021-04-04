import styled from 'styled-components';

export const Body = styled.body`
    width:100vw;
    height:100vh;
    background-color: rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
    display:flexbox;

    main{
        width: 550px;
        height: 36rem;

        background: #FFFFFF;
        border-radius: 12px;
        
    }

    main .acesso{
        height:50px;
        display:flexbox;
        padding-top:19rem;
        align-items:bottom;
        justify-content:center;
    }

    main button{
        width: 100px;
        height: 2rem;

        margin:0.2rem 0.3rem;

        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        line-height: 21px;
        
        background: #FFEF62;
        color:white;
        border-radius: 60px;
        border: 3px solid rgba(0,0,0,0.5);

        position:relative;
        top:-3rem;
    }

    main button:hover{
        background-color:#FFE921;
    }

    main .voltar{
        display:flexbox;
        align-items:top;
        justify-content:start;
        height:10px;
        margin:0.4rem 0.8rem;
    }

    main .logo{
        display:flexbox;
        align-items:top;
        justify-content:center;
        height:80px;
    }

    main p{
        margin:0 1.5rem;
        align-text:left;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 1.4rem;
    }

    main form{
        display: flex;
        flex-flow: column;
    }

    main input{
        background-color:#FFF8B7;
        border-bottom:3px solid rgba(30, 17, 107, 0.4);
        width: 375px;
        height: 2.4rem;
        margin-bottom:1rem;
        margin-left:1.8rem;
        justify-content:end;
    }

    main label{
        margin-bottom:0.5rem;
        margin-top:0.5rem;
        margin-left:1.5rem;

        color:rgba(0,0,0,0.8);
        font-family: Roboto;
        weight: 700;
        font-size: 1.2rem;
        font-weight: bold;
        justify-content:start;
    }

    main form #span{
        margin:0.5rem 1.7rem;

        font-family: Roboto;
        font-style: normal;
        font-weight: 200;
        font-size: 0.8rem;
        justify-content:start;

        color: rgba(0, 0, 0, 0.7);
    }
`;

export const CampoPrencher = styled.main` 
    
    
`;