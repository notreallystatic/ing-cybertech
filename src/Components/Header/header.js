import React, { useEffect } from 'react';
import styled from 'styled-components';
import './header.css';
import $ from 'jquery';
import { Navbar, Nav } from 'react-bootstrap';

const NavB = styled.nav`
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
  height: 300px;
  width: 80vw;
  margin: 0 auto;
  padding: 20px;
  display: none;
  transition: all 2s linear;
  top: 100px;
  position: fixed;
  left: 10vw;
  color: white;
  background: #de6a76;
  border-radius: 25px;
`;

export const Header = () => {
  return (
    <>
      <Navbar className='myNavbar'>
        <Navbar.Brand className='myNavbar_brand' style={{ color: 'white' }}>
          ING CyberTech
        </Navbar.Brand>
        <Nav
          style={{
            width: '100%',
          }}
        >
          <div className='Nav'>
            <div className='dropdown_nav nav-item mr-3'>
              <button className='dropbtn'>Solutions</button>
              <div
                className='dropdown-content-about-us'
                style={{ background: 'none' }}
              >
                <div
                  style={{
                    height: '2rem',
                    background: 'none',
                  }}
                ></div>
                <div style={{ backgroundColor: '#f9f9f9', minHeight: '28rem' }}>
                  <div
                    className='row'
                    style={{
                      minWidth: '100%',
                      minHeight: '100%',
                      padding: '2rem 0rem',
                      border: '1px solid black',
                    }}
                  >
                    <div className='col-4'>
                      {' '}
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        SECURITY NEED
                      </div>
                      <div className='row w-100 content-item'>
                        Application Security
                      </div>
                      <div className='row w-100 content-item'>
                        Research, Technology & Validation
                      </div>
                      <div className='row w-100 content-item'>
                        Cloud / Mobility Security
                      </div>
                      <div className='row w-100 content-item'>Malware</div>
                      <div className='row w-100 content-item'>
                        Merges & Acquisitions
                      </div>
                      <div className='row w-100 content-item'>
                        Peace Of Mind / E-Discovery
                      </div>
                      <div className='row w-100 content-item'>Privacy</div>
                      <div className='row w-100 content-item'>
                        Prote from Advanced Threats
                      </div>
                      <div className='row w-100 content-item'>
                        Skill Set Deficiency
                      </div>
                      <div className='row w-100 content-item'>
                        Threat Mitigation
                      </div>
                      <div className='row w-100 content-item'>
                        Network Security
                      </div>
                    </div>
                    <div className='col-4'>
                      {' '}
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        SECURITY VERTICAL
                      </div>
                      <div className='row w-100 content-item'>
                        {' '}
                        Aerospace / IFE
                      </div>
                      <div className='row w-100 content-item'>
                        Automotive / IUE
                      </div>
                      <div className='row w-100 content-item'>
                        Energy & Utilities
                      </div>
                      <div className='row w-100 content-item'>
                        Financial Services & Insurance
                      </div>
                      <div className='row w-100 content-item'>
                        Gaming & Entertainment
                      </div>
                      <div className='row w-100 content-item'>Healthcare</div>
                      <div className='row w-100 content-item'>
                        Educational Institutes
                      </div>
                      <div className='row w-100 content-item'>
                        Retail & Hospitality
                      </div>
                      <div className='row w-100 content-item'>
                        Technology & Manufacturing
                      </div>
                    </div>{' '}
                    <div className='col-4'>
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        SECURITY COMPLIANCE
                      </div>
                      <div className='row w-100 content-item'>
                        PCI Compliance
                      </div>

                      <div className='row w-100 content-item'>CMMC</div>
                      <div className='row w-100 content-item'>
                        HIPAA / HITECH
                      </div>
                      <div className='row w-100 content-item'>
                        ISO 27001 / 27002
                      </div>
                      <div className='row w-100 content-item'>Data Privacy</div>
                      <div className='row w-100 content-item'>GDPR</div>
                      <div className='row w-100 content-item'>FCA</div>
                      <div className='row w-100 content-item'>GLBA</div>
                      <div className='row w-100 content-item'>NCUA / FFIEC</div>
                      <div className='row w-100 content-item'>NERC CIP</div>
                      <div className='row w-100 content-item'>
                        FISMA/FEDRAMP
                      </div>
                      <div className='row w-100 content-item'>
                        Enterprise Risk Assesment
                      </div>
                      <div className='row w-100 content-item'>
                        Enterprise Security Program
                      </div>
                      <div className='row w-100 content-item'>
                        Cybersecurity Strategy and Roadstamps
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dropdown_nav nav-item mr-3'>
              <button className='dropbtn'>Services</button>
              <div
                className='dropdown-content-services'
                style={{ background: 'none' }}
              >
                <div
                  style={{
                    height: '2rem',
                    background: 'none',
                  }}
                ></div>
                <div style={{ backgroundColor: '#f9f9f9', minHeight: '28rem' }}>
                  <div
                    className='row'
                    style={{
                      minWidth: '100%',
                      minHeight: '100%',
                      padding: '2rem 0rem',
                      border: '1px solid black',
                    }}
                  >
                    <div className='col-4'>
                      {' '}
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        MANAGED SERVICES
                      </div>
                      <div className='row w-100 content-item'>
                        Managed Detection Response
                      </div>
                      <div className='row w-100 content-item'>SIEM</div>
                      <div className='row w-100 content-item'>
                        Breach Detection
                      </div>
                      <div className='row w-100 content-item'>
                        Endpoint Protection
                      </div>
                      <div className='row w-100 content-item'>DDOS</div>
                      <div className='row w-100 content-item'>
                        Email Security
                      </div>
                      <div className='row w-100 content-item'>Encryption</div>
                      <div className='row w-100 content-item'>Firewall</div>
                      <div className='row w-100 content-item'>IDS / IPS</div>
                      <div className='row w-100 content-item'>
                        Incident Response, Forensics & malware Analysis
                      </div>
                      <div className='row w-100 content-item'>NAC</div>
                      <div className='row w-100 content-item'>
                        Redemption & Vulnerabilty
                      </div>
                      <div className='row w-100 content-item'>
                        Secure web Gateway
                      </div>
                      <div className='row w-100 content-item'>
                        Security Operations Management
                      </div>
                      <div className='row w-100 content-item'>
                        Threat Analysis
                      </div>
                      <div className='row w-100 content-item'>UTM</div>
                      <div className='row w-100 content-item'>
                        Web Application Firewall
                      </div>
                    </div>
                    <div className='col-4'>
                      {' '}
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        CONNECTED SYSTEMS
                      </div>
                      <div className='row w-100 content-item'>
                        {' '}
                        ICS/ SCADA Real-time Monitoring
                      </div>
                      <div className='row w-100 content-item'>
                        Technical Assesment
                      </div>
                      <div className='row w-100 content-item'>
                        Architecture Review & Assessment
                      </div>
                      <div className='row w-100 content-item'>
                        Mobile Device & Application Testing
                      </div>
                      <div className='row w-100 content-item'>
                        Smart Device Testing
                      </div>
                      <div className='row w-100 content-item'>IOt/IIOT</div>
                      <div className='row w-100 content-item'>Smart Cities</div>
                      <div className='row w-100 content-item'>
                        Embedded Systems
                      </div>
                    </div>{' '}
                    <div className='col-4'>
                      <div
                        className='row content-heading'
                        style={{ padding: '0rem 0rem 1rem 0rem' }}
                      >
                        PROFESSIONAL SERVICES
                      </div>
                      <div className='row w-100 content-item'>Testing</div>

                      <div className='row w-100 content-item'>Compliance</div>
                      <div className='row w-100 content-item'>Training</div>
                      <div className='row w-100 content-item'>
                        Talent Acquisition
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dropdown_nav nav-item mr-3'>
              <button className='dropbtn'>Resources</button>
              <div
                className='dropdown-content-Solutions'
                style={{ background: 'none' }}
              >
                <div
                  style={{
                    height: '2rem',
                    background: 'none',
                  }}
                ></div>
                <div style={{ backgroundColor: '#f9f9f9', minHeight: '8rem' }}>
                  <div className='row w-100' style={{ padding: ' 3rem 0rem' }}>
                    <div className='col-2 content-heading'>Blog</div>
                    <div className='col-2 content-heading'>Upcoming</div>
                    <div className='col-2 content-heading'>Events</div>
                    <div className='col-2 content-heading'>Documentation</div>
                    <div className='col-2 content-heading'>Github</div>
                    <div className='col-2 content-heading'>In the news</div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </Nav>
      </Navbar>
    </>
  );
};
