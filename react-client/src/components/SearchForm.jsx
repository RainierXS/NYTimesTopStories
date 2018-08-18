import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  const options = [
    'home',
    'opinion',
    'world',
    'national',
    'politics',
    'upshot',
    'nyregion',
    'business',
    'technology',
    'science',
    'health',
    'sports',
    'arts',
    'books',
    'movies',
    'theater',
    'sundayreview',
    'fashion',
    'tmagazine',
    'food',
    'travel',
    'magazine',
    'realestate',
    'automobiles',
    'obituaries',
    'insider',
  ];
  const {
    onChange,
    filter,
    section,
    count,
  } = props;
  return (
    <div className="search_container">
      <form className="search_form">
        <div className="search_form__main">
          <label
            className="search_form__label"
            htmlFor="filter"
          >
            <span>Filter terms (inclusive)</span>
            <input
              className="search_form__input"
              name="filter"
              id="filter"
              placeholder="Filter Articles"
              value={filter}
              onChange={onChange}
            />
          </label>
          <label
            className="search_form__label"
            htmlFor="section"
          >
            <span>Section</span>
            <select
              className="search_form__select"
              name="section"
              id="section"
              value={section}
              onChange={onChange}
            >
              {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
          </label>
        </div>
        <div className="fiji_toggle row2">
          <label
            className="fiji_toggle__label"
            htmlFor="showFiji"
          >
            <input
              className="fiji_toggle__checkbox"
              type="checkbox"
              name="showFiji"
              id="showFiji"
              onChange={onChange}
            />
            <span>Show Fiji Times</span>
          </label>
        </div>
        <div className="article_count row2">Articles: {count}</div>
      </form>
    </div>
  );
};

// #region SearchForm propTypes
SearchForm.propTypes = {
  filter: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number,
};
SearchForm.defaultProps = {
  count: 0,
};
// #endregion SearchForm propTypes

export default SearchForm;
