import React from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

function Footer(props) {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>
      <div className="link">
        <h5 className="fadeInUp">Maintained by </h5>
        <a
          href="https://techcivitas-e7039.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech Civitas
        </a>
        <WhatsappShareButton style={{display: 'block',
    margin: '13px auto'}}
        url={'https://covid-india.techcivitas.com/'}
        title={'This live tracker is really beneficial to track the cases of Coronavirus(COVID-19) in India. Spread the word with your loved ones and stay safe'}>
          <h5 className="fadeInUp">Spread the word </h5>
          <WhatsappIcon size={50} round={true}></WhatsappIcon>
        </WhatsappShareButton>
      </div>
    </footer>
  );
}

export default Footer;
