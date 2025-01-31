import React from 'react';
import './app.css';
import { FaUserGraduate } from "react-icons/fa";

export default function Main() {
  return (
    <div className='splash-screen'>
      <div className="patterns">
        <div className="logo-container">
          <svg height="50vh" width="100%" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
            <text id="page-logo" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
              DegreeFYD
            </text>
          </svg>
          <div className="caption">
            <p >Padhega India, Tabhi To Badhega India</p>
          </div>
        </div>
      </div>
      <span>
        <FaUserGraduate className='splash-icon' />
      </span>
    </div>
  );
}
