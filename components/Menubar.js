import React, { useReducer } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const initialState = {
  selectedMenu: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_MENU':
      return { ...state, selectedMenu: action.payload };
    default:
      return state;
  }
};
const Menubar = ({ items, onItemPress }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  items = [
    { label: '🏠 Home', event: 'home' },
    { label: 'ℹ️ About', event: 'about' },
    { label: '📞 Contact', event: 'contact' },
    { label: '👥 All Users', event: 'allUsers' },
    { label: '👤Profile', event: 'profile' },
    { label: '🛒 Products', event: 'products' },
  ];

  const handleMenuItemClick = (event) => {
    dispatch({ type: 'SELECT_MENU', payload: event });
    onItemPress(event);
  };
  return (
    <View>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => onItemPress(item.event)}>
          <Text style={styles.menuItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
       <Text>{state.selectedMenu}</Text>
</View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    padding: 10,
},
  menuItemText: {
    fontSize: 18,
  },
});

export default Menubar;
