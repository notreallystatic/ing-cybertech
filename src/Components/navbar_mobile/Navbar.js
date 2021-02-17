import react, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  height: 70px;
  width: 100vw;
  padding: 14px;
  background: ${(props) => props.theme.primaryColor};
`;
const H1 = styled.h1`
  font-size: ${(props) => props.theme.h4};
  color: ${(props) => props.theme.textColorInverted};
  display: inline;
`;

const BurgerButton = styled.button`
  float: right;
  background: ${(props) => props.theme.primaryColor};
  border: 0px;
  color: ${(props) => props.theme.textColorInverted};
`;

const Menu = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorInverted};
  top: 70px;
`;

const Elements = styled.div`
  height: 4rem;
  border-bottom: 1px solid white;
  width: 100vw;
  padding: 15px;
`;

const SubMenu = styled.div`
  background: ${(props) => props.theme.textColorInverted};
  color: ${(props) => props.theme.primaryColor};
  width: 100vw;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClicked: false,
      OpenSubmenu: 0,
    };
  }

  ToggleBurger = () => {
    this.setState({
      burgerClicked: !this.state.burgerClicked,
    });
  };
  ToggleSubmenu = (e) => {
    if (this.state.OpenSubmenu == e) {
      this.setState({
        OpenSubmenu: 0,
      });
    } else {
      this.setState({
        OpenSubmenu: e,
      });
    }
  };

  render() {
    return (
      <>
        <Nav>
          <H1>ING-CyberTech</H1>
          <BurgerButton onClick={this.ToggleBurger}>
            {this.state.burgerClicked == true ? (
              <span className='material-icons' style={{ fontSize: '38px' }}>
                close
              </span>
            ) : (
              <span className='material-icons' style={{ fontSize: '38px' }}>
                menu
              </span>
            )}
          </BurgerButton>
        </Nav>

        {this.state.burgerClicked == true ? (
          <Menu>
            <Elements
              onClick={() => {
                this.ToggleSubmenu(1);
              }}
            >
              <span>element1</span>
              <BurgerButton>
                <span className='material-icons'>add</span>
              </BurgerButton>
            </Elements>
            <SubMenu
              className={this.state.OpenSubmenu == 1 ? 'd-block' : 'd-none'}
            >
              <Elements> first Submenu</Elements>
              <Elements> Second Submenu</Elements>
              <Elements> Second Submenu</Elements>
              <Elements> Second Submenu</Elements>
            </SubMenu>
            <Elements
              onClick={() => {
                this.ToggleSubmenu(2);
              }}
            >
              <span>element2</span>
              <BurgerButton>
                <span className='material-icons'>add</span>
              </BurgerButton>
            </Elements>
            <SubMenu
              className={this.state.OpenSubmenu == 2 ? 'd-block' : 'd-none'}
            >
              <Elements> Second Submenu</Elements>
              <Elements> Second Submenu</Elements>
              <Elements> Second Submenu</Elements>
            </SubMenu>
          </Menu>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Navbar;
