import React, { useEffect } from 'react';
import styled from 'styled-components';
import './header.css';
import $ from 'jquery';

const Nav = styled.nav`
  background: ${(props) => props.theme.primaryColor};
  position: fixed;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.textColorInverted};
  font-weight: 600;
  font-size: 0.8rem;
`;

const DetailsDiv = styled.div`
  height: 200px;
  width: 80vw;
  margin: 0 auto;
  padding: 20px;
  display: none;
  transition: all 2s linear;
  top: 100px;
  position: fixed;
  left: 10vw;
  background: white;
  border-radius: 25px;
`;

const addHoverEffect = (anchorId, divId) => {
  $('#' + anchorId).hover(
    () => {
      $('#' + divId).css('display', 'block');
    },
    () => {
      $('#' + divId).css('display', 'none');
    }
  );
};

export const Header = () => {
  useEffect(() => {
    // add hover effect to show divs when hovered over anchor tag
    addHoverEffect('about-us', 'about-us-div');
    addHoverEffect('services', 'services-div');
    addHoverEffect('portfolio', 'portfolio-div');
    addHoverEffect('resources', 'resources-div');
    addHoverEffect('contact', 'contact-div');
    // make navbar transparent to solid on scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 50) {
        $('nav').css('background', '#db5776');
        $('nav').addClass('scrollNav');
      } else {
        $('nav').css('background', 'transparent');
        $('nav').removeClass('scrollNav');
      }
    });
  }, []);

  return (
    <>
      <nav>
        <div className='row justify-content-between w-100 '>
          <div className='col col-3 '>logo here</div>
          <div className='col col-9 '>
            <ul>
              <li>
                <a id='about-us'>About Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '400px' }}>hello</div>
      <div style={{ height: '400px' }}>hello</div>
      <div style={{ height: '400px' }}>hello</div>
      <div style={{ height: '400px' }}>hello</div>
      <div style={{ height: '400px' }}>hello</div>
      <div style={{ height: '400px' }}>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <DetailsDiv id='about-us-div' className='details-div'>
        hello
      </DetailsDiv>
    </>
  );
};
// const NavLink = styled.a`
//   background: none;
//   padding: 2px 6px 4px;
//   color: inherit;
//   border: 1px solid black;
// `;

// const Li = styled.li`
//   display: inline;
// `;

// const Ul = styled.ul`
//   border: 1px solid yellow;
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
// `;
