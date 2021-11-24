import styled from "styled-components";

export const Nav = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
`
export const Logo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #171c48;
    h1 {
        font-size: 3rem;
    }
    i {
        margin: 0 2rem;
        font-size: 3rem;
        margin-right: 1rem;
        color: green;
    }
    @media all and (min-width: 768px) {
        width: 25%;
        justify-content: center;
    }
`
export const Menu = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 2rem;
    i {
        font-size: 3.5rem;
        color: green;
    }
    @media all and (min-width: 767px) {
        display: none;
    }
`
export const Boton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
`
export const Sidebar = styled.div`
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
export const Items = styled.div`
    height: 100%;
    width: 50%;
    display: none;
    @media all and (min-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        a {
            text-decoration: none;
            font-size: 2.3rem;
            font-weight: 600;
            transition: all 0.2s;
            color: #171c48;
        }
        a:hover {
            border-bottom: 2.5px solid green;
            padding-bottom: 3px;
        }
    }
`
export const Settings = styled.div`
    height: 100%;
    width: 25%;
    display: none;
    @media all and (min-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: center;
        i {
            font-size: 3.5rem;
            margin: 0 1.5rem;
            color: #171c48;
        }
    }
`