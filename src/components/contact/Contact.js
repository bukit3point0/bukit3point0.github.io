import React from 'react'
import styled from 'styled-components'

import Footer from '../header-footer/Footer'

const Page = styled.div`
    background-color: #3b5249;
    height: 100vh;
    color: #a4b494;
    font-family: 'edita-small', serif;
    width: 80vw;

    @media screen and (max-width: 1800px) {
        height: 80vh;
        width: 100vw;
    }
`
const PageTitle = styled.h1`
    font-size: 4rem;
    padding: 2rem 0 0 2rem;
    margin: 0;

    @media screen and (max-width: 1172px) {
        font-size: 3rem;
    }
    
    @media screen and (max-width: 910px) {
        font-size: 2.75rem;
    }
`

const Container = styled.div`
    width: 50%;
    margin: 5rem auto;

    @media screen and (max-height: 975px) {
        height: 58%;
    }

    @media screen and (max-width: 1800px) {
        margin: 1rem auto 5rem;
        width: 45%;
    }

    @media screen and (max-width: 1172px) {
        margin: 1rem auto;
    }
`
const LetsTalk = styled.p`
    font-family: 'ff-ernestine-pro', serif;
    font-size: 1.25rem;

    @media screen and (max-width: 1172px) {
        font-size: 1rem;
    }
`
const Form = styled.form``
const FormGroup = styled.div``
const FormRow = styled.div``
const Col = styled.div`
    margin: 2rem 0;

    @media screen and (max-height: 975px) {
        margin: 1rem 0;
    }
`
const FormControl = styled.input`
    width: 90%;
    font-size: 1.25rem;
    font-family: 'ff-ernestine-pro', serif;

    @media screen and (max-width: 1172px) {
        font-size: 1rem;
    }
`
const Hidden = styled.input`
    display: none;
`
const TextArea = styled.textarea`
    width: 90%;
    font-size: 1.25rem;
    font-family: 'ff-ernestine-pro', serif;

    @media screen and (max-width: 1172px) {
        font-size: 1rem;
    }
`
const Submit = styled.button`
    margin: 2rem 0;
    font-size: 1.25rem;
    background-color:inherit;
    border: 2px solid #a4b494;
    padding: .5rem;
    border-radius: 10px;
    color: #a4b494;
    float: right;

    @media screen and (max-width: 1800px) {
        margin: 1rem 0;
    }

    @media screen and (max-width: 1172px) {
        margin: 1rem auto 5rem;
        float: none;
    }
`

const Foot = styled.footer`
    visibility: hidden;
    /* margin: 60vh 0 0; */
    margin: 0;
    padding: 0;
    

    @media screen and (max-width: 1800px) {
        visibility: visible;
    }
`

const Contact = () => {
    return (
        <Page id="contact">
            <PageTitle>Contact Me</PageTitle>

            <Container>
                <LetsTalk>
                    I'd love to hear from you! Let's talk about your next project.
                </LetsTalk>
                <Form target="_blank" action="https://formsubmit.co/2ca42bd3e8f3b791489d048e7fc2ac88" method="POST">
                    <FormGroup>
                        <FormRow>
                            <Col>
                                <FormControl type="text" name="name" placeholder="Full Name" required/>
                            </Col>
                            <Col>
                                <FormControl type="email" name="email" placeholder="Email Address" required/>
                            </Col>
                        </FormRow>
                    </FormGroup>
                    <Hidden type="text" name="_honey">
                    </Hidden>
                    <Hidden type="hidden" name="_captcha" value="false">
                    </Hidden>
                    <FormGroup>
                        <TextArea placeholder="Your Message" name="message" rows="10" required></TextArea>
                    </FormGroup>
                    <Submit type="submit">Submit Form</Submit>
                </Form>
            </Container>

            <Foot>
                <Footer/>
            </Foot>
        </Page>
    )
}

export default Contact