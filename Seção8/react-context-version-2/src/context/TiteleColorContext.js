import { createContext, useReducer, useState } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
      case "WHITE":
      return { ...state, color: "white  " };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "purple",
  });

  console.log("Title Color Context:", state);

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
//criamos aqui um contexto um pouco mais complexo, no sentido de estarmos levando dois elementos dentro do useReducer.
// sendo que o state garrega a cor inicial que e roxo, e o dispatch vai alterar essas cores