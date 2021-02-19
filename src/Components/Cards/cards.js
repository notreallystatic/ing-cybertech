import react, { Component } from 'react';
import styled from 'styled-components';
import '../Header/header.css';

const CardDiv = styled.div`
  border: solid 2px #db5776;
  margin: 20px 0px;
  padding: 1rem;
  min-height: 45rem;
  border-radius: 12px;
  letter-spacing: 1.3px;
  word-spacing: 2px;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    border: 2px solid ${(props) => props.theme.primaryHoverColor};
    color: white;
    -webkit-animation: fadeIn 0.5s;
    animation: fadeIn 0.5s;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  border: 0px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 15px;
  width: 130px;
  height: 40px;
  color: white;
  font-size: bolder;

  font-size: 1.2rem;
  &:hover {
    background-color: ${(props) => props.theme.textColorInverted};
    color: ${(props) => props.theme.primaryHoverColor};
    -webkit-animation: fadeIn 0.5s;
    animation: fadeIn 0.5s;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <CardDiv className='parent-Card '>
          <div className='row' style={{ margin: '1rem 0px' }}>
            <h3>{this.props.Heading}</h3>
          </div>
          <div className='row' style={{ margin: '1rem 0px' }}>
            <img
              src={this.props.image}
              alt=''
              style={{
                width: '100%',
                minHeight: '20rem',
                maxHeight: '20rem',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </div>
          <div className='row' style={{ margin: '1rem 0px' }}>
            {this.props.data}
          </div>
          <div
            className='row'
            style={{
              margin: '1rem 0px',
              position: 'absolute',
              bottom: '1.2rem',
            }}
          >
            <Button className=' child-Button'>Explore!!</Button>
          </div>
        </CardDiv>
      </>
    );
  }
}
