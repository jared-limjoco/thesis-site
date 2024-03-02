import NextLink from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

export default function Link({ href, children }) {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <p className={router.asPath === href ? styles.active : styles.link}><span>{children}</span></p>
    </NextLink>
  );
}
