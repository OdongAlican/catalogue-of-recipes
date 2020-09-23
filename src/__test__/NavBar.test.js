import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
});

it('renders nav-bar correctly', () => {
  const { getAllByTestId } = render(<NavBar />);
  const result = getAllByTestId('navbar');
  expect(result[0]).toHaveTextContent('Stay Online');
});

it('another rendering of nav-bar correctly', () => {
  const { getAllByTestId } = render(<NavBar />);
  const result = getAllByTestId('navbar');
  expect(result[0]).not.toHaveTextContent('Stay Onlines');
});

it('matches navbar snapshot', () => {
  const tree = renderer.create(<NavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
