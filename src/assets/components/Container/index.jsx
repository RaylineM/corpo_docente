import React, { useEffect, useState } from 'react';
import styles from './Container.module.css';

function Container() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/assets/js/data.json');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setProfessores(data);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {professores.map((professor) => (
        <div className={styles.card} key={professor.id}>
          <img src={professor.foto} alt={`Foto de ${professor.nome}`} />
          <h3>{professor.nome}</h3>
          <p>Formação: {professor.formacao}</p>
          <a
            href={professor.curriculo_lattes}
            className={styles.a}
          >
            Ver Currículo Lattes
          </a>
        </div>
      ))}
    </div>
  );
}

export default Container;
