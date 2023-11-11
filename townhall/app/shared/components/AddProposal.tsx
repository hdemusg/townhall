// Import necessary dependencies
import { Link, useParams } from "@remix-run/react";
import { useState } from "react";

// Function to fetch post data by ID (Assuming you have this function)
import { fetchPostById } from "./api"; // Adjust the path

export default function AddProposal() {
  // Retrieve the postId from the route parameters
  const { postId } = useParams();

  // State to hold the post data
  const [post, setPost] = useState(null);

  // Fetch post data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await fetchPostById(postId);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    };

    fetchData();
  }, [postId]);

  // State to hold form inputs
  const [formData, setFormData] = useState({
    proposalName: "",
    proposalDescription: "",
    fundingGoal: "",
    costBreakdown: "",
    competitiveAdvantage: "",
    imageUpload: null, // Use appropriate data type for file upload
  });

  // Handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit form data
    console.log("Form data submitted:", formData);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Proposal Details</h1>

      {/* Display additional details or form for proposing solutions */}
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Display other post details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Form for proposal */}
      <form onSubmit={handleFormSubmit}>
        <div style={{ margin: "20px" }}>
          <label>
            Proposal Name:
            <input
              type="text"
              value={formData.proposalName}
              onChange={(e) =>
                setFormData({ ...formData, proposalName: e.target.value })
              }
            />
          </label>
        </div>

        <div style={{ margin: "20px" }}>
          <label>
            Proposal Description:
            <textarea
              value={formData.proposalDescription}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  proposalDescription: e.target.value,
                })
              }
            />
          </label>
        </div>

        <div style={{ margin: "20px" }}>
          <label>
            Funding Goal:
            <input
              type="text"
              value={formData.fundingGoal}
              onChange={(e) =>
                setFormData({ ...formData, fundingGoal: e.target.value })
              }
            />
          </label>
        </div>

        <div style={{ margin: "20px" }}>
          <label>
            Cost Breakdown:
            <textarea
              value={formData.costBreakdown}
              onChange={(e) =>
                setFormData({ ...formData, costBreakdown: e.target.value })
              }
            />
          </label>
        </div>

        <div style={{ margin: "20px" }}>
          <label>
            Competitive Advantage/Why this proposal:
            <textarea
              value={formData.competitiveAdvantage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  competitiveAdvantage: e.target.value,
                })
              }
            />
          </label>
        </div>

        <div style={{ margin: "20px" }}>
          <label>
            Image Upload:
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, imageUpload: e.target.files[0] })
              }
            />
          </label>
        </div>

        <button type="submit">Submit Proposal</button>
      </form>

      <Link to="/" style={{ fontSize: "1rem", color: "#007BFF" }}>
        Back to Home
      </Link>
    </div>
  );
}
