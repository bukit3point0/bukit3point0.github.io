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
`
const PageTitle = styled.h1`
    font-size: 4rem;
    padding: 2rem 0 0 2rem;
    margin: 0;
`
const ResumeDiv = styled.div`
    display:flex;
    justify-content: center;
`
const ResumePDF = styled.img`
   margin: auto;
   height: 80vh;
`
const Download = styled.a`
    position: absolute;
    /* margin: 35% auto 0; */
    margin: auto;
    top: 250%;
    background-color:#3b5249;
    border-radius:1.5em;
    color:#a4b494;
    text-decoration: none;
    font-size: 1.2rem;
    padding:1em 1.5em;
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