import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Login = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Login</h1>
          <p>Please log in to your account.</p>
        </main>
      </div>
    </div>
  );
};

export default Login;
