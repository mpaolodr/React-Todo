import { createGlobalStyle } from "styled-components";

export const TodoStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .App {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 10px;
    }

    .title {
        font-size: 3rem;
        color: white;
    }

    .forms-container {
        background: #175451;
        height: 300px;
        width: 25%;
        padding: 10px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        border: 10px solid #964b00;
    }

    .list-container {
        width: 70%;
        height: 100vh;
        border: 2px solid black;
        padding: 10px 20px;
        background-color: #964b00;
    }
`;
