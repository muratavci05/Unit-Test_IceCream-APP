import { render, screen } from "@testing-library/react";
import Form from "../Form";
import userEvent from "@testing-library/user-event";

test("onayladıgında buton tıklanabilir olur",async() => {
  const user = userEvent.setup();
  render(<Form />);

  //gerekli elemanları alalım
  const termsCheck = screen.getByRole("checkbox",{name: "Koşulları okudum ve kabul ediyorum"});
  const orderBtn = screen.getByRole("button",{name: /siparişi onayla/i });

  //buton inaktiftir ve checkbox tiklanmamiştir

  expect(orderBtn).toBeDisabled();
  expect(termsCheck).not.toBeChecked();

  // sözleşmeleri kabul eder
  await user.click(termsCheck);
  expect(orderBtn).toBeEnabled();

  //tekrar inaktif olur

  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});
test('koşulların üstüne  mouse gelince bilgilendirme  çıkıyor', async () => {
  render(<Form />);
  const user = userEvent.setup();

  //   gerekli elementler
  const buton = screen.getByRole('button', { name: /Siparişi Onayla/i });
  const termsCheck = screen.getByRole('checkbox', {
    name: 'Kosulları okudum ve kabul ediyorum',
  });
  await user.click(termsCheck);

  // kosulların üstüne mouse u getir
  await user.hover(buton);
  const popup = screen.getByText(/size gerçekten birsey teslim etmeyeceğiz/i);

  expect(popup).toBeVisible();

  //mouse gittiğinde kaybolur
  await user.unhover(buton);
  expect(popup).not.toBeVisible();
});

