import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Component', () => {
    let appComponent;

    beforeEach(() => {
        appComponent = shallow(<App/>);
    });

    it('renders without crashing', () => {
      expect(appComponent.exists()).toEqual(true);
      expect(appComponent.type()).toBe('div');
      expect(appComponent.hasClass('App')).toBeTruthy();
    });

    it('should display header component with title and clear button', () => {
      const headerElement = appComponent.childAt(0);

      expect(headerElement.type()).toBe('header');
      expect(headerElement.hasClass('App-header')).toBeTruthy();

      expect(headerElement.childAt(0).type()).toBe('h1');
      expect(headerElement.childAt(0).hasClass('App-title')).toBeTruthy();
      expect(headerElement.childAt(0).text()).toBe('My To-Do App');

      expect(headerElement.childAt(1).type()).toBe('button');
      expect(headerElement.childAt(1).hasClass('clear-list-button')).toBeTruthy();
      expect(headerElement.childAt(1).text()).toBe('clear');
      expect(headerElement.childAt(1).prop('onClick')).toBe(appComponent.instance().clearList);
    });

});

