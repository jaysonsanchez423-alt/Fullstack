import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Profile</h1>
          <p>Your profile information.</p>
        </main>
      </div>
    </div>
  );
};

export default Profile;
