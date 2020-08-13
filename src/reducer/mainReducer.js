const UPDATE_TITLE = 'UPDATE_TITLE'
const UPDATE_COUNT = 'UPDATE_COUNT'
const ADD_INCOME = 'ADD_INCOME'
const ADD_EXPENSE = 'ADD_EXPENSE'

const initialState = {
   content: [],
   updateTitle: '',
   updateCount: ''
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_INCOME:
         return {
            ...state,
            content: [...state.content, { id: Date.now(), text: state.updateTitle, count: '+' + state.updateCount }],
            updateTitle: '',
            updateCount: ''
         }
      case ADD_EXPENSE:
         return {
            ...state,
            content: [...state.content, { id: Date.now(), text: state.updateTitle, count: '-' + state.updateCount }],
            updateTitle: '',
            updateCount: ''
         }
      case UPDATE_TITLE:
         return {
            ...state,
            updateTitle: action.title,
         }
      case UPDATE_COUNT:
         return {
            ...state,
            updateCount: action.count
         }
      default:
         return state
   }
}

export const updateTitleCreator = (title) => {
   return { type: UPDATE_TITLE, title }
}

export const updateCountCreator = (count) => {
   return { type: UPDATE_COUNT, count }
}

export const addIncomeCreator = () => {
   return { type: ADD_INCOME }
}

export const addExpenseCreator = () => {
   return { type: ADD_EXPENSE }
}
