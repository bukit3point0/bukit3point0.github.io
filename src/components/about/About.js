import React from 'react'
import styled from 'styled-components'

import Portfolio from '../portfolio/Portfolio'
import Resume from '../resume/Resume'
import Contact from '../contact/Contact'

const Page = styled.div`
    background-color: #a4b494;
    color: #382933;
    color: #3b5249;
`

const AboutMe = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 80vw;

    @media screen and (max-width: 1800px) {
        height: 100vh;
        width: 100vw;
    }
`

const Hello = styled.h1`
    font-size: 5rem;
    margin: 0 4%;
    text-align: center;
    font-family: 'ff-ernestine-pro', serif;
`
const ParaCont = styled.div`
    display:flex;
    width: 80%;
    justify-content:center;
    margin: auto;
    height: 40%;
    align-items: center;
    flex-direction: column;
`
const Para = styled.p`
    padding: 0 5%;
    text-align: justify;
    font-size: 2rem;
    font-family: 'eskorte-latin', serif;
`
const Para2 = styled(Para)`
    width: 70%;
    font-size: 1.5rem;
    margin: 0;
`

const About = () => {
    return (
        <Page id="about">
            <AboutMe>
                         
                <ParaCont>
                    <Hello>Hi. I'm Connie.</Hello>
                    <Para>I build websites.</Para>
                    <Para2>
                        I can't guarantee that it will always appease Cthulhu, but I <em>can</em> say that I've never angered Cthulhu.
                    </Para2>
                </ParaCont>

            </AboutMe>
            
            <Portfolio/>

            <Resume/>

            <Contact/>

        </Page>
    )
}

export default About