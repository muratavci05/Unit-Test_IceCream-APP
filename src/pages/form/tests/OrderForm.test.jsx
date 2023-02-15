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

  //tekrar inaktif oluræ

  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});
