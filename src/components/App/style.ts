import styled from "styled-components";

export const Conteiner = styled.div`
    height: 100%;
`;

export const H3 = styled.h3`
    text-align: center;
    margin: 20px 0 0 0;
    color: rgba(102,52,127,1);
`;

export const Textarea = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0;

    .inputtext{
        border: 3px solid rgba(102,52,127,0.2);
        border-radius: 5px;
        &:focus{
            outline: none !important;
            border: 3px solid rgba(102,52,127,1);
        }

        padding: 30px;
        letter-spacing: 1px;
        word-spacing: 2px;
        text-align: justify;
        font-size: 14px;
        line-height: 20px;
    }
`;

export const Controlsarea = styled.div``;

export const Button = styled.span`
    display: flex;
    color: rgba(102,52,127,1);
    border: none;
    cursor: pointer;
    background: transparent;

    &:focus{
        border: rgba(102,52,127,1) !important;
    }
`;