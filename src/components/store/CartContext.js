import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialItems } from './initialState';

const CartContext = React.createContext();
const ADD_ITEM = 'ADD_ITEM';
const MARK_ITEM = 'MARK_ITEM';

const itemsReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const items = [action.payload, ...state.movies];
      return {
        ...state,
        items,
      };
    }
    case MARK_ITEM: {
      const items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, marked: !item.marked };
        }

        return item;
      });

      return {
        ...state,
        items,
      };
    }

    default:
      throw new Error(`Action is not supported: ${action.type}`);
  }
};

const initialState = {
  items: initialItems,
};

export const CartProvider = props => {
  const [state, dispatch] = React.useReducer(itemsReducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <CartContext.Provider value={value} {...props} />;
};

export const useCartContext = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used inside a CartProvider');
  }

  const { state, dispatch } = context;
  const { items } = state;

  const addItem = item => {
    item.id = uuidv4();
    item.marked = false;
    console.log("adding an item")
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const markItem = id => {
    dispatch({ type: MARK_ITEM, payload: { id } });
  };

  return { items, addItem, markItem };
};
