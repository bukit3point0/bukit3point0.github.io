import React from 'react'
import styled from 'styled-components'

import gitcat from '../images/gitcat.svg'
import linkedin from '../images/linkedin.png'

import Footer from './Footer'

// fonts to use - Adobe licensed pack of styled created by women
/* font-family: 'edita', serif; */
/* font-family: 'maiola', serif; */
/* font-family: 'edita-small', serif; */
/* font-family: 'source-serif-pro', serif; */
/* font-family: 'eskorte-latin', serif; */
/* font-family: 'ff-ernestine-pro', serif; */

const Page = styled.div`
    float: right;
    width: 20%;
    height: 100vh;
    font-family: 'Merriweather', serif;
    font-weight: normal;
    background-color: #519872;
    position: fixed;
    margin-left: 80%;
    color: #382933;

    @media screen and (max-width: 1800px) {
        width: 100%;
        height: 20vh;
        margin: 0;
        display: flex;
        justify-content: space-between;

    }
    
    @media screen and (max-width: 1650px) {
        align-items: center;
    }

    @media screen and (max-width: 815px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Box = styled.div`
    text-align: right;
    padding: 0 10% 0 0;

    @media screen and (max-width: 1800px) {
        text-align: left;
        padding: 0 0 0 3%;
    }

    @media screen and (max-width: 815px) {
        margin-top: 2rem;
        padding: 0;
    }
`
const Name = styled.h1`
    font-size: 4rem;
    margin: 1rem 0 .25rem;
    padding: 0;

    @media screen and (max-width: 1650px) {
        font-size: 3rem;
        margin: 0 0 .25rem;
    }

    @media screen and (max-width: 1501px) {
        font-size: 2.75rem;
    }

    @media screen and (max-width: 1172px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 1041px) {
        font-size: 2.25rem;   
    }

    @media screen and (max-width: 910px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 815px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 410px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 340px) {
        font-size: 2rem;   
    }
`
const Title = styled.h3`
    font-family: 'ff-ernestine-pro', serif;
    font-size: 1.42rem;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 910px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 815px) {
        font-size: 1.5rem;
        text-align: center;
    }

    @media screen and (max-width: 410px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 340px) {
        font-size: 1.1rem;   
    }
`
const Links = styled.div`
    text-align: center;
    margin: 5rem 0 0;
    font-size: 1.25rem;

    @media screen and (max-width: 1800px) {
        margin: 0 3rem;
        display: flex;
        align-items: center;
        align-content: center;
    }
`
const Nav = styled.nav`
    display:flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1800px) {
        visibility: hidden;
    }
`
const Link = styled.a`
    font-weight: bold;
    font-size: 2rem;
    color: inherit;
    text-decoration: none;
    margin: 1rem;

    @media screen and (max-width: 1800px) {
        margin: 0 2rem;
    }

    @media screen and (max-width: 1501px) {
        font-size: 1.75rem;
        margin: 0 1.5rem;
    }

    @media screen and (max-width: 1337px) {
        margin: 0 1rem;
    }

    @media screen and (max-width: 1172px) {
        font-size: 1.5rem;
        margin: 0 0.75rem;   
    }

    @media screen and (max-width: 1041px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 943px) {
        margin: 0 0.5rem;
    }

    @media screen and (max-width: 815px) {
        width: 0;
        margin: 0;
    }

    @media screen and (max-width: 521px) {
        width: 40%;
        margin: 0.5% 0;
    }

    @media screen and (max-width: 410px) {
        font-size: 1rem;
    }
`
const Icons = styled.div`
    margin: 5rem 0 2rem;

    @media screen and (max-width: 1800px) {
        margin: 0;
    }
`
const Icon = styled.img`
    width: 40px;
    margin: 0 .5rem;

    @media screen and (max-width: 1800px) {
        padding: 0 2rem;
    }

    @media screen and (max-width: 1466px) {
        padding: 0 1rem;
    }

    @media screen and (max-width: 1337px) {
        padding: 0 .5rem;
    }

    @media screen and (max-width: 910px) {
        width: 35px;
    }

    @media screen and (max-width: 815px) {
        padding: 0 1rem;
    }

    @media screen and (max-width: 521px) {
        width: 25px;
    }
`
const Foot = styled.div`
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 1800px) {
        visibility: hidden;
    }
`

const Header = () => {

    return (
        <Page>
            
            <Box>
                <Name>Connie Reynolds</Name>
                <Title>Fullstack Web Developer</Title>          
            </Box>

            <Links>
                <Icons>
                    <a href="https://github.com/bukit3point0">
                        <Icon src={gitcat}/>
                    </a>
                    <a href="https://www.linkedin.com/in/conniereynolds/">
                        <Icon src={linkedin}/>
                    </a>
                </Icons>

                <Nav>
                
                    <Link href="#about">About</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#resume">Resume</Link>
                    <Link href="#contact">Contact</Link>   
                
                </Nav>
            </Links>

            <Foot>
                <Footer/>
            </Foot>

        </Page>
    )
}

export default Header