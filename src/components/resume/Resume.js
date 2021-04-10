import React from 'react'
import styled from 'styled-components'

import resume from './Connie Reynolds resume.jpg'
import downloadResume from './Connie Reynolds resume.pdf'

const Page = styled.div`
    background-color: #a4b494;
    color: #3b5249;
    width: 80vw;
    font-family: 'edita-small', serif;
    height: 100vh;
    font-size: 2.5rem;

    @media screen and (max-width: 1800px) {
        width: 100vw;
        height: 80vh;
    }
`
const PageTitle = styled.h1`
    font-size: 4rem;
    padding: 2rem 0 0 2rem;
    margin: 0;

    @media screen and (max-width: 1172px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 934px) {
        padding: 0 0 0 2rem;
    }

    @media screen and (max-width: 910px) {
        font-size: 2.75rem;
    }
`
const ResumeDiv = styled.div`
    display:flex;
    justify-content: center;
`
const ResumePDF = styled.img`
   margin: auto;
   height: 80vh;

   @media screen and (max-width: 1800px) {
       height: 60vh;
   }

   @media screen and (max-width: 934px) {
       padding-top: 2rem;
   }
`
const Download = styled.a`
    position: absolute;
    margin: auto;
    top: 250%;
    background-color:#3b5249;
    border-radius:1.5em;
    color:#a4b494;
    text-decoration: none;
    font-size: 1.2rem;
    padding:1em 1.5em;

    @media screen and (max-width: 1800px) {
        top: 220%;
    }
`

const Resume = () => {
    return (
        <Page id="resume">
            <PageTitle>Resume</PageTitle>
            <ResumeDiv>
                <ResumePDF src={resume}/>
                <Download
                    href={downloadResume}
                    target="_blank"
                >
                    Download My Resume
                </Download>
            </ResumeDiv>
        </Page>
    )
}

export default Resume