import { BookMarkIntership, NavBarConainer, NavBarContent, SearchBox } from "./styles";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <NavBarConainer>
      <img />

      <NavBarContent>
        <div>
          <h1>Laboratório de Ensino de Biologia</h1>
          <SearchBox></SearchBox>
        </div>
      </NavBarContent>

      <BookMarkIntership>
        <Link>Estágio</Link>
      </BookMarkIntership>
    </NavBarConainer>
  )
}