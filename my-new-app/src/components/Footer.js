// Importing necessary modules from React and styled-components
import React, { Component } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Styled components for the footer layout and styling
const FooterContainer = styled.footer`
  background: ${props => props.background || 'linear-gradient(to right, #FF0000, #0000FF)'};
  color: ${props => props.color || '#fff'};
  padding: 40px 20px 20px;
  font-family: 'helvetica neue', helvetica, arial, sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex-basis: 22%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: ${props => props.linkColor || '#fff'};
  text-decoration: none;
  font-size: 14px;
  line-height: 1.8;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

// Defining the Footer class component
class Footer extends Component {
  // render method to return the JSX
  render() {
    const { background, color, linkColor } = this.props; // Destructuring props for use within the component

    return (
      // The main container for the footer, using styled-components for styling
      <FooterContainer background={background} color={color}>
        <Content>
          {/* Each Section represents a part of the footer */}
          <Section>
            <SectionTitle>About Us</SectionTitle>
            <SectionText>We are dedicated to providing top-notch solutions for your needs.</SectionText>
          </Section>
          <Section>
            <SectionTitle>Quick Links</SectionTitle>
            <LinkList>
              <LinkItem><Link href="/terms" linkColor={linkColor}>Terms and Conditions</Link></LinkItem>
              <LinkItem><Link href="/privacy" linkColor={linkColor}>Privacy Policy</Link></LinkItem>
              <LinkItem><Link href="/faq" linkColor={linkColor}>FAQ</Link></LinkItem>
            </LinkList>
          </Section>
          <Section>
            <SectionTitle>Contact Us</SectionTitle>
            <SectionText>Email: contact@example.com</SectionText>
            <SectionText>Phone: (123) 456-7890</SectionText>
          </Section>
          <Section>
            <SectionTitle>Follow Us</SectionTitle>
            <SocialIcons>
              {/* Wrapping each icon with IconWrapper styled-component for styling and spacing */}
              <IconWrapper><FaFacebookF /></IconWrapper>
              <IconWrapper><FaTwitter /></IconWrapper>
              <IconWrapper><FaLinkedinIn /></IconWrapper>
              <IconWrapper><FaInstagram /></IconWrapper>
            </SocialIcons>
          </Section>
        </Content>
        <BottomBar>
          <Copyright>&copy; 2024 Your Company. All rights reserved.</Copyright>
        </BottomBar>
      </FooterContainer>
    );
  }
}

// Exporting the Footer component for use in other parts of the application
export default Footer;