import styled from "styled-components";
import {Container} from './Container';
import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import {useState, useEffect} from "react";


const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);

`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
  align-items: center;
   padding: 2rem 0;
`;   /*отвечает за правильное полодение всего , что будет лежать внутри*/

const Title = styled.a.attrs({
    href: '/',
    })`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
  font-weight: var(--fw-bold);
`;  /*будет отедльной ссылкой аттрз*/

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  //font-weight: var(--fw-bold);
  text-transform: capitalize  ;

`;


export const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme=()=>setTheme(theme === 'light' ? 'dark' : 'light');


    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme]);

    return <HeaderEl>
        <Container>
            <Wrapper>
                <Title>
                    Hello there!
                </Title>
                <ModeSwitcher onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <IoMoonOutline   size="14px"/>
                    ):(
                        <IoMoon size="14px"/>
                    )}
                   <span style={{margin: '0.75rem'}}>{theme}theme</span></ModeSwitcher>
            </Wrapper>
        </Container>
    </HeaderEl>
}