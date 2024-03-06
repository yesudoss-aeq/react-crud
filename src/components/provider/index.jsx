import { createContext, useReducer } from "react";

const initialState = {
  name: "RDJ",
  charactor: "Tony stark",
  age: 40,
  marvelCharactor: "iron man",
};
export const valueContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "changer":
      return { ...state, name: action.payload };
  }
};

const ValueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nameChanger = (name) => {
    dispatch({ type: "changer", payload: name });
  };

  const value = {
    ...state,
    nameChanger,
  };

  return (
    <valueContext.Provider value={value}>{children}</valueContext.Provider>
  );
};

export default ValueProvider;
