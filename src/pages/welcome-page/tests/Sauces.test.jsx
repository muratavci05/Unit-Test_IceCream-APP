import { render, screen } from "@testing-library/react";
import Scoops from "../Scoops";
import userEvent from "@testing-library/user-event"

//UNIT TEST

/*
    !SEÇİCİLER..

    ? Komut [ALL]  BySeçici
    ! komut > get / find / query
    ! komut > get   : (anlık istiyorsak),DOM'dda varsa kullanılır
              find  : (elementlerin ne zaman ekrana basılacağı belli değilse),async fonksiyon
              query : (elementler DOM'da yok ise)
              
                       kullanılırlar...

    
*/

test("API den gelen veri her çeşit için ekrana basılı", async () => {
  render(<Scoops />);

  //çeşitlerde resimleri çek

  const resimler = await screen.findAllByRole("img", { name: "cesit" }); //secici (selectors)
  expect(resimler).toHaveLength(4);
});

test("Dondurma çeşitlerinde ekleme ve sıfırlama işlemi", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  //gerekli elemanları alalım
  const toplamH1 = screen.getByRole("heading", {
    name: /Çeşitler Ücreti: /i,
  });

  //ekle butonlarını çekme
  const ekleBtns = await screen.findAllByRole("button", { name: /ekle/i });

  //sıfırlama butonlarını çekme
  const delBtns = await screen.findAllByRole("button", { name: /Sıfırla/i });

  //ekleme işlemleri ve kontrolü
  await user.click(ekleBtns[0]);

  expect(toplamH1).toHaveTextContent("10");

  await user.dblClick(ekleBtns[1]);

  expect(toplamH1).toHaveTextContent("10");

  //Sıfırlama işlemi
  await user.click(delBtns[1]);
  expect(toplamH1).toHaveTextContent("10");
});
