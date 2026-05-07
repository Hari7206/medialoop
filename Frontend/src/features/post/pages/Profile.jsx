import React, { useState } from 'react';
import '../style/Profile.scss';
import Nav from '../../shared/components/Nav';
import { usePost } from '../hook/usePost';
import { useEffect } from 'react';



function Profile() {


    const { user , loadUser} = usePost()

    useEffect(() => {
    loadUser();
}, []);


if (!user) return <p>Loading...</p>;
  return (
    

    <>
    <Nav/>
    <div className="profile-page">
      <div className="profile-header">
        <h2>{user.username}</h2>
        <div className="header-icons">
          <span>+</span>
          <span>≡</span>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-pic-container">
          <img src={user.profileImage} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item" onClick={() => setModalType('Followers')}>
            <span className="stat-number">{}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item" onClick={() => setModalType('Following')}>
            <span className="stat-number">{}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>

      <div className="profile-bio">
        <p className="full-name">{}</p>
        <p className="bio-text">{user.bio}</p>
      </div>

      <div className="profile-actions">
        <button className="edit-btn">Edit Profile</button>
      </div>

      <div className="profile-tabs">
        <div className="tab active">
          <svg aria-label="" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
        </div>
        <div className="tab">
          <svg aria-label="" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z"></path></svg>
        </div>
      </div>

     

    </div>
    </>
  );
}

export default Profile;