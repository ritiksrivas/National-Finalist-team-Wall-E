import React from "react";
import "./Candidate.css";
import male1 from '../assets/male1.png';
import male2 from '../assets/male2.png';
import male3 from '../assets/male3.png';
import male4 from '../assets/male4.png';
import female1 from '../assets/female1.png';
import female2 from '../assets/female2.png';
import female3 from '../assets/female3.png';
import female4 from '../assets/female4.png'; 
import { Box } from "@mui/material";
const Candidate = () => {
  return (
    <Box sx={{margin:"20px "}}>
    <div className="container">
      <div className="card">
        <img src={male1} alt="Arjun Singh" className="profile-pic" />
        <div className="card-content">
          <h2>Arjun Singh</h2>
          <p>
            <strong>Party: </strong>Alpha
          </p>
          <p>
            <strong>Age:</strong> 42
          </p>
          <p>
            <strong>Education:</strong> Master's in Public Administration,
            University of Delhi, 2007
          </p>
          <p>
            <strong>Experience:</strong> Community Leader (2018-Present), NGO
            Volunteer (2012-2018)
          </p>
          <p>
            <strong>Focus Areas:</strong> Infrastructure development, youth
            empowerment, better educational facilities.
          </p>
          <p>
            <strong>Hobbies:</strong> Reading, trekking, and playing chess.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={female1} alt="Priya Sharma" className="profile-pic" />
        <div className="card-content">
          <h2>Priya Sharma</h2>
          <p>
            <strong>Party: </strong>Beta
          </p>
          <p>
            <strong>Age:</strong> 34
          </p>
          <p>
            <strong>Education:</strong> Master’s in Environmental Science, Indian Institute of Science, Bangalore, 2014 
            

          </p>
          <p>
            <strong>Experience:</strong> Environmental Consultant (2016-Present).

          </p>
          <p>
            <strong>Focus Areas:</strong> Environmental sustainability, renewable energy, waste management.

          </p>
          <p>
            <strong>Hobbies:</strong> Gardening, bird watching, and hiking.

          </p>
        </div>
      </div>
      <div className="card">
        <img src={male2} alt="Rohan Verma" className="profile-pic" />
        <div className="card-content">
          <h2>Rohan Verma</h2>
          <p>
            <strong>Party: </strong>Gamma
          </p>
          <p>
            <strong>Age:</strong> 29
          </p>
          <p>
            <strong>Education:</strong> Master’s in Computer Science, Massachusetts Institute of Technology (MIT), USA, 2019

          </p>
          <p>
            <strong>Experience:</strong> Founder & CEO, TechStart Solutions (2020-Present)
          </p>
          <p>
            <strong>Focus Areas:</strong> Digital governance, data privacy, youth entrepreneurship.

          </p>
          <p>
            <strong>Hobbies:</strong> Coding, playing the guitar, and running marathons.

          </p>
        </div>
      </div>
      <div className="card">
        <img src={female2} alt="Meera Kapoor" className="profile-pic" />
        <div className="card-content">
          <h2>Meera Kapoor</h2>
          <p>
            <strong>Party: </strong>Delta
          </p>
          <p>
            <strong>Age:</strong> 37
          </p>
          <p>
            <strong>Education:</strong> Master's in Social Work (MSW), Tata Institute of Social Sciences (TISS), Mumbai, 2011

          </p>
          <p>
            <strong>Experience:</strong> Social Worker (2012-Present)
          </p>
          <p>
            <strong>Focus Areas:</strong> Women’s empowerment, social welfare, and child education.

          </p>
          <p>
            <strong>Hobbies:</strong> Writing poetry, mentoring young girls, and cooking.

          </p>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="card">
      <img src={male3} alt="Sanjay Rao" className="profile-pic" />
      <div className="card-content">
        <h2>Sanjay Rao</h2>
        <p>
          <strong>Party: </strong>Sigma
        </p>
        <p>
          <strong>Age:</strong> 45
        </p>
        <p>
          <strong>Education:</strong> Master's in Urban Planning, School of Planning and Architecture, Delhi, 2005

        </p>
        <p>
          <strong>Experience:</strong> Urban Planner (2008-Present)
        </p>
        <p>
          <strong>Focus Areas:</strong> Urban development, transportation, and public infrastructure.

        </p>
        <p>
          <strong>Hobbies:</strong> Photography, cycling, and playing badminton.

        </p>
      </div>
    </div>
    <div className="card">
      <img src={female3} alt="Anjali Desai" className="profile-pic" />
      <div className="card-content">
        <h2>Anjali Desai</h2>
        <p>
          <strong>Party: </strong>Gamma
        </p>
        <p>
          <strong>Age:</strong> 41
        </p>
        <p>
          <strong>Education:</strong> Master’s in Education, Banaras Hindu University (BHU), 2006

        </p>
        <p>
          <strong>Experience:</strong> Former School Principal (2011-2022)
        </p>
        <p>
          <strong>Focus Areas:</strong> Education reform, child development, community engagement.

        </p>
        <p>
          <strong>Hobbies:</strong> Reading classic literature, painting, and volunteering at local libraries.

        </p>
      </div>
    </div>
    <div className="card">
      <img src={male4} alt="Karan Gupta" className="profile-pic" />
      <div className="card-content">
        <h2>Karan Gupta</h2>
        <p>
          <strong>Party: </strong>Peta
        </p>
        <p>
          <strong>Age:</strong> 39
        </p>
        <p>
          <strong>Education:</strong> Master’s in Business Administration (MBA), Indian Institute of Management (IIM) Ahmedabad, 2009

        </p>
        <p>
          <strong>Experience:</strong> Business Owner, Gupta Enterprises (2010-Present)
        </p>
        <p>
          <strong>Focus Areas:</strong> Economic development, entrepreneurship, job creation.

        </p>
        <p>
          <strong>Hobbies:</strong> Traveling, playing tennis, and investing in startups.

        </p>
      </div>
    </div>
    <div className="card">
      <img src={female4} alt="Sneha Nair" className="profile-pic" />
      <div className="card-content">
        <h2>Sneha Nair</h2>
        <p>
          <strong>Party: </strong>Zeta
        </p>
        <p>
          <strong>Age:</strong> 35
        </p>
        <p>
          <strong>Education:</strong> Master’s in Public Health (MPH), Harvard University, USA, 2015

        </p>
        <p>
          <strong>Experience:</strong> Healthcare Consultant (2018-Present)
        </p>
        <p>
          <strong>Focus Areas:</strong> Public health, rural healthcare, maternal and child health.

        </p>
        <p>
          <strong>Hobbies:</strong> Cooking, yoga, and reading medical journals.
        </p>
      </div>
    </div>
  </div>
  </Box>
  );
};

export default Candidate;
