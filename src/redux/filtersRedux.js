/* SELECTORS */
export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_TAG = createActionName('CHANGE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeSearchDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeSearchTag = payload => ({ payload, type: CHANGE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION: // payload = { type: 'to', value: 4 }
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: parseInt(action.payload.value),
        },
      };
    case CHANGE_TAG:

      if(statePart.tags.includes(action.payload)) {
        return {
          ...statePart,
          tags: statePart.tags.filter(tag => tag !== action.payload),
        };
      } else {
        return {
          ...statePart,
          tags: [...statePart.tags, action.payload],
        };
      }

    default:
      return statePart;
  }
}
