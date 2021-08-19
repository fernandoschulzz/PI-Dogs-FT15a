import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store"
import App from './App'
import thunk from 'redux-thunk'
import Home from './components/Home';

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('The component Home should mount only in /home', () => {
    it('It should mount just in route "/home"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Home)).toHaveLength(1);
    });
    it('It should not mount in route "/anotherroute"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/anotherroute' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(Home)).toHaveLength(0);
    });
  });
});