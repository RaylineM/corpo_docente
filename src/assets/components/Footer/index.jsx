import styles from './Footer.module.css'
import React from 'react';

function Footer(){
    return(
        <footer className={styles.footer}>
             <div className={styles.footer_container}>
                <div className={styles.footer_column}>
                    <h4>Assuntos</h4>
                    <ul>
                        <li>A instituição</li>
                        <li>Processos Seletivos</li>
                        <li>Área do Estudante</li>
                        <li>Área do Servidor</li>
                        <li>Acesso à Informação</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h4>Serviços</h4>
                    <ul>
                        <li>Comunicação Social</li>
                        <li>Consulta de Processos</li>
                        <li>E-mail Institucional</li>
                        <li>Ouvidoria</li>
                        <li>Telefones</li>
                    </ul>
                </div>

                <div className={styles.footer_column}>
                    <h4>Redes Sociais</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h4>RSS</h4>
                    <ul>
                        <li>O que é ?</li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h4>Navegação</h4>
                    <ul>
                        <li>Acessibilidade</li>
                        <li>Mapa do site</li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
export default Footer


