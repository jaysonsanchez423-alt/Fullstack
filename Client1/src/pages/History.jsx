import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const History = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>History</h1>
          <p>Your watch history will appear here.</p>
        </main>
      </div>
    </div>
  );
};

export default History;
