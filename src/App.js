import React, { useState, useEffect } from "react";
import axios from "axios";

import UserProfile from "./components/UserProfile";
import UserRepository from "./components/UserRepository";

function App() {
  const [userData, setUserData] = useState({});

  const [userRepository, setUserRespository] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const clientId = "5f72d84a424555f5624c";
        const clientSecret = "614b5ca8f28f09b0ba4bf5ea8dfc430d32fd08a6";
        const username = "gofordivya";
        const endpoint = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`;

        const userResponse = await axios.get(endpoint);

        const responsitoryResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        setUserData(userResponse.data);
        setUserRespository(responsitoryResponse.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="col-md-12">
        <UserProfile userData={userData}></UserProfile>
      </div>
      <div className="col-md-12 mt-4">
        <UserRepository userRepository={userRepository}></UserRepository>
      </div>
    </div>
  );
}

export default App;
