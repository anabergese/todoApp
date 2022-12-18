import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledProfile } from "./Styles/Profile.styled";
import { LogoutButton } from "./Logout";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <StyledProfile>
        <img src={user.picture} alt={user.name} />
        <div>
          <p>{user.name}</p>
          <p>Email: {user.email}</p>
          <LogoutButton />
        </div>
      </StyledProfile>
    )
  );
};
