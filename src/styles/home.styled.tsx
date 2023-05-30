import styled from "@emotion/styled";
import { fadeIn, fadeInLeft } from "./globalStyles";

export const GreetingHeader = styled.div`
  display: flex;
  margin-top: 12px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 8px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const GreetingText = styled.div`
  font-size: 16px;
  margin-left: 8px;
  font-style: italic;
  animation: ${fadeInLeft} 0.5s ease-in-out;
`;

export const TasksCount = styled.h4`
  /* animation: ${fadeIn} 0.5s ease-in; */
`;

export const DeleteDoneBtn = styled.button`
  position: fixed;
  display: flex;
  cursor: pointer;
  border: none;
  font-weight: bold;
  bottom: 24px;
  width: auto;
  height: 64px;
  font-size: 17px;
  padding: 18px;
  background-color: #ff453f;
  color: white;
  border-radius: 18px;
`;
