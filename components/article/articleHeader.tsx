import { FC } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

interface Props {
  title: string;
  subtitle?: string;
}

export const ArticleHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${theme.colors.line};
`;

const Title = styled.h1`
  margin: 30px 0 0 0;
  font-size: 40px;
  font-weight: 500;
`;

const Subtitle = styled.span`
  color: ${theme.colors.subText};
  padding-bottom: 15px;
`;
