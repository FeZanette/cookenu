import styled from "styled-components"

export const PageContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 20px;
 
 /* min-width: 30vw; */
 /* max-width: 95vw; */
img {
    width: 80vw;
    margin-bottom: 20px;
}
h1 {
    font-size: 1.4rem;
    font-weight: bold;
}
p {
    min-width: 50vw;
    max-width: 80vw;
    margin-top: 10px;
    text-align: justify;
}
`