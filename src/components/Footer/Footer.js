import styled from "styled-components";


export default function Footer() {

    return (
        <>

            <ContainerFooter>
                <h1> Footer App</h1>
            </ContainerFooter>

        </>
    )
}

const ContainerFooter = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    position: fixed;
    margin-top: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    z-index: 1;
    margin: 0 auto;
    min-height: 70px;
    padding: 25px 115px;
    font-size: 18px;
    color: #293845;
    text-align: center;
`