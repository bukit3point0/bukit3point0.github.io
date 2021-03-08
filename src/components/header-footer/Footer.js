import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    background-color: #519872;
    justify-content: center;
    box-sizing:border-box;
    margin: 1rem 0 0;
    padding: 2rem 2rem 1rem;
    color: #382933;
`
const Copyright = styled.p`
    text-align:center;
    display:block;
    margin: 0;
    padding: .35rem 0;
    font-size: .8rem;
`
const FreePik = styled.a`
    color: #382933;
    text-decoration: none;
`

const Footer = () => {
    return (
        <Page>

            <Copyright>© Connie Reynolds 2021</Copyright>
            <Copyright><FreePik href='https://www.freepik.com/vectors/mockup'>Mockup vector created by brgfx - www.freepik.com</FreePik></Copyright>

        </Page>
    )
}

export default Footer