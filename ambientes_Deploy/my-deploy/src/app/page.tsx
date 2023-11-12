// Importe a imagem que você deseja exibir

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.imageContainer}>
          {/* Substitua YourImage pelo nome da sua imagem */}
          
        </div>
        <h1>Seu Título</h1>
        <p>Sua descrição ou conteúdo</p>
        {/* Adicione mais elementos conforme necessário */}
      </div>
    </main>
  );
}
