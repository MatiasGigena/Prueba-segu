'use client';
import styles from './styles/ButtonGrad.module.scss';

const Button = ({ buttonText, type }) => {
  return (
    <button type={type} className={styles.button}>
      {buttonText}
      <svg
        fill='currentColor'
        viewBox='0 0 24 24'
        className={styles.icon}
      >
        <path
          clipRule='evenodd'
          d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z'
          fillRule='evenodd'
        ></path>
      </svg>
    </button>
  );
};

export default Button;
