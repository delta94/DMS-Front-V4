import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import { ModalTypes } from '../../modules/modal';
import { SignIn, BugReport, ChangePW } from '../../components';
import { LogInContainer } from '../../containers';
interface Props {}
const ModalContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const modalType: ModalTypes = useSelector(
    (state: StoreState) => state.modal.modalType,
  );

  const switchShowModal = (modalType: ModalTypes): ReactNode => {
    switch (modalType) {
      case ModalTypes.LogIn:
        return <LogInContainer />;
      case ModalTypes.SignIn:
        return <SignIn />;
      case ModalTypes.BugReport:
        return <BugReport />;
      case ModalTypes.ChangePW:
        return <ChangePW />;
      case ModalTypes.none:
        return null;
      default:
        return null;
    }
  };

  return <div>{switchShowModal(modalType)}</div>;
};

export default ModalContainer;
