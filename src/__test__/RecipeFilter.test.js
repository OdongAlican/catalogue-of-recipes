import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RecipeFilter from '../components/RecipeFilter';

afterEach(cleanup);
const initialState = { output: 10 };
const mockStore = configureStore();
let store;

const recipiesData = {
  recipies: [{
    image: 'sample',
    title: 'title',
    site: 'site',
    publishedDate: '2020-09-23 15:00:00',
  }],
};

it('renders RecipeFilter correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Provider store={store}><RecipeFilter recipiesData={recipiesData} /></Provider>,
  );
  const result = getAllByTestId('recipeFilter');
  expect(result[0]).toHaveTextContent('SELECT COMPANY:All');
});

it('another rendering of nav-bar correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Provider store={store}><RecipeFilter recipiesData={recipiesData} /></Provider>,
  );
  const result = getAllByTestId('recipeFilter');
  expect(result[0]).not.toHaveTextContent('some random string');
});

it('matches RecipeFilter snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}><RecipeFilter recipiesData={recipiesData} /></Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
