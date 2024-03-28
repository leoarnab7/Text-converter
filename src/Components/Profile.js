import React from 'react';
import './Profile.css';
import photo from './photo.jpeg';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Profile= () => {
    return (
        <div className="profile-card">
          <div className="profile-card__header">
            <img src={photo} alt="Profile" className="profile-card__image" />
            <h2 className="profile-card__name">Arnab Pandit</h2>
            <p className="profile-card__username">Fronted Developer</p>
          </div>
          <div className="profile-card__body">
            {/* <p className="profile-card__bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tortor nec odio ultricies condimentum. Phasellus feugiat eros a turpis cursus, id tempor est mollis.</p> */}
          </div>
          <div className="profile-card__footer">
          <a href="https://www.linkedin.com/in/arnabpandit7/" target="_blank" rel="noopener noreferrer" className="profile-card__button">Follow <FaLinkedin /></a>
          <a href="https://www.linkedin.com/messaging/thread/2-YmYxM2JhMzctOTRlMC00OWIyLWE0ODUtM2ZlYWQ2MGM1ODVhXzAxMA==/" target="_blank" rel="noopener noreferrer" className="profile-card__button">Message <FaLinkedin /></a>
            <div className="profile-card__social">
          <a href="https://www.linkedin.com/in/arnabpandit7/" target="_blank" rel="noopener noreferrer" className="profile-card__social-link"><FaLinkedin /></a>
          <a href="https://www.instagram.com/leo__arnab/" target="_blank" rel="noopener noreferrer" className="profile-card__social-link"><FaInstagram /></a>
        </div>
            
          </div>
        </div>
      );
}

export default Profile;
