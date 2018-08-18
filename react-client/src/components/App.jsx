import React, { Component } from 'react';

import SearchForm from './SearchForm';
import List from './List';
import Article from './Article';
import Pagination from './Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      filter: '',
      section: 'home',
      page: 1,
      showFiji: false,
    };
    this.NYTimesApiKey = '9e5d1d80cdf54454a5437b64ce51e603';
  }

  componentDidMount = () => {
    this.getArticlesAndFilter();
  }

  onFormChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value }, () => this.getArticlesAndFilter());
  }

  getArticlesAndFilter = () => {
    const { section } = this.state;
    this.getAllArticles(section)
      .then(({ results }) => this.filterArticles(results));
  }

  getAllArticles = (section) => {
    const baseUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json`;
    return fetch(`${baseUrl}?api-key=${this.NYTimesApiKey}`)
      .then(response => response.json());
  }

  filterArticles = (allArticles) => {
    const { filter } = this.state;
    const articles = [];
    let filters = '';

    if (filter) {
      filters = filter.split(' ')
        .reduce((acc, cur) => {
          if (cur) {
            return `${acc}(?=.*${cur})`;
          }
          return acc;
        }, '');
    }

    for (let i = 0; i < allArticles.length; i += 1) {
      if (filters) {
        if (
          RegExp(filters, 'gmi').test(`${allArticles[i].abstract} ${allArticles[i].title} ${allArticles[i].subsection}`)
        ) {
          articles.push(allArticles[i]);
        }
      } else {
        articles.push(allArticles[i]);
      }
    }

    this.setState({ articles, page: 1 });
  }

  changePage = (val) => {
    let { page } = this.state;
    switch (val) {
      case '+':
        page += 1;
        break;
      case '-':
        page -= 1;
        break;
      default:
        page = val;
        break;
    }
    this.setState({ page });
  }

  render() {
    const {
      articles,
      filter,
      section,
      page,
      showFiji,
    } = this.state;
    return (
      <div className="container">
        <nav>
          <SearchForm
            onChange={this.onFormChange}
            filter={filter}
            section={section}
            count={articles.length}
          />
          <Pagination pageCount={Math.ceil(articles.length / 10)} page={page} onChange={this.changePage} />
        </nav>
        <main>
          <List
            className="article__list"
            items={articles}
            page={page}
            count={10}
            render={
              (article, i) => (
                <Article showFiji={showFiji} article={article} key={article.url || i} count={i} />
              )
            }
          />
        </main>
        <Pagination pageCount={Math.ceil(articles.length / 10)} page={page} onChange={this.changePage} />
      </div>
    );
  }
}

export default App;
