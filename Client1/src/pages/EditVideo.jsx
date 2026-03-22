import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const EditVideo = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <Sidebar isOpen={false} />
        <main className="page-main">
          <h1>Edit Video</h1>
          <p>Edit your video details.</p>
        </main>
      </div>
    </div>
  );
};

export default EditVideo;
