import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Upload = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Upload Video</h1>
          <p>Upload your videos here.</p>
        </main>
      </div>
    </div>
  );
};

export default Upload;
