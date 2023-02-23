import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from '../Toppings';

test('sos verilerinin sepet statei üzerinde yaptığı değişim', async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  //gerekli elementlerin çekilmesi
  const toplamH1 = screen.getByRole('heading', {
    name: /Soslar Ücret: /i,
  });
  const mochiCheck = await screen.findByRole('checkbox', { name: /mochi/i });
  const cherryCheck = await screen.findByRole('checkbox', {
    name: /cherries/i,
  });

  // sosun eklnemesi ve toplamın değişmesi
  await user.click(mochiCheck);
  expect(toplamH1).toHaveTextContent('3');

  //   yeni sos ekleme
  await user.click(cherryCheck);
  expect(toplamH1).toHaveTextContent('6');

  //sos çıkarma
  await user.click(mochiCheck);
  expect(toplamH1).toHaveTextContent('3');
});