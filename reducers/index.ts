import { combineReducers } from "redux";


// type Category = string[];

// interface CategorySet {
//   title: string;
//   category: Category;
// }

interface ToDoItems {
//   players: Player[];
//   categorySets: CategorySet[];
//   secret: string;
//   gameDuration?: number;
}

const initialState: ToDoItems = {
  
};

const main = (state: ToDoItems = initialState, action: any) => {
  switch (action.type) {
    case 'CASE_1':
      return { ...state, ...action.payload };
  
    default:
      return state;
  }
};

export default combineReducers({
    main,
})