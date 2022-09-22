import { createContext, useReducer } from "react";


export const ThemeContext = createContext();

const darkState = {dark: false};

const reducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE':
      return {state : !state.dark};
      default:
        return state;
  }
}

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, darkState);
console.log(props)
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}