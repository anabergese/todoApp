import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { StyledProfile } from "./Styles/Profile.styled";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
import { IUser } from "../Types/index";
import blankprofile from "../Images/blank-profile.png";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [themes] = useContext(ThemeContext);
  const { logout } = useAuth0();
  const userlogged = user as IUser;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <StyledProfile theme={themes}>
        <img
          src={userlogged.picture ? userlogged.picture : blankprofile}
          alt={userlogged.name}
        />
        <div>
          <p>{userlogged.name}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      </StyledProfile>
    )
  );
};
