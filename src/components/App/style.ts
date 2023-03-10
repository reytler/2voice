import styled from "styled-components";

export const Conteiner = styled.div`
    height: 100%;

    .controlsarea{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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

export const Btnssarea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin: 15px 0 15px 0;
    .resume{
        margin-right: -6px;
    }
`;

export const Controlsarea = styled.div`

    margin: 15px 0 15px 0;

    input[type='range'] {
        cursor: pointer;
    }

    input[type='range'],
    input[type='range']::-webkit-slider-runnable-track,
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    input[type='range']::-webkit-slider-runnable-track {
        width: 200px;
        height: 10px;
        background: rgba(102, 52, 127,0.5);
        border-radius: 5px;
    }

    input[type='range']::-webkit-slider-thumb {
        width: 20px;
        height: 20px;
        margin-top: -4.5px;
        background-color: rgb(102, 52, 127);
        border-radius: 60px;
        border: 1px solid #66347F;
    }

    span{
        color: rgba(102, 52, 127,0.9);
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
    }

    .divslider{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 350px;
    }
`;

export const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: rgba(102,52,127,1);
    background: transparent;
    width: 40px;
    height: 40px;
    cursor: pointer;

    padding: 7px;

    border: solid 1px rgba(102,52,127,0.5);
    border-radius: 5px;

    &:active{
        border: 1px solid rgba(102,52,127,1);
    }
`;