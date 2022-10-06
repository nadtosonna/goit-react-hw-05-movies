import { HiSearch } from 'react-icons/hi';
import { Notify } from 'notiflix';
import css from './SearchForm.module.css';
import { useState } from "react";

function SearchForm({onSubmit}) {
    const [query, setQuery] = useState('');

    const handleChange = event => {
        const { value } = event.currentTarget;
        setQuery(value);
        console.log(value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();

        if (query.trim() === '') {
            Notify.failure('Enter your search request, please!');
            return;
        }
        onSubmit(query);
        setQuery('');
    }

        return (
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Enter movie title"
                    onChange={handleChange}
                    value={query}
                    />
                    
                <button type="submit" className={css.searchBtn}>
                    <span className={css.searchLabel}> <HiSearch size={40} className={css.search} /></span>
                </button>
            </form>
        )
}

export default SearchForm;