import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer, useRef, useCallback, createContext, useMemo } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
  }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback((name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        email: email
      }
    });
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  }, []);

  const memoizedDispatch = useMemo(()=>{
    return { onCreate, onDelete};
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={state}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>

          <section>
            <ContactEditor/>
          </section>
          <section>
            <ContactList/>
          </section>

        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
      
    </div>
  );
}

export default App;
