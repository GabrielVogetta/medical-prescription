import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input{
        border: 0;
        outline: 0;

        /* font-family: 'Montserrat', sans-serif; */
        font-family: 'Nunito', sans-serif;
        /* font-family: 'Red Hat Mono', monospace; */
    }

    button{
        cursor: pointer;
    }

    body{
        background-color: var(--primary);
    }

    :root{
        --white: #fdfdfd;
        --primary: #2e4450;
        --secondary: #89dee2;
    }
`;