import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountHeader from '../components/AccountHeader';
import { eventProgress } from '../components/API';




test('render about link', () => {
  console.log('this is a test')
  //render(<AccountHeader/>);
  //expect(screen.getByText(/about/)).toBeInTheDocument();
  //var test1 = eventProgress()
  //expect(test1).toBe([1, 3]);

  expect(eventProgress()).toExist;
})