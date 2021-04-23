import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis' //let it default for now

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}