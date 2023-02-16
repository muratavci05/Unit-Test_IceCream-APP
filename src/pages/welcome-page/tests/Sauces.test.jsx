import { findAllByRole, render, screen } from "@testing-library/react";
import Scoops from "../Scoops";

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

  const resimler = await screen.findAllByRole("img",{name:"cesit"}) //secici
});
