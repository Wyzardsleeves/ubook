import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BookShow from './BookShow';
import Dropdown from 'react-dropdown';

class BookNew extends Component{
  constructor(props){
    super(props);
    this.state = {
      documentFile: null,
      current_category: 'Education',
      current_rating: 'Everyone'
    }
  }

  componentWillMount(){
    //Code might go here later
  }

  goToHome = () => {
    this.props.history.push('/');
  }

  newBook = () => {
    let routeID = 0;
    const formData = new FormData();
    formData.append('book[title]', this.refs.title.value);
    formData.append('book[description]', this.refs.description.value);
    formData.append('book[rating]', this.state.current_rating);
    formData.append('book[category]', this.state.current_category);
    formData.append('book[document]', this.state.documentFile);

    axios.post('/books/', formData)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message))
    this.props.history.push(`/`);
  }

  handleFile = (e) => {
    this.setState({documentFile: e.currentTarget.files[0]});
  }

  setCategory = (e) => {
    this.setState({current_category: e.value})
  }

  setRating = (e) => {
    this.setState({current_rating: e.value})
  }

  render(){
    const category_options = ["Eduction", "Children", "Romance", "Nonfiction", "Teen and Young Adult", "Biography/Memior", "Mystery/Thriller", "Science Fiction", "Fantasy", "Comics and Graphic Novels", "Manga", "Parenting and Relationships", "History", "Cook Books", "Manuals"];
    const rating_options = ["Everyone", "Teen", "Mature", "Adults Only"];
    return(
      <section className="new-book-comp">
        <div className="container">
          <section>
            <div>
              <h3><i className="far fa-file"></i>New Book</h3>
            </div>
            <div>
              <form id="new-book-form" onSubmit={this.newBook}>
                <p><i>PDF's only (must be less than 1mb)</i></p>
                <input type="file" onChange={this.handleFile}/>
                <input type="text" ref="title" placeholder="New Book Title" /><br/>
                <input type="text" ref="description" placeholder="New Book Description" /><br/>
                <section className="book-sub-data">
                  <div className="book-rating">
                    <p>Rating: </p>
                    <Dropdown
                      options={rating_options}
                      onChange={this.setRating}
                      value={this.state.current_rating} />
                  </div>
                  <div className="book-category">
                    <p>Category: </p>
                    <Dropdown
                      options={category_options}
                      onChange={this.setCategory}
                      value={this.state.current_category} />
                  </div>
                </section>
                <input style={{marginRight: "10px"}} className="btn" type="submit" />
                <button onClick={this.goToHome} className="btn red lighten-2">Cancel</button>
              </form>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default BookNew;
