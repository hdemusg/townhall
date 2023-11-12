// Import necessary dependencies
import { useState } from "react";
import { Problem } from '@prisma/client'
import { Link } from "@remix-run/react";

import { useNavigate } from '@remix-run/react'

// Modify the Home component to include the updated layout
export default function Home({ problems }: { problems: Problem[] }) {

  // State to handle search input
  const [searchInput, setSearchInput] = useState("");

  // State to handle toggles
  const [selectedToggles, setSelectedToggles] = useState({
    scope: "",
    identity: "",
    topic: "",
  });

  const navigate = useNavigate()

  // const [selectedProb, setSelectedProb] = useState(null);

  /*
  const handleCloseDetail = () => {
    setSelectedProb(null);
  };
  */

  const handleSearchSubmit = () => {
    // You can perform the search logic here
    console.log(`Search submitted: ${searchInput}`);
  };

  const [filteredProbs, setFilteredProbs] = useState(problems);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Header */}
      <div className="h1">Find problems to find solutions.</div>

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
        <div 
            className="filter">
          <input
            type="text"
            placeholder="keywords"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "1rem",
              marginBottom: "10px",
              marginRight: "10px"
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
              padding: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Search
          </button>
        </div>

        {/* Toggles */}
        <div className="toggleBar">
          {/* Scope Dropdown */}
          <div className="dropdownMenu">
          <label className="dropdownLabel" />
            Scope:
            <select
            className="select"
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
          </div>
          

          {/* Identity Dropdown */}
          <div className="dropdownMenu">
          <label className="dropdownLabel" />
            Identity:
            <select
            className="select"
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
          </div>
          

          {/* Topic Dropdown */}
          <label className="dropdownLabel">
            Topic:
            <select
            className="select"
              value={selectedToggles.topic}
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
         {problems == null ? "None" : problems.map((prob) => (
            <div key={prob.id} className="problemCard" onClick={(e) => navigate(`/problems/${prob.id}`)}>
                  {prob.problem}
           </div>
        ))}
      </div>
    </div>
  );
}
