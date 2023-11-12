// Import necessary dependencies
import { useState } from "react";

// Your existing imports remain unchanged

// Create a new component for the Enter Problems page
export default function EnterProblems() {
  // State to handle search input and input height
  const [searchInput, setSearchInput] = useState("");

  // Handler for submitting search on Enter key
  const handleSearchSubmit = () => {
    // You can perform the search logic here
    console.log(`Search submitted: ${searchInput}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {/* Header */}
      <div className="h1" style={{ marginBottom: "20px" }}>Enter your problems</div>

      {/* Search bar and Enter button */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Allow the inputs to stack vertically
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <textarea
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{
            padding: "15px",
            fontSize: "1.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "300px",
            minHeight: "40px", // Minimum height
            height: "auto", // Let the height adjust dynamically
            resize: "none", // Disable manual resizing
            overflowY: "hidden", // Hide the vertical scrollbar
            marginBottom: "10px",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchSubmit();
            }
          }}
        />
        <button
          onClick={handleSearchSubmit}
          style={{
            padding: "15px",
            fontSize: "1.5rem",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s",
            width: "300px",
          }}
        >
          Enter
        </button>
      </div>

      {/* Information about how it works */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ fontSize: "1rem", textAlign: "left" }}>
          Your search bar results are anonymous and used to collect data for
          policy solutions. The information you provide will be used by the
          government to better understand and address community issues.
        </p>
        <p style={{ fontSize: "1rem", textAlign: "left" }}>
          Tips on specific info to share:
        </p>
        <ul style={{ fontSize: "1rem", textAlign: "left" }}>
          <li>Dates of incidents or observations</li>
          <li>Amount of impact on the community</li>
          <li>Personal stories or experiences</li>
        </ul>
        <p style={{ fontSize: "1rem", textAlign: "left" }}>
          Your input can be as long or as short as you desire. Your contribution
          is valuable, and it helps in shaping effective policies for positive
          change.
        </p>
      </div>
    </div>
  );
}
