import React, { Component } from 'react';
import styled from 'styled-components';
const FooterDiv = styled.div`
  bottom: 0;
  background-color: #db606c;
  width: 100vw;
  min-height: 250px;
  color: white;
`;

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='d-none d-md-block'>
          <FooterDiv>
            <div>
              <div
                className='row pt-5 justify-content-center'
                style={{ height: '100%' }}
              >
                <div
                  className='col-3 '
                  style={{
                    height: '100%',
                    margin: 'auto',
                  }}
                >
                  <div className='w-100  justify-content-center'>
                    <div style={{ margin: 'auto' }}>
                      <h3
                        className='inline'
                        style={{
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}
                      >
                        ING Cybertech
                      </h3>
                    </div>
                    <div>
                      <div
                        className='mr-3'
                        style={{ fontWeight: '500', textAlign: 'center' }}
                      >
                        Nigeria
                      </div>
                      <div
                        className='mr-3'
                        style={{ fontWeight: '500', textAlign: 'center' }}
                      >
                        South Africa
                      </div>
                      <div
                        className='mr-3'
                        style={{ fontWeight: '500', textAlign: 'center' }}
                      >
                        Ghana
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='col-9 '
                  style={{ borderLeft: '2px solid #2191FB' }}
                >
                  <div
                    className='row'
                    style={{ fontWeight: '500', justifyContent: 'center' }}
                  >
                    connect with us
                  </div>
                  <div className='row justify-content-center'>
                    <a
                      className='btn btn-social-icon btn-google mr-2'
                      href='http://google.com/+'
                    >
                      <i className='fa fa-google-plus'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-facebook mr-2'
                      href='http://www.facebook.com/profile.php?id='
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-linkedin mr-2'
                      href='http://www.linkedin.com/in/'
                    >
                      <i className='fa fa-linkedin'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-twitter mr-2'
                      href='http://twitter.com/'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                    <a
                      className='btn btn-social-icon btn-google mr-2'
                      href='http://youtube.com/'
                    >
                      <i className='fa fa-youtube'></i>
                    </a>
                  </div>

                  <div className='row justify-content-center mt-4 mb-4'>
                    <img
                      src='https://static.fullestop.com/images/cmmi-level-3.png'
                      alt=''
                      width='50px'
                      height='50px'
                      style={{ marginRight: '1rem' }}
                    />
                    <img
                      src='https://static.fullestop.com/images/icon1.png'
                      style={{ marginRight: '1rem' }}
                      width='100px'
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/google-patner-image.png'
                      style={{ marginRight: '1rem' }}
                      width='100px'
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/nasscom-logo.png'
                      width='100px'
                      style={{ marginRight: '1rem' }}
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/iso-2011.png'
                      width='50px'
                      height='50px'
                      style={{ marginRight: '1rem' }}
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/iso-2015.png'
                      alt=''
                      width='50px'
                      height='50px'
                      style={{ marginRight: '1rem' }}
                    />
                    <img
                      src='https://static.fullestop.com/images/iso-2013.png'
                      width='50px'
                      style={{ marginRight: '1rem' }}
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/icon2.png'
                      style={{ marginRight: '1rem' }}
                      width='50px'
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/icon3.png'
                      width='50px'
                      style={{ marginRight: '1rem' }}
                      height='50px'
                      alt=''
                    />
                    <img
                      src='https://static.fullestop.com/images/icon4.png'
                      width='50px'
                      style={{ marginRight: '1rem' }}
                      height='50px'
                      alt=''
                    />
                  </div>
                  <div className='row'>
                    <div
                      stlye={{
                        margin: '20px 0rem',
                        bottom: 0,
                        padding: '1rem 0px',
                      }}
                    >
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Company{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Services{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Solutions{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Blogs
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Hire Developer{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Portfolio{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Testimonials
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Careers
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Resources{' '}
                      </span>
                      <span
                        href='#'
                        className='mr-4 ml-4'
                        style={{ fontWeight: '500' }}
                      >
                        Contact{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FooterDiv>
        </div>
        <div className='d-block d-md-none'>
          <FooterDiv>
            <div className='row  w-100 justify-content-center'>
              <h1>ING CyberTech</h1>
              <div className='row justify-content-center w-100'>
                <div className='col-3' style={{ fontWeight: '500' }}>
                  Nigeria
                </div>
                <div className='col-3' style={{ fontWeight: '500' }}>
                  South Africa
                </div>
                <div className='col-3' style={{ fontWeight: '500' }}>
                  Ghana
                </div>
              </div>
              <div className='row justify-content-center w-100'>
                <img
                  src='https://static.fullestop.com/images/cmmi-level-3.png'
                  alt=''
                  width='50px'
                  height='50px'
                  style={{ marginRight: '1rem' }}
                />
                <img
                  src='https://static.fullestop.com/images/icon1.png'
                  style={{ marginRight: '1rem' }}
                  width='100px'
                  height='50px'
                  alt=''
                />
                <img
                  src='https://static.fullestop.com/images/google-patner-image.png'
                  style={{ marginRight: '1rem' }}
                  width='100px'
                  height='50px'
                  alt=''
                />
              </div>
              <div
                className='row'
                style={{
                  fontWeight: '500',
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: '1rem',
                }}
              >
                connect with us
              </div>
              <div className='row justify-content-center'>
                <a
                  className='btn btn-social-icon btn-google mr-2'
                  href='http://google.com/+'
                >
                  <i className='fa fa-google-plus'></i>
                </a>
                <a
                  className='btn btn-social-icon btn-facebook mr-2'
                  href='http://www.facebook.com/profile.php?id='
                >
                  <i className='fa fa-facebook'></i>
                </a>
                <a
                  className='btn btn-social-icon btn-linkedin mr-2'
                  href='http://www.linkedin.com/in/'
                >
                  <i className='fa fa-linkedin'></i>
                </a>
                <a
                  className='btn btn-social-icon btn-twitter mr-2'
                  href='http://twitter.com/'
                >
                  <i className='fa fa-twitter'></i>
                </a>
                <a
                  className='btn btn-social-icon btn-google mr-2'
                  href='http://youtube.com/'
                >
                  <i className='fa fa-youtube'></i>
                </a>
              </div>
            </div>
          </FooterDiv>
        </div>
      </>
    );
  }
}
