import { Footer } from '../Footer'; 
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPrimaryLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1439px){
  
    }
    @media screen and (max-width: 1023px){
     
    }
    @media screen and (max-width: 767px){
     
    }
    @media screen and (max-width: 500px) {
     
    }
    
`
export const PrimaryLayout = ({children}) => {
    return (
        <StyledPrimaryLayout>
            <Header/>
            <Outlet></Outlet>
            <Footer></Footer>
        </StyledPrimaryLayout>
    )
}