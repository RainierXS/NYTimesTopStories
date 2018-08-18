import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article, showFiji } = props;
  const pubDateObj = new Date(article.published_date);
  // 8/17/2018, 6:15 PM EDT
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  };
  if (showFiji) {
    options.timeZone = 'Pacific/Fiji';
  }
  const pubDate = pubDateObj.toLocaleString('en-US', options).replace(/GMT\+12|,/igm, snip => (snip === 'GMT+12' ? 'FJT' : ''));
  return (
    <div className="article">
      <div className="article__content">
        <h3 className="article__content__title">{article.title}</h3>
        <div className="article__content__byline row2">{article.byline}</div>
        <div className="article__content__date row2">{pubDate}</div>
        <p className="article__content__abstract">
          {article.abstract}
        </p>
        <div className="article__content__link">
          <a href={article.url}>Read More...</a>
        </div>
      </div>
    </div>
  );
};

// #region Article propTypes
Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    byline: PropTypes.string,
    abstract: PropTypes.string,
    published_date: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  showFiji: PropTypes.bool,
};

Article.defaultProps = {
  showFiji: false,
};
// #endregion Article propTypes

export default Article;
