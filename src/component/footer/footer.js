import React from "react";
import Logo from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import "./footer.css";

const StyledFooter = styled.div`
  margin-top: 30px;
  background-color: #212121;
  padding: 20px 0;
  color: #ffffffba;
`;

const FooterDiv = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width:430px){
    flex-direction:column;
    justify-content:center;
  }
`;
const Disclaimer = styled.p`
  margin: 10px 30px;
  text-align: justify;
  line-height: 2;
`;
const Icons=styled.div`
@media(max-width:430px){
  margin-top:15px;
  margin-bottom:15px;
}
`
const footer = () => {
  return (
    <StyledFooter>
      <div style={{width:'90%', margin:'0 auto'}}>
      <FooterDiv>
        <Logo />
        <Icons>
          <FontAwesomeIcon className="_social f-b" icon={faFacebook} />
          <FontAwesomeIcon className="_social insta" icon={faInstagram} />
          <FontAwesomeIcon className="_social twi" icon={faTwitter} />
          <FontAwesomeIcon className="_social wa" icon={faWhatsapp} />
        </Icons>
        <p>All Right Reserved. &#169; Copyrights 2020 E-commerce</p>
      </FooterDiv>
      <Disclaimer>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </Disclaimer>
      </div>
    </StyledFooter>
  );
};

export default footer;
