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
`
const Box = styled.div`
    text-align: right;
    padding: 0 10% 0 0;

    @media screen and (max-width: 1800px) {
        text-align: left;
        padding: 0 0 0 3%;
    }
`
const Name = styled.h1`
    font-size: 4rem;
    margin: 1rem 0 .25rem;
    padding: 0;
`
const Title = styled.h3`
    font-family: 'ff-ernestine-pro', serif;
    font-size: 1.42rem;
    margin: 0;
    padding: 0;
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
        flex-direction: row;
        justify-content: flex-end;
        align-content: flex-start;
    }
`
const Link = styled.a`
    font-weight: bold;
    font-size: 2rem;
    color: inherit;
    text-decoration: none;
    padding: 1rem;

    @media screen and (max-width: 1800px) {
        padding: 0 2rem;
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
    padding: 0 .5rem;

    @media screen and (max-width: 1800px) {
        padding: 0 2rem;
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
                    <Icon src={gitcat}/>
                    <Icon src={linkedin}/>
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