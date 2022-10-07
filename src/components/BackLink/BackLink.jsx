import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    color: rgb(87, 123, 190);
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftCircle size="24" />
      {children}
    </StyledLink>
  );
};