import styled from 'styled-components';
import THEME from '@constants/theme';

const Tag = styled.span`
  margin-right: 1rem;
  color: ${THEME.COLOR.gray.dark};
`;

function Tags({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag: string, i: number) => {
        return <Tag key={`${i}${tag}`}>#{tag}</Tag>;
      })}
    </>
  );
}
export default Tags;
