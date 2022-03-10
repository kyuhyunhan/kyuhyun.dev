import styled from 'styled-components';
import THEME from '@constants/theme';

const Tag = styled.span`
  margin-right: 1rem;
  color: ${THEME.COLOR.gray.dark};
`;

interface Props {
  tags: string[];
}

function Tags({ tags }: Props) {
  return (
    <div>
      {tags.map((tag, i) => {
        return <Tag key={`${i}${tag}`}>#{tag}</Tag>;
      })}
    </div>
  );
}
export default Tags;
