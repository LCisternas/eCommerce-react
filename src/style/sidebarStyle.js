import styled from "styled-components";

export const Boton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
` 
export const SidebarContenedor = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    background-color: white;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const Close = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
        margin-right: 2rem;
        border: none;
        font-size: 4rem;
        background-color: transparent;
        color: green;
        cursor: pointer;
    }
`
export const SidebarItems = styled.div`
    height: 60% ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    a {
        text-decoration: none;
        font-size: 3.5rem;
        font-weight: 600;
        color: #171c48;
    }
`
export const SidebarSettings = styled.div`
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
        font-size: 3.5rem;
        color: #171c48;
    }
`