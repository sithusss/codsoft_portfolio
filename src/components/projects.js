import React from 'react'
import project1 from '../images/pro1.jpg'
import project2 from '../images/pro2.jpg'
import project3 from '../images/pro3.jpg'
import './projects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import specific icons
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
  return (
    <div class = "projects" id='projects'>
        <h1 class = "sub-title">Projects</h1>
        <div class="work-list">
            <div class="show">
                <div class="work">
                    <img src={project1 }alt="" />
                    <div class="layer">
                        <h3>Ticket Booking System</h3>
                        <p>
                            Web based application that visitors can booked tikets to enter Peradeniya Botanical garden
                        </p>
                        <a href="https://github.com/sithusss/webproject" ><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                    </div>
                </div>
                <div class="work">
                    <img src={project2} alt="" />
                    <div class="layer">
                        <h3>Employee registration system</h3>
                        <p>
                            Web based application that admin can register employee to the system and search employee data
                        </p>
                        <a href="https://github.com/sithusss/Employee-reg" ><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                    </div>
                </div>
                <div class="work">
                    <img src={project3} alt="" />
                    <div class="layer">
                        <h3>Traveller Guide</h3>
                        <p>
                            Web based application that travellers can see details about special places in Sri Lanka.
                        </p>
                        <a href="https://github.com/sithusss/traveller" ><FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}
