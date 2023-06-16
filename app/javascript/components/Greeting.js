import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <h1>{greeting}</h1>;
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);
