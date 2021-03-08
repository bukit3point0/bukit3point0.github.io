import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

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
`
const Box = styled.div`
    text-align: right;
    padding: 0 10% 0 0;
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
`
const Link = styled.h2``
const Icons = styled.div`
    margin: 5rem 0 0;
`
const Icon = styled.img`
    width: 40px;
    padding: 0 .5rem;
`
const Foot = styled.div`
    position: absolute;
    bottom: 0;
`

const Header = () => {

    const history = useHistory()

    const aboutLink = () => {
        history.push('/')
    }

    const portfolioLink = () => {
        history.push('/portfolio')
    }

    const resumeLink = () => {
        history.push('/resume')
    }

    const contactLink = () => {
        history.push('./contact')
    }

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
            
                <Link onClick={aboutLink}>About</Link>
                <Link onClick={portfolioLink}>Portfolio</Link>
                <Link onClick={resumeLink}>Resume</Link>
                <Link onClick={contactLink}>Contact</Link>   
            </Links>

            <Foot>
                <Footer/>
            </Foot>

        </Page>
    )
}

export default Header