import styled from "styled-components";
import { flexColumn } from "../App/Global";

export const StyledCTAButton = styled.button`
  background-color: #ff4f5a;
  border-radius: 8px;
  border-style: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  height: 38px;
  width: 160px;
`;

export const StyledLanding = styled.div`
  ${flexColumn}
  align-items: center;
  margin: 1% 4%;
  width: 100vw;

  /* Style the navbar */
  header {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 20px;
  }

  nav img {
    height: 50%;
  }

  nav button {
    border: none;
    background-color: transparent;
    color: #65605f;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;
  }

  /* Style the first section */
  .section1 {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #65605f;
  }

  .section1 h1 {
    color: #65605f;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 100px !important;
    margin-bottom: 24px !important;
    width: 35rem;
  }

  .section1 img {
    margin-top: 48px;
    width: 54%;
  }

  /* Style the second section */
  .section2 {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .section2 h2 {
    color: #65605f;
    font-size: 1.8rem;
    margin-top: 180px !important;
    margin-bottom: 56px !important;
    width: 35rem;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    width: 200px;
    height: 200px;
  }

  .icon img {
    width: 32%;
    margin-bottom: 20px;
  }

  .icon h3 {
    font-size: 18px;
    text-align: center;
    color: #65605f;
  }

  /* Style the third section */
  .section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    background-color: #fff;
  }

  .image-container img {
    width: 80%;
    height: auto;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    width: 50%;
  }

  .content-container h2 {
    color: #65605f;
    font-size: 1.8rem;
    margin-bottom: 28px !important;
  }

  /* Footer */
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-top-color: #ff4f5a;
  }

  .brand-container {
    margin: 10px 60px;
  }

  .brand-container img {
    height: 35px !important;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    margin: 10px 60px;
  }

  .info-container p {
    font-size: 14px;
    color: #444444;
    margin-bottom: 10px 20px;
  }

  .info-container a {
    font-size: 14px;
    color: #444444;
    text-decoration: none;
    margin-right: 10px;
  }

  .social-container {
    display: flex;
    justify-content: center;
    margin: 10px 60px;
  }

  .social-container a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: #327f6b;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;

    img {
      width: 20px;
    }
  }

  .social-container a:hover {
    transform: scale(1.2);
  }
`;
