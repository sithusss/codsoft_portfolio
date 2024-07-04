import React, { useState } from 'react';
import './about.css';
import webprofile from '../images/mywebprofile.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="row" id='about'>
      <div className="about-col-1">
        <img src={webprofile} alt="" />
      </div>
      <div className="about-col-2">
        <h1 className="sub-title">About Me</h1>
        <p>
          I'm Sandali Liyanage, 
          I am from Kandy, Sri Lanka. From a young age, I was fascinated by Information Technology Area.
          I am pursuing my Bachelor's Degree at Rajarata University of Sri Lanka, where I am studying my degree in Bachelor in Science in Information Technology. During my time there, I delved deep into subjects like Web Application development, Data Structures, Object Oriented Programming which sparked my curiosity and shaped my career aspirations.
        </p>

        <div className="tab-titles">
          <p 
            className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
            onClick={() => opentab('skills')}
          >
            Soft Skills
          </p>
          <p 
            className={`tab-links ${activeTab === 'other' ? 'active-link' : ''}`} 
            onClick={() => opentab('other')}
          >
            Other Skills
          </p>
        </div>

        <div className="tab-contents">
          <div className={`tab-content ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
            <ul>
              <li><span>Communication Skills<br /></span>Confidence, Public speaking, Presentation skills, Mutual respect, Verbal communication, Non-verbal communication</li>
              <li><span>Interpersonal Skills<br /></span>Tolerance, Diplomacy, Collaboration, Sensitivity, Empathy.</li>
              <li><span>Teamwork Skills<br /></span>Collaboration, Cooperation, Coordination, Exchanging ideas</li>
              <li><span>Leadership Skills<br /></span>Project management, Management skill, Conflict management, Influencing, Building rapport</li>
            </ul>
          </div>
          <div className={`tab-content ${activeTab === 'other' ? 'active-tab' : ''}`} id="other">
            <ul>
              <li><span>Web Development<br /></span>HTML, CSS, JavaScript, PHP</li>
              <li><span>Computer Programming<br /></span>Python, C, C++, Java</li>
              <li><span>Mobile Application<br /></span>Android Studio</li>
              <li><span>UI/UX<br /></span>Adobe XD, Figma</li>
              <li><span>Graphic Design<br /></span>Adobe Illustrator, Adobe Photoshop, Blender, Autodesk Maya, Adobe PremierePro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
