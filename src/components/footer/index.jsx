import styles from './style.module.scss';

const Footer = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article className={styles.article}>
          <div className={styles.topRow}>
            <div className={styles.brand}>
              <span className={styles.highlightText}>
                Always giving my best.
              </span>
              <div className={styles.socialLinks}>
                <a
                  href='https://calendly.com'
                  target='_blank'
                  className={styles.socialLink}
                >
                  <img
                    height='20px'
                    width='20px'
                    src='/images/attach-svgrepo-com.svg'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://twitter.com/'
                  target='_blank'
                  className={styles.socialLink}
                >
                  <img
                    height='16px'
                    width='16px'
                    src='/images/logo.svg'
                    alt='facebook'
                  />
                </a>
                <a
                  href='https://www.instagram.com/matiasgigena_'
                  target='_blank'
                  className={styles.socialLink}
                >
                  <img
                    height='20px'
                    width='20px'
                    src='/images/instagram-svgrepo-com.svg'
                    alt='facebook'
                  />
                </a>
              </div>
            </div>
            <div className={styles.contact}>
              <span className={styles.contactText}>
                matias.gigena7@outlook.es
              </span>
              <span className={styles.contactText}>
                +54 9 11 2179 5715
              </span>
              <span className={styles.contactText}>
                Esquina Pedro Moran y Helguera.
              </span>
            </div>
          </div>
          <div className={styles.footerNote}>
            <div className={styles.divider}></div>
            <span>
              © 2024 Matias Gigena. All rights reserved.
            </span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Footer;
