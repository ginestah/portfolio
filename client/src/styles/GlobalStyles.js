import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .project-card{
    border: 1px solid ${({ theme }) => theme.text};
  }
  
  footer a {
  text-decoration: none;
  color: ${({ theme }) => theme.text};
}
.change-theme {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  padding: 2px;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: solid 2px #8a9496;
  color: ${({ theme }) => theme.text};  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  background-color: #8a9496;
}
.project-link{
  color: ${({ theme }) => theme.text};
}
form{
background-color:${({ theme }) => theme.background};
}
.send{
  background-color:${({ theme }) => theme.button}
}
  `;
