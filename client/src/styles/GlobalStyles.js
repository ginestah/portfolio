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
  .headshot{
    width:350px;
    border: 2px solid ${({ theme }) => theme.text}
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
  background-color:${({ theme }) => theme.button};
  max-width:20vw;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.send:hover{
  transform:scale(1.05);
  cursor: pointer;

}
@media (max-width: 400px) {
  .headshot {
    width: 200px;
    margin: 5px;
    /* align-self: flex-start; */
  }
  .project-card{
     /* width:100vw; */
  }
  .send{
    max-width:25vw;
  }
}
  `;
