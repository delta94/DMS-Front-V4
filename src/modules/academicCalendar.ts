import { ThunkAction } from 'redux-thunk';
import { getScheduleReq } from '../util/api/api';
import { AxiosError } from 'axios';
import * as apiTypes from '../util/api/apiTypes';
import * as api from '../util/api/api';

const GET_SCHEDULE = 'GET_SCHEDULE' as const;
const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS' as const;
const GET_SCHEDULE_FAILURE = 'GET_SCHEDULE_FAILURE' as const;

const getSchedule = () => ({
  type: GET_SCHEDULE,
});
const getScheduleSuccess = (schedule: apiTypes.scheduleType[]) => ({
  type: GET_SCHEDULE_SUCCESS,
  payload: schedule,
});

const getScheduleError = (err: AxiosError) => ({
  type: GET_SCHEDULE_FAILURE,
  payload: err,
});

type AcademicCalendarAction =
  | ReturnType<typeof getSchedule>
  | ReturnType<typeof getScheduleSuccess>
  | ReturnType<typeof getScheduleError>;

export const getScheduleThunk = (
  day: string,
): ThunkAction<
  void,
  AcademicCalendarState,
  null,
  AcademicCalendarAction
> => async (dispatch) => {
  dispatch({ type: GET_SCHEDULE });
  try {
    const response = await api.getScheduleReq(day);
    dispatch(getScheduleSuccess(response));
  } catch (e) {
    dispatch(getScheduleError(e.status));
  }
};

export interface AcademicCalendarState {
  schedule: apiTypes.scheduleType[] | null;
  error: any | null;
}

const initialState: AcademicCalendarState = {
  schedule: [],
  error: null,
};

function academicCalendar(
  state = initialState,
  action: AcademicCalendarAction,
): AcademicCalendarState {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
      };
    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        schedule: action.payload,
      };
    case GET_SCHEDULE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default academicCalendar;
