const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_PAGE_NAME = 'SET_PAGE_NAME';
const SET_LOADING = 'SET_LOADING';
const SET_TOKEN = 'SET_TOKEN';

// 1° Hasta aca definimos el valor inicial de las variables a las que queremos acceder globalmente
//STATE INICIAL:
const stateInitial = {
  pageTitle: '',
  loading: false,
  jwt: false,
  todo: [],
};

//2° Luego debemos definir un selector para poder acceder al estado desde cualquier componente
//SELECTORES:
export const appSelector = {
  todo: state => state.todo,
  pageTitle: state => state.pageTitle,
  loading: state => state.loading,
  jwt: state => state.jwt,
};

// 3° Lo siguiente son las action. Estas son funciones que permiten operar
//con las variables del estado, estas funciones ejecuta el bloque de
//código de alguno de los reducers que coincida con el type del action.

//ACTIONS:

export const appActions = {
  setPageTitle: title => ({
    type: SET_PAGE_NAME,
    title,
  }),
  loading: payload => ({
    type: SET_LOADING,
    payload,
  }),
  setToken: payload => ({
    type: SET_TOKEN,
    payload,
  }),
  addTodo: payload => ({
    type: ADD_TODO,
    payload,
  }),
  setCompletedTodo: payload => ({
    type: COMPLETE_TODO,
    payload,
  }),
  deleteTodo: id => ({
    type: DELETE_TODO,
    id,
  }),
};

//En este caso de arriba: tenemos 3 actions. Una es para agregar nuevas tareas,
//otra para actualizar si se completa, y la última es para eliminar esa
//tarea de la lista.

//4° Por último definimos los reducers.
//REDUCER
export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case SET_PAGE_NAME:
      return {
        ...state,
        pageTitle: action.title,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        jwt: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map(t => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: action.payload.completed,
            };
          }
          return t;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(t => t.id !== action.id),
      };

    default:
      return state;
  }
};
