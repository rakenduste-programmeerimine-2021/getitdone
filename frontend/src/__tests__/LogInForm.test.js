import { render, screen } from '@testing-library/react';
import LogInForm from '../components/LogInForm';



test('renders learn react link', () => {
  //https://stackoverflow.com/questions/54691799/how-to-test-a-react-component-that-is-dependent-on-usecontext-hook

  //https://stackoverflow.com/questions/54691799/how-to-test-a-react-component-that-is-dependent-on-usecontext-hook

  jest.mock('react', () => {
    const ActualReact = jest.requireActual('react')
    return {
      ...ActualReact,
      useContext: () => ({}), // what you want to return when useContext get fired goes here
    }
  })

  //const component = mount(<LogInForm />);

  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  //console.log('this is a test')
});
