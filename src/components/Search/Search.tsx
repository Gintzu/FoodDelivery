import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

const SearchComponent = forwardRef<HTMLInputElement, SearchProps>(function Input(
	{ className, isValid = true, ...props },
	ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input
				{...props}
				ref={ref}
				className={cn(className, styles['input'], {
					[styles['invalid']]: !isValid,
				})} {...props}
			/>
			<img className={styles['icon']} src='/search-icon.svg' alt='Иконка лупы'/>
		</div>
		
	);
});

export const Search = SearchComponent;