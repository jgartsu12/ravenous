import React from 'react';
import './SearchBar.css';


// eslint-disable-next-line 
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            term: '',
            location: '',
            sortBy: 'best_match'
        });
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    };

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    };
    
    // method to build structure of search bar comp - iterates through options in obj //
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(this.sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.props.handleSortByChange.bind(this.sortByOptionValue)}>{sortByOption}</li>
        });
    };

    handleSortByChange(sortByOption) {
        this.setState(this.sortBy);
    };

    handleTermChange(event) {
        this.setState({term: event.target.value});
    };

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    };

    handleSearch(event) {
        this.props.searchYelp.state.term.location.sortBy;
        event.preventDefault();
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange()}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange()} />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        );
    };
};

export default SearchBar;