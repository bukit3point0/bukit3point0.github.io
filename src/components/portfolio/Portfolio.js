import React, {useState} from 'react'
import styled from 'styled-components'
import 'react-responsive-modal/styles.css'
import {Modal} from 'react-responsive-modal'

import marni from '../images/marnisite.png'
import marketplace from '../images/africanmarketplace.png'

const Page = styled.div`
    background-color: #3b5249;
    height: 100vh;
    font-family: 'edita-small', serif;
    width: 80%;
`
const PageTitle = styled.h1`
    color: #a4b494;
    font-size: 4rem;
    padding: 2rem 0 0 2rem;
    margin: 0;
`
const PortfolioDiv = styled.div`
    padding: 4rem 0 0;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
`
const PortfolioObj = styled.div`
    width: 40%;
    display:flex;
    flex-direction:column;
    align-items: center;
    cursor: pointer;
    color: #a4b494;
`
const PortfolioImg = styled.img`
    width: 80%;
    padding: 2rem;
    margin: 2rem 0 0;
`
const PortfolioTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
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

    const [openMarni, setOpenMarni] = useState(false)
    const [openMarket, setOpenMarket] = useState(false)

    const onOpenModal = () => setOpenMarni(true)
    const onCloseModal = () => setOpenMarni(false)

    const openMarketplace = () => setOpenMarket(true)
    const closeMarketplace = () => setOpenMarket(false)

    return (
        <Page>

            <PageTitle>Portfolio</PageTitle>

            <PortfolioDiv>
            
                <PortfolioObj onClick={onOpenModal}>
                    <PortfolioImg src={marni} alt="www.marnijoelen.com"/>
                    <PortfolioTitle>Marni Joelen</PortfolioTitle>
                </PortfolioObj>
                <Modal  open={openMarni} onClose={onCloseModal} center>
                    <div>
                        <SampleImage src={marni} alt="www.marnijoelen.com" />
                        <Website>Marni Joelen</Website>
                        <Description>
                            Marni Joelen is a horror writer. The website needed to display not only published works but also notices for upcoming conventions.
                        </Description>
                        <List>
                            <ItemList>
                                Implemented device and resolution independent navigation quickly with ReactStrap
                            </ItemList>
                            <ItemList>
                                Focused on component-based design for code reusability
                            </ItemList>
                        </List>
                        
                        <LinksBox>
                            <GoTo>
                                <GoToLink href="http://marnijoelen.com" target="_blank">
                                    Website
                                </GoToLink>
                            </GoTo>
                            <GoTo>
                                <GoToLink href="https://github.com/marnijoelen/marnijoelen.github.io" target="_blank">
                                    GitHub Repo
                                </GoToLink>
                            </GoTo>
                        </LinksBox>
                    </div>

                </Modal>

                <PortfolioObj onClick={openMarketplace}>
                    <PortfolioImg src={marketplace} alt="https://stupefied-aryabhata-1d1a9f.netlify.app/"/>
                    <PortfolioTitle>African Marketplace</PortfolioTitle>
                </PortfolioObj>
                <Modal  open={openMarket} onClose={closeMarketplace} center>
                <div>
                        <SampleImage src={marketplace} alt="African Marketplace - Lambda Project" />
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