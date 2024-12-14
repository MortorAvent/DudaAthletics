import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import { useState } from 'react';

function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('User logged out');
    // Możesz dodać tutaj nawigację na stronę główną lub inną logikę
  };

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Laboratorium 1', link: '/lab1' },
    { id: 3, label: 'Laboratorium 2', link: '/lab2' },
    { id: 4, label: 'Laboratorium 3', link: '/lab3' },
    { id: 5, label: 'Laboratorium 4', link: '/lab4' },
    { id: 6, label: 'Mój profil', link: '/profile' },
    { id: 7, label: 'Zarejestruj się', link: '/register' },
    { id: 8, label: 'Wyloguj się', link: '/' },
  ];

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <NavBarMenu
          items={menuItems}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          showRegisterButton={!isLoggedIn}
        />
        <Container className="flex-grow-1 mt-4">{children}</Container>
        <Footer />
      </div>
    </>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;

 