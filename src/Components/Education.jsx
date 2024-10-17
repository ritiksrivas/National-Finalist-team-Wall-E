import React from "react";
import "./Education.css";
import TopImage1 from "../assets/top1.png";
import TopImage2 from "../assets/top1.png";
import BottomImage1 from "../assets/bottom1.png";
import BottomImage2 from "../assets/bottom2.png";

const Education = () => {
  return (
    <div className="app-container">
      <div className="purple-section">
        <div className="flex-container">
          <div className="image-group">
            <img
              src={TopImage1}
              alt="Group of people in front of a building"
              className="rounded1"
            />
            {/* <img src="https://placehold.co/300x200" alt="Building with columns" className="rounded" /> */}
          </div>
          <div className="text-container">
            <h2>
              India International Institute of Democracy and Election Management
            </h2>
            <p>
              The Election Commission of India (ECI), established the India
              International Institute of Democracy and Election Management
              (IIIDEM) to advance its professional competence in election
              management, promote peoples participation, contribute to
              developing stronger democratic institutions and support the
              efforts of ECI in carrying out its mandate and functions.
            </p>
            <p>
              Over the last six decades, the structure and functions of the
              Election Commission have undergone major changes and thus the
              management of elections has become increasingly complex. A rapid
              transformation in social context and reality, rising number of
              political parties, changing dynamics and demands of coalitions and
              alliances, frequent elections and bye-elections, increase in
              number of eligible voters and continuous updating of electoral
              rolls have led to new challenges for election management bodies of
              today.
            </p>
          </div>
        </div>
      </div>
      <div className="blue-section">
        <div className="flex-container">
          <div className="text-container">
            <h2>SVEEP</h2>
            <h3>Systematic Voters' Education and Electoral Participation</h3>
            <p>
              Systematic Voters' Education and Electoral Participation program,
              better known as SVEEP, is the flagship program of the Election
              Commission of India for voter education, spreading voter awareness
              and promoting voter literacy in India. Since 2009, we have been
              working towards preparing India's electors and equipping them with
              basic knowledge related to the electoral process.
            </p>
          </div>
          <div className="image-group">
            <img
              src={BottomImage1}
              alt="Person in a suit and sunglasses"
              className="rounded"
            />
            <img
              src={BottomImage2}
              alt="Person in a suit and glasses"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
