import React, { useState } from 'react';
import '../style/Profile.scss';
import Nav from '../../shared/components/Nav';

const userData = {
  username: "sunflower_power77",
  name: "Autumn Lopez",
  bio: "Big into hiking & nature 🌲",
  profilePic: "https://picsum.photos/id/64/150/150",
  stats: { posts: 9, followers: 852, following: 756 }
};

const mockPosts = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/id/${10 + i}/300/300`);

const mockFollowList = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  username: `user_friend_${i + 1}`,
  pic: `https://picsum.photos/id/${20 + i}/50/50`
}));

function Profile() {
  const [modalType, setModalType] = useState(null);

  return (
    

    <>
    <Nav/>
    <div className="profile-page">
      <div className="profile-header">
        <h2>{userData.username}</h2>
        <div className="header-icons">
          <span>+</span>
          <span>≡</span>
        </div>
      </div>

      <div className="profile-info">
        <div className="profile-pic-container">
          <img src={userData.profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{userData.stats.posts}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item" onClick={() => setModalType('Followers')}>
            <span className="stat-number">{userData.stats.followers}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item" onClick={() => setModalType('Following')}>
            <span className="stat-number">{userData.stats.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>
      </div>

      <div className="profile-bio">
        <p className="full-name">{userData.name}</p>
        <p className="bio-text">{userData.bio}</p>
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

      <div className="post-grid">
        {mockPosts.map((post, idx) => (
          <div key={idx} className="post-item">
            <img src={post} alt={`Post ${idx}`} />
          </div>
        ))}
      </div>

      {modalType && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalType}</h3>
              <button onClick={() => setModalType(null)}>✕</button>
            </div>
            <div className="modal-list">
              {mockFollowList.map(user => (
                <div key={user.id} className="list-item">
                  <img src={user.pic} alt={user.username} />
                  <span>{user.username}</span>
                  <button className="remove-btn">Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Profile;