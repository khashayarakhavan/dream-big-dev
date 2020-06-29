
import React, { useState, useEffect } from "react";import { Link } from 'react-router-dom';
import HeroHeader from '../Static/heroHeader';
import Booking from '../Static/sectionBooking';
import SectionStories from '../Static/sectionStories';
import SectionAbout from '../Static/sectionAbout';
import SectionFeatures from '../Static/sectionFeatures';
import SectionTours from '../Static/sectionTours';
import SectionFooter from '../Static/sectionFooter';
import Navigation from '../Static/navigation';
import UpButton from "../Static/UpButton";
import PopUp from '../Static/popUp';

import '../../res/css/style.css';
import Home from "./Home";
import getFacts from "./facts";
const { log } = console;

const Landing = () =>  {
  
  const [facts, setFacts] = useState([]);
  const [checker, setChecker] = useState(1);

    useEffect( async () => {
      await getFacts().then(facts => setFacts(facts));
      const checker = 0;
    },checker);
    //   console.log("From Landing :D : ", R);
    log('Data fetched successfully and sat the state in Landing.js', facts);

    // console.log('This is A : ', A);
    
    // });
    return (
      <div>
        <Navigation key="8" />
        <UpButton />
        <HeroHeader key="1" />
        <main>
          
          <Home facts={facts} />
          <SectionAbout ID="2" />
          <SectionFeatures ID="3" />
          <SectionTours ID="4" />
          <SectionStories ID="5" />
          <Booking ID="6" />
          <SectionFooter ID="7" />
          <PopUp key="9" />
        </main>
      </div>
    );
};

export default Landing;

// <div style={{ textAlign: "right" }}>
//   <Link to="/surveys/new" className="btn-floating btn-large red">
//     <i className="material-icons">add</i>
//   </Link>
// </div>
