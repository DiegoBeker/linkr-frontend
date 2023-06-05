import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import colors from '../../constants/colors.js';
import fonts from '../../constants/fonts.js';

export const LinkIds = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    span {
      font-weight: 700;
    }
`;
export const Container = styled.div`
padding-top: 53px;
background-color: ${colors.main};
width: 936px;
min-height:100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto;
@media (max-width: 768px){
padding-top: 10px;
width: 100%;
  }
`;
export const Title = styled.h1`
color: ${colors.neutral};
font-family: ${fonts.secondary};
font-size: 43px;
font-weight: 700;
display: flex;
justify-content: flex-start;
padding-bottom: 41px;
@media (max-width: 768px){
padding: 0 0 30px 20px;
  }
`;
export const SubContainer = styled.div`
width: 936px;
display: flex;
justify-content: space-between;
@media (max-width: 768px){
width: 100%;
  }
`;
export const Main = styled.div`
width: 611px;
@media (max-width: 768px){
width: 100%;
  }
`;
export const SideBar = styled.div`
display: flex;
align-items: flex-start;
@media (max-width: 768px){
    display: none;
}
`;
export const Posts = styled.div`
position: relative;
background-color: ${colors.modal};
border-radius: 16px;
display: flex;
margin-bottom: 16px;
@media (max-width: 768px){
    border-radius: 0px;
    padding-right: 15px;
  }
`;
export const InfoLeft = styled.div`
width: 76px;
display: flex;
flex-direction: column;
align-items: center;
padding: 17px 17px 17px 34px;;
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
svg{
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 30px;
  color: ${(props) => (props.like === 'true' ? '#AC0000' : '#FFFFFF')};
}
p{
  display: flex;
  justify-content: center;
  width: 55px;
  font-weight: 400;
  font-size: 11px;
  color: #FFFFFF;
}
@media (max-width: 768px){
width: 100%;
padding: 15px;
img {
    width: 40px;
    height: 40px;
}
}
`;
export const InfoRight = styled.div`
width: 502px;
display: flex;
flex-direction: column;
padding: 17px 17px 17px 17px;
font-family: ${fonts.main};
h2{
font-size: 19px;
font-weight: 400;
color: ${colors.neutral};
margin-bottom: 7px;
}
p{
font-size: 17px;
font-weight: 400;
line-height: 20px;
color: ${colors.description};
}
@media (max-width: 768px){
    width: 100%;
    padding: 17px 17px 17px 0px;
}
`;
export const Articles = styled.div`
margin-top: 7px;
width: 503px;
height: 155px;
border: 1px solid #4D4D4D;
border-radius: 11px;
color: ${colors.description};
padding: 20px;
@media (max-width: 768px){
    width: 288px;
    height: 115px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`;
export const IconsContainer = styled.div`
display: ${({ userLogged, owner }) => (userLogged === owner ? 'flex' : 'none')};
position:absolute;
top:10px;
right: 10px;
svg{
  margin:5px;
  font-size: 16px;
  color: #ffffff;
}
`;

export const DeleteModal = styled(ReactModal)`
position: absolute;
top: calc(50% - 131px);
left: calc(50% - 283px);
background: #333333;
width: 597px;
height: 262px;
padding: 10px;
border-radius: 50px;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Lato';
p{
  width: 350px;
  margin: 10px 0;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
  color: #FFFFFF;
}
`;
export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 330px;
margin: 40px 0;
button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 37px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
}
`;
export const BackButton = styled.button`
background: #FFFFFF;
color: #1877F2;
`;
export const ConfirmButton = styled.button`
background: #1877F2;
color: #ffffff;
`;
