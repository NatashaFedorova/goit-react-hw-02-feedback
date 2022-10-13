import styled from 'styled-components';

export const Section = styled.section`
  padding: ${props => props.theme.spacing(8)} 0;
`;

export const Container = styled.div`
  width: 400px;
  padding: 0 ${props => props.theme.spacing(4)};
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.light};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(5)};
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  display: block;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.accent}`};
  border-radius: ${props => props.theme.radii.normal};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.dark};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const StatList = styled.div``;

export const Text = styled.p`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(2)};
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
`;
export const Value = styled.span`
  font-weight: ${props => props.theme.fontWeight.mediumPlus};
`;
