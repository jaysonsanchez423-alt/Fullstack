import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Register = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Register</h1>
          <p>Create a new account.</p>
        </main>
      </div>
    </div>
  );
};

export default Register;
