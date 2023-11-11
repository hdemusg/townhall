// Import necessary dependencies
import { useState } from "react";

// Your existing imports remain unchanged

// Modify the Home component to include the updated layout
export default function Home() {
  // Dummy data for posts
  const posts = [
    {
      id: 1,
      magnitude: 1,
      problem: "Lack of Gender Equality in Education",
      category: "Education",
    },
    {
      id: 2,
      magnitude: 2,
      problem: "Lack of Healthy Food Options",
      category: "Food",
    },
    {
      id: 3,
      magnitude: 3,
      problem: "Excess Office Space",
      category: "Environment",
    },
    {
      id: 4,
      magnitude: 4,
      problem: "Lack of Healthy Food Options",
      category: "Food",
    },
    {
      id: 5,
      magnitude: 5,
      problem: "Lack of Healthy Food Options",
      category: "Food",
    },
    // Add more posts as needed
  ];

  // State to handle search input
  const [searchInput, setSearchInput] = useState("");

  // State to handle toggles
  const [selectedToggles, setSelectedToggles] = useState({
    scope: "",
    identity: "",
    topic: "",
  });

  // Handler for clicking on a search result
  const handleResultClick = (postId) => {
    // You can define the behavior when a result is clicked
    console.log(`Clicked on result with ID: ${postId}`);
  };

  // Filter posts based on search input and selected toggles
  const filteredPosts = posts.filter((post) => {
    const includesSearch = post.problem
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const includesScope =
      !selectedToggles.scope || post.category === selectedToggles.scope;
    const includesIdentity =
      !selectedToggles.identity || post.category === selectedToggles.identity;
    const includesTopic =
      !selectedToggles.topic || post.category === selectedToggles.topic;

    return includesSearch && includesScope && includesIdentity && includesTopic;
  });

  return (
    <div style={{ textAlign: "center" }}>
      {/* Header */}
      <h1>Find problems to find solutions</h1>

      {/* Search bar and Toggles container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ padding: "10px", fontSize: "1rem", marginBottom: "10px" }}
        />

        {/* Toggles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {/* Scope Dropdown */}
          <label style={{ marginRight: "10px" }}>
            Scope:
            <select
              value={selectedToggles.scope}
              onChange={(e) =>
                setSelectedToggles((prevToggles) => ({
                  ...prevToggles,
                  scope: e.target.value,
                }))
              }
            >
              <option value="">All</option>
              {["Community", "City", "State", "Country"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {/* Identity Dropdown */}
          <label style={{ marginRight: "10px" }}>
            Identity:
            <select
              value={selectedToggles.identity}
              onChange={(e) =>
                setSelectedToggles((prevToggles) => ({
                  ...prevToggles,
                  identity: e.target.value,
                }))
              }
            >
              <option value="">All</option>
              {[
                "Women",
                "LGBTQIA+",
                "People with Disabilities",
                "Low Income",
                "Asian",
                "Black",
                "Hispanic",
                "White",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {/* Topic Dropdown */}
          <label>
            Topic:
            <select
              value={selectedToggles.topic}
              onChange={(e) =>
                setSelectedToggles((prevToggles) => ({
                  ...prevToggles,
                  topic: e.target.value,
                }))
              }
            >
              <option value="">All</option>
              {["Environment", "Food", "Health", "Water", "Education"].map(
                (option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </label>
        </div>
      </div>

      {/* Render posts as clickable buttons with thumbs-up icon */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => handleResultClick(post.id)}
            style={{
              padding: "15px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "10px",
              width: "300px", // Set a fixed width for consistency
              cursor: "pointer", // Make the button visually appear clickable
              transition: "background-color 0.3s, transform 0.3s", // Add transition effect
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#eee"; // Hover effect
              e.target.style.transform = "scale(1.1)"; // Increase size on hover
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "inherit"; // Reset background on hover out
              e.target.style.transform = "scale(1)"; // Reset size on hover out
            }}
          >
            {post.magnitude} - {post.problem}{" "}
            <span
              role="img"
              aria-label="thumbs-up"
              style={{ fontSize: "1.5rem", marginLeft: "5px" }}
            >
              👍
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
