import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx"; // Import the new PostJob component
import ApplyJob from "./pages/ApplyJob.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-job" element={<PostJob />} /> {/* Add route for posting a job */}
      <Route path="/apply-job" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;
