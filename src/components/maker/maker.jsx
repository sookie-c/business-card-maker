import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Sookie',
      company: 'SK telecom',
      theme: 'light',
      title: 'Frontend Developer',
      email: 'sookie@something.com',
      message: 'go for it',
      fileName: 'sookie',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Bob',
      company: 'Samsung',
      theme: 'dark',
      title: 'Full Stack Developer',
      email: 'bob@something.com',
      message: 'go for it',
      fileName: 'bob',
      fileURL: 'bob.png',
    },
    {
      id: '3',
      name: 'Kim',
      company: 'Google',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'kim@something.com',
      message: 'go for it',
      fileName: 'kim',
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = (card) => {
    console.log('here');
    console.log(card);
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
