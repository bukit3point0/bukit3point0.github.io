import React from "react";
import styled from "styled-components";

const Page = styled.div`
  background-color: #519872;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  padding: 2rem 2rem 1rem;
  color: #382933;

  @media screen and (max-width: 1800px) {
    box-sizing: content-box;
    margin-top: 20vh;
  }
`;
const Copyright = styled.p`
  text-align: center;
  display: block;
  margin: 0;
  padding: 0.15rem 0;
  font-size: 0.8rem;

  @media screen and (max-width: 1800px) {
    margin: 0;
  }
`;

const CopyrightSm = styled(Copyright)`
  font-size: 0.7rem;
`;
const Link = styled.a`
  color: #382933;
  text-decoration: none;
`;
const Underline = styled(Link)`
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Page>
      <Copyright>© Connie Reynolds 2021</Copyright>
      <Copyright>
        Want to see the code for this website?{" "}
        <Underline
          href="https://github.com/bukit3point0/bukit3point0.github.io"
          target="_blank"
        >
          Click here
        </Underline>
      </Copyright>
      <CopyrightSm>
        Mockup vector created by brgfx -{" "}
        <Link href="https://www.freepik.com/vectors/mockup">
          www.freepik.com
        </Link>
      </CopyrightSm>
    </Page>
  );
};

export default Footer;
