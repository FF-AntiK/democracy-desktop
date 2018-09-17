import PropTypes from 'prop-types';
import styled from 'styled-components';

// Helper
import subjectGroupIconHelper, { subjectGroups, getDisplayTitle } from 'Helpers/subjectGroupToIcon';

// Components
import Button from 'Components/shared/Button';

const Container = styled.div`
  width: 50%;
  padding-right: ${({ theme }) => theme.space(0.5)}px;
  padding-bottom: ${({ theme }) => theme.space(0.5)}px;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    width: 120px;
    padding-right: 0px;
    padding-bottom: 0px;
  }
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    flex-direction: column;
    background-color: transparent;
    min-height: 130px;
    text-align: center;
  }
`;

const ButtonIconWrapper = styled.div`
  padding-right: 5px;
  @media (min-width: ${({ theme }) => theme.responsive.mobileWidth}) {
    padding-right: 0;
  }
`;

const SubjectButton = ({ group, onClick, active }) => (
  <Container>
    <ButtonWrapper onClick={onClick}>
      <ButtonIconWrapper>
        <Button
          style={{}}
          type={active ? 'primary' : 'dashed'}
          shape="circle"
          size="large"
          icon={subjectGroupIconHelper(group)}
        />
      </ButtonIconWrapper>
      {getDisplayTitle(group)}
    </ButtonWrapper>
  </Container>
);

SubjectButton.propTypes = {
  group: PropTypes.oneOf(Object.keys(subjectGroups)).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default SubjectButton;