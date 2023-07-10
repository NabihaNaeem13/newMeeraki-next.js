import { Bottomnav } from 'components/shared/Footer/Bottomnav';
import { Header } from '../components/shared/Header/Header';
import { Footer } from 'components/shared/Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='content'>
        {children}
      </main>
      <footer className='footer'>
        <Footer />
        <Bottomnav/>
      </footer>
    </>
  );
};
