import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { page, pageCount } = props;
  const renderPageButtons = () => {
    const buttons = [];
    buttons.push(
      <button
        type="button"
        className="pagination__button"
        onClick={() => props.onChange('-')}
        disabled={page <= 1}
      >
        {'<'}
      </button>,
    );

    for (let i = 1; i <= pageCount; i += 1) {
      buttons.push(
        <button
          type="button"
          className={`pagination__button __page ${page === i ? 'active' : ''}`}
          onClick={() => props.onChange(i)}
          disabled={page === i}
          key={i}
        >
          {i}
        </button>,
      );
    }

    buttons.push(
      <button
        type="button"
        className="pagination__button"
        onClick={() => props.onChange('+')}
        disabled={page >= pageCount}
      >
        {'>'}
      </button>,
    );

    return buttons;
  };
  return (
    <div className="pagination">
      {renderPageButtons()}
    </div>
  );
};

// #region Pagination propTypes
Pagination.propTypes = {
  page: PropTypes.number,
  pageCount: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
Pagination.defaultProps = {
  page: 1,
  pageCount: 1,
};
// #endregion Pagination propTypes

export default Pagination;
