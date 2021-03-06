import React, {Component, PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';
import {autobind} from 'core-decorators';

class Search extends Component {
  @autobind
  handleSearch(searchCriteria) {
    this.props.startSearch(searchCriteria);
  }

  renderSearchBox() {
    return <AutoComplete
      fullWidth={true}
      dataSource={[]}
      hintText="Enter your tags"
      floatingLabelText="Search for..."
      onNewRequest={this.handleSearch} />
  }

  renderResults(searchResults) {
    return searchResults.cata({
      Just: value => <div>{value.title}</div>,
      Nothing: () => <div>No results available</div>
    })
  }

  renderSearchResults() {
    const {search} = this.props;

    return (
      <div>
        {
          search.get('searchResults').cata({
            Empty: () => <div></div>,
            Loading: () => <div><CircularProgress size={80} thickness={5} /></div>,
            Success: searchResults => this.renderResults(searchResults),
            Failure: error => <div>{error.message}</div>
          })
        }
      </div>
    )
  }

  render() {
    return (
      <section>
        {this.renderSearchBox()}
        {this.renderSearchResults()}
      </section>
    )
  }
}

export default Search;
