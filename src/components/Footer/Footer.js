import styled from "styled-components";


export default function Footer({children}) {

    return (
        <>

            <ContainerFooter>
               {children}
            </ContainerFooter>

        </>
    )
}

const ContainerFooter = styled.div`
    margin: 0 auto; 
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
    
`