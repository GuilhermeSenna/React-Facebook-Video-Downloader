import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 15px;
  margin-top: 5px;
  border: 2px #1A5F7A solid;
  border-radius: 8px;
  background: #FFC900;
`;
