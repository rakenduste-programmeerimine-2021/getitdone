import { render } from '@testing-library/react';
import Home from '../pages/Home';
import Webapp from "../webapp";



test('render about link', () => {
  //https://stackoverflow.com/questions/65425884/react-router-v6-error-useroutes-may-be-used-only-in-the-context-of-a-route
  render(
    <Webapp>
      { <Home/> }
    </Webapp>
    )

})