import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactImagesCarousel from "react-images-carousel";

import robert from "../images/robert-gainey.png";
import spooky from "../images/spookycreators.png";
import HRFhome from "../images/HRF-home.png";
import HRFcases from "../images/HRF-cases.png";
import HRFfaq from "../images/HRF-FAQ.png";
import HRFgraphs from "../images/HRF-graphs.png";

const Page = styled.div`
  background-color: #3b5249;
  height: 100vh;
  font-family: "edita-small", serif;
  width: 80%;

  @media screen and (max-width: 1800px) {
    height: 80vh;
    width: 100%;
  }
`;
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
`;
const PortfolioDiv = styled.div`
  padding: 4rem 0 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 580px) {
    /* width: 70%; */
    padding: 2rem auto 0;
  }
`;
const PortfolioObj = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #a4b494;

  @media screen and (max-width: 934px) {
    width: 35%;
  }

  @media screen and (max-width: 580px) {
    width: auto;
  }
`;
const PortfolioImg = styled.img`
  width: 80%;
  padding: 2rem;
  margin: 2rem 0 0;

  @media screen and (max-width: 580px) {
    width: 30%;
    margin: 1rem 0 0;
    padding: 1rem;
  }
`;
const PortfolioTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;

  @media screen and (max-width: 425px) {
    text-align: center;
  }
`;
const SampleImage = styled.img`
  width: 100%;
`;
const Website = styled.h2`
  text-align: center;
  font-family: "source-serif-pro", serif;
`;
const List = styled.ul`
  font-family: "source-serif-pro", serif;
  text-align: justify;
`;
const ItemList = styled.li`
  font-family: "source-serif-pro", serif;
`;
const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const GoTo = styled.button`
  font-family: "source-serif-pro", serif;
  width: 30%;
  padding: 0.25rem;
  margin: 0.25rem 2rem 0.25rem 0;
  border: none;
  background-color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
`;
const GoToLink = styled.a`
  color: black;
`;

const Portfolio = () => {
  const [openRobert, setOpenRobert] = useState(false);
  const [openSpooky, setOpenSpooky] = useState(false);
  const [openHRF, setOpenHRF] = useState(false);

  const openRobertModal = () => setOpenRobert(true);
  const closeRobertModal = () => setOpenRobert(false);

  const openSpookyModal = () => setOpenSpooky(true);
  const closeSpookyModal = () => setOpenSpooky(false);

  const openHRFirst = () => setOpenHRF(true);
  const closeHRFirst = () => setOpenHRF(false);

  const sliderData = [HRFhome, HRFgraphs, HRFcases, HRFfaq];

  return (
    <Page id="portfolio">
      <PageTitle>Portfolio</PageTitle>

      <PortfolioDiv>
        <PortfolioObj onClick={openRobertModal}>
          <PortfolioImg src={robert} alt="www.robertgainey.com" />
          <PortfolioTitle>Robert Gainey, Author</PortfolioTitle>
        </PortfolioObj>
        <Modal open={openRobert} onClose={closeRobertModal} center>
          <div>
            <SampleImage src={robert} alt="www.robertgainey.com" />
            <Website>Robert Gainey, Author</Website>
            <List>
              <ItemList>
                Deployed a static site with Vercel that allows the author to
                announce new publications, sell current works, and connect with
                fans
              </ItemList>
              <ItemList>
                Communicated with the author to ensure a fully-functional
                website to specifications
              </ItemList>
              <ItemList>
                Designed the site to be easily updated for future releases
              </ItemList>
            </List>

            <LinksBox>
              <GoTo>
                <GoToLink
                  href="https://www.robertgainey.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </GoToLink>
              </GoTo>
            </LinksBox>
          </div>
        </Modal>

        <PortfolioObj onClick={openSpookyModal}>
          <PortfolioImg src={spooky} alt="Spooky Empire Creator's Track" />
          <PortfolioTitle>Spooky Empire Creator's Track</PortfolioTitle>
        </PortfolioObj>
        <Modal open={openSpooky} onClose={closeSpookyModal} center>
          <div>
            <SampleImage src={spooky} alt="Spooky Empire Creator's Track" />
            <Website>Spooky Empire Creator's Track</Website>
            <List>
              <ItemList>
                Adapted a concept using Excel spreadsheets to create and
                schedule guests at a convention, allowing the organizer to keep
                track of the current year as well as review the previous years'
                guests and panels
              </ItemList>
              <ItemList>
                Deployed the app using Heroku and Vercel with a public-facing
                page for convention attendees to view either the current
                schedule or an FAQ on how to request guest status
              </ItemList>
              <ItemList>
                Designed and implemented endpoints that limit visibility and
                usability depending on user type
              </ItemList>
            </List>

            <LinksBox>
              <GoTo>
                <GoToLink href="https://www.spookycreators.com" target="_blank">
                  Website
                </GoToLink>
              </GoTo>
              <GoTo>
                <GoToLink
                  href="https://github.com/bukit3point0/spooky-empire-client"
                  target="_blank"
                >
                  GitHub Repo (Frontend)
                </GoToLink>
              </GoTo>
              <GoTo>
                <GoToLink
                  href="https://github.com/bukit3point0/spooky-empire-creators-track-api"
                  target="_blank"
                >
                  GitHub Repo (Backend)
                </GoToLink>
              </GoTo>
            </LinksBox>
          </div>
        </Modal>

        <PortfolioObj onClick={openHRFirst}>
          <PortfolioImg src={HRFhome} alt="Human Rights First: Asylum" />
          <PortfolioTitle>Human Rights First: Asylum</PortfolioTitle>
        </PortfolioObj>
        <Modal open={openHRF} onClose={closeHRFirst} center>
          <div>
            <ReactImagesCarousel
              images={sliderData}
              sliderBg="#a4b494"
              paginationBg="#3b5249"
            />
            <br />
            <Website>Human Rights First: Asylum</Website>
            <List>
              <ItemList>
                Led a team of 14 as the project manager, helping with blockers,
                leading standups, plannings sprints, and pair-coding with
                teammates
              </ItemList>
              <ItemList>
                Collaborated with stakeholders to create a site for attorneys to
                prepare cases for asylum seekers, gathering data on previous
                cases their assigned judge has reviewed
              </ItemList>
              <ItemList>
                Discovered potential security problems, resolving the issues in
                the backend
              </ItemList>
            </List>

            <LinksBox>
              <GoTo>
                <GoToLink
                  href="https://github.com/Lambda-School-Labs/human-rights-first-asylum-fe-a"
                  target="_blank"
                >
                  GitHub Repo (Frontend)
                </GoToLink>
              </GoTo>
              <GoTo>
                <GoToLink
                  href="https://github.com/Lambda-School-Labs/human-rights-first-asylum-be-a"
                  target="_blank"
                >
                  GitHub Repo (Backend)
                </GoToLink>
              </GoTo>
            </LinksBox>
          </div>
        </Modal>
      </PortfolioDiv>
    </Page>
  );
};

export default Portfolio;
