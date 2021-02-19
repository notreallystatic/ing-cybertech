import react, { Component } from 'react';
import { Header } from './Header/header';
import Navbar from './Header/Navbar_Mobile';
class HeaderNav extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div className='d-xl-none'>
            <Navbar />
          </div>
          <div className='d-none d-xl-block'>
            <Header />
          </div>
        </div>
      </>
    );
  }
}

export default HeaderNav;
