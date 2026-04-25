import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Subscriptions = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Subscriptions</h1>
          <p>Your subscribed channels' latest videos will appear here.</p>
        </main>
      </div>
    </div>
  );
};

export default Subscriptions;
