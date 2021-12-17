import { getTaskStatus } from '../components/API';




test('render about link', () => {

  expect(getTaskStatus("d4f61d2f-89e5-4eb0-87ac-a092f887f122")).toBe(false);

})