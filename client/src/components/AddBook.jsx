import React from 'react';
import {graphql} from 'react-apollo';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';
import { flowRight as compose } from 'lodash';



class AddBook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            genre: "",
            authirId: ""
        };
        this.submitForm = this.submitForm.bind(this);
    }

    displayAuthors(){
        let data = this.props.getAuthorsQuery;

        if(data.loading){
            return(<option>Loading Authors...</option>) 
        }
        return data.authors.map(author=>(<option key={author.id} value={author.id}>{author.name}</option>));
    }

    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authirId
            },
            refetchQueries: [{ query: getBooksQuery}]
        });
    }

    render(){
        return(
            <form id="add-book" onSubmit={this.submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e)=>this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=>this.setState({genre: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=>this.setState({authirId: e.target.value})}>
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
