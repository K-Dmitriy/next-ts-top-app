import { FooterProps } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<p className={styles.p}>OwlTop &copy; 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
			<a href="!#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="!#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
