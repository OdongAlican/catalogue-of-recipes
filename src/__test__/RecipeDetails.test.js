import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';

const location = {
  state: {
    recipe: {
      image: 'sample',
      title: 'title',
      site: 'site',
      publishedDate: '2020-09-23 15:00:00',
    },
  },
};

afterEach(cleanup);

it('renders recipeDetaills correctly', () => {
  const { getAllByTestId } = render(
    <RecipeDetails location={location} />, { wrapper: MemoryRouter },
  );
  const result = getAllByTestId('recipeDetails');
  expect(result[0]).toHaveTextContent('title Published Date: Wed Sep 23 2020 Web-site: siteHome');
});

it('renders recipeDetaills correctly', () => {
  const { getAllByTestId } = render(
    <RecipeDetails location={location} />, { wrapper: MemoryRouter },
  );
  const result = getAllByTestId('recipeDetails');
  expect(result[0]).not.toHaveTextContent('any random string');
});

it('matches recipeDetails snapshot', () => {
  const appointment = renderer.create(<Router><RecipeDetails location={location} /></Router>);
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
