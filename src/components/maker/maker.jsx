import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
