import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const {
    className,
    render,
    items,
    page,
    count,
  } = props;

  const mapItems = () => {
    const mapped = [];
    for (let i = (page - 1) * count; i < items.length && i < (page) * count; i += 1) {
      mapped.push(render(items[i], i));
    }
    return mapped;
  };

  return (
    <div className={className}>
      {mapItems()}
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  render: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  page: PropTypes.number,
  count: PropTypes.number,
};

List.defaultProps = {
  className: 'list',
  render: item => <div><h2>{item.title}</h2><p>{item.description}</p></div>,
  items: [{ title: 'Send items', description: 'Please provide items prop as array of objects' }],
  page: 1,
  count: 10,
};
export default List;
