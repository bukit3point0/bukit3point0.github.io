import React, {useState} from 'react'
import styled from 'styled-components'
import 'react-responsive-modal/styles.css'
import {Modal} from 'react-responsive-modal'

import robert from '../images/robert-gainey.png'
import watermyplants from '../images/watermyplants.png'
import marketplace from '../images/africanmarketplace.png'

const Page = styled.div`
    background-color: #3b5249;
    height: 100vh;
    font-family: 'edita-small', serif;
    width: 80%;

    @media screen and (max-width: 1800px) {
        height: 80vh;
        width: 100%;
    }
`
const PageTitle = styled.h1`
    color: #a4b494;
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
const PortfolioDiv = styled.div`
    padding: 4rem 0 0;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;

    @media screen and (max-width: 580px) {
        /* width: 70%; */
        padding: 2rem auto 0;
    }
`
const PortfolioObj = styled.div`
    width: 30%;
    display:flex;
    flex-direction:column;
    align-items: center;
    cursor: pointer;
    color: #a4b494;

    @media screen and (max-width: 934px) {
        width: 35%;
    }

    @media screen and (max-width: 580px) {
        width: auto;
    }
`
const PortfolioImg = styled.img`
    width: 80%;
    padding: 2rem;
    margin: 2rem 0 0;

    @media screen and (max-width: 580px) {
        width: 30%;
        margin: 1rem 0 0;
        padding: 1rem;
    }
`
const PortfolioTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;

    @media screen and (max-width: 425px) {
        text-align: center;
    }
`
const SampleImage = styled.img`
    width: 100%;
    
`
const Website = styled.h2`
    text-align:center;
    font-family: 'source-serif-pro', serif;
`
const Description = styled.p`
    font-family: 'source-serif-pro', serif;    
`
const List = styled.ul`
    font-family: 'source-serif-pro', serif;
    text-align: justify;
`
const ItemList = styled.li`
    font-family: 'source-serif-pro', serif;
`
const LinksBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const GoTo = styled.button`
    font-family: 'source-serif-pro', serif;
    width: 20%;
    padding: .25rem;
    margin: .25rem 2rem .25rem 0;
    border: none;
    background-color: inherit;
    font-weight: bold;
    font-size: 1.2rem;
`
const GoToLink = styled.a` 
    color: black;
`

const Portfolio = () => {

    const [openRobert, setOpenRobert] = useState(false)
    const [openWater, setOpenWater] = useState(false)
    const [openMarket, setOpenMarket] = useState(false)

    const openRobertModal = () => setOpenRobert(true)
    const closeRobertModal = () => setOpenRobert(false)

    const openWaterModal = () => setOpenWater(true)
    const closeWaterModal = () => setOpenWater(false)

    const openMarketplace = () => setOpenMarket(true)
    const closeMarketplace = () => setOpenMarket(false)

    return (
        <Page id="portfolio">

            <PageTitle>Portfolio</PageTitle>

            <PortfolioDiv>
            
                <PortfolioObj onClick={openRobertModal}>
                    <PortfolioImg src={robert} alt="www.robertgainey.com"/>
                    <PortfolioTitle>Robert Gainey, Author</PortfolioTitle>
                </PortfolioObj>
                <Modal  open={openRobert} onClose={closeRobertModal} center>
                    <div>
                        <SampleImage src={robert} alt="www.robertgainey.com" />
                        <Website>Robert Gainey, Author</Website>
                        <Description>
                        A static site created to allow the author to announce new publications, sell current works, and have fans connect with/contact the author on social media
                        </Description>
                        <List>
                            <ItemList>
                                Built with React; formsubmit.co used to create a simple submission form
                            </ItemList>
                            <ItemList>
                                Communicated with the author to ensure a fully-functional website to specifications
                            </ItemList>
                            <ItemList>
                                Designed the site to be easily updated for future releases
                            </ItemList>
                        </List>
                        
                        <LinksBox>
                            <GoTo>
                                <GoToLink href="https://www.robertgainey.com/" target="_blank" rel="noreferrer">
                                    Website
                                </GoToLink>
                            </GoTo>
                        </LinksBox>
                    </div>

                </Modal>

                <PortfolioObj onClick={openWaterModal}>
                    <PortfolioImg src={watermyplants} alt="Water My Plants"/>
                    <PortfolioTitle>Water My Plants</PortfolioTitle>
                </PortfolioObj>
                <Modal  open={openWater} onClose={closeWaterModal} center>
                    <div>
                        <SampleImage src={watermyplants} alt="Water My Plants" />
                        <Website>Let's Go To Mordor</Website>
                        <Description>
                            An application for plant lovers to keep track of their plants and their watering schedule.
                        </Description>
                        <List>
                            <ItemList>
                                Built with React, Node, and Heroku
                            </ItemList>
                            <ItemList>
                                Coordinated with a team of three frontend developers to ensure useful endpoints and create a complete site
                            </ItemList>
                            <ItemList>
                                Designed and implemented endpoints as the backend developer
                            </ItemList>
                        </List>
                        
                        <LinksBox>
                            <GoTo>
                                <GoToLink href="https://github.com/FT-Water-My-Plants-3" target="_blank">
                                    Website
                                </GoToLink>
                            </GoTo>
                            <GoTo>
                                <GoToLink href="https://github.com/bukit3point0/web-module-project-async-redux" target="_blank">
                                    GitHub Repo
                                </GoToLink>
                            </GoTo>
                        </LinksBox>
                    </div>

                </Modal>

                <PortfolioObj onClick={openMarketplace}>
                    <PortfolioImg src={marketplace} alt="African Marketplace"/>
                    <PortfolioTitle>African Marketplace</PortfolioTitle>
                </PortfolioObj>
                <Modal  open={openMarket} onClose={closeMarketplace} center>
                <div>
                        <SampleImage src={marketplace} alt="African Marketplace" />
                        <Website>African Marketplace</Website>
                        <Description>
                            Lambda School build week project 3/1-3/5/2021
                        </Description>
                        <List>
                            <ItemList>
                                Created layout and design, along with project structure to pass off portions to team
                            </ItemList>
                            <ItemList>
                                Users can get dynamic pricing data and quickly filter through item data from backend
                            </ItemList>
                            <ItemList>
                                Displays unique content based on type of user logged in
                            </ItemList>
                        </List>
                        
                        <LinksBox>
                            <GoTo>
                                <GoToLink href="https://stupefied-aryabhata-1d1a9f.netlify.app/" target="_blank">
                                    Website
                                </GoToLink>
                            </GoTo>
                            <GoTo>
                                <GoToLink href="https://github.com/tt72-AfricanMarket" target="_blank">
                                    GitHub Repo
                                </GoToLink>
                            </GoTo>
                        </LinksBox>
                    </div>
                </Modal>

            </PortfolioDiv>

        </Page>
    )
}

export default Portfolio