import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import Recipe from '../components/Recipe';

const recipe = {
  image: 'sample',
  title: 'title',
  site: 'site',
};

afterEach(cleanup);

it('renders recipe correctly', () => {
  const { getAllByTestId } = render(<Recipe recipe={recipe} />, { wrapper: MemoryRouter });
  const result = getAllByTestId('recipe');
  expect(result[0]).toHaveTextContent('title company: Visit Us:siteView Details');
});

it('another rendering of recipe correctly', () => {
  const { getAllByTestId } = render(<Recipe recipe={recipe} />, { wrapper: MemoryRouter });
  const result = getAllByTestId('recipe');
  expect(result[0]).not.toHaveTextContent('titler company: Visit Us:siteView Details');
});

it('matches recipe snapshot', () => {
  const appointment = renderer.create(<Router><Recipe recipe={recipe} /></Router>);
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
