export const setGreeting = (greeting) => ({
  type: 'SET_GREETING',
  payload: greeting,
});

export const fetchGreeting = () => {
  return (dispatch) => {
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.greeting)))
      .catch((error) => console.error(error));
  };
};
