import { runSaga } from 'redux-saga';

export const recordSaga = async (saga, initialAction) => {
  const dispatched = [];
  //TODO

  await runSaga(
    {
      dispatch: action => dispatched.push(action) //TODO
    },
    saga,
    initialAction
  ).done; //TODO

  return dispatched;
};
