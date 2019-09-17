import React from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from '../queries/queries'

class BookDetails extends React.Component {
    constructor(props){
        super(props);

        this.displayBookDetails = this.displayBookDetails.bind(this);
    }

    displayBookDetails(){
        const {book} = this.props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map(item=>(<li key={item.id}>{item.name}</li>))}
                    </ul>
                </div>
            )
        }
        return(
            <div>No book selected...</div>
        )
    }

    render(){
        return(
        <div id="book-details">
            {this.displayBookDetails()}
        </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props)=> ({
        variables: {
            id: props.bookId
        }
    })
})(BookDetails);