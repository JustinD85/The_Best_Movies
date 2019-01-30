const defaultState = [{ name: 'Justin', email: 'justin@', password: '203948' }, { name: 'Justin', email: 'justin@', password: '203948' }, { name: 'Justin', email: 'justin@', password: '203948' }]

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    default: return state;
  }
}