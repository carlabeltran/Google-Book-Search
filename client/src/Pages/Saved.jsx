import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import API from "../Utils/booksAPI";
import  Container from "../Components/Container/Container";
import Col from '../Components/Col/Col';
import Row from '../Components/Row/Row'
import { List, ListItem } from "../Components/List/List";
import { Input, TextArea, FormBtn } from "../Components/Form/Form";
import DeleteBtn from '../Components/DeleteBtn/DeleteBtn'
import "../Styles/SearchResults.css";


function Books() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Books Should I Read?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={() => { }}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={() => { }}
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            onChange={() => { }}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={() => { }}
                        >
                            Submit Book
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                            {books.map(book => {
                                return (
                                    <ListItem key={book._id}>
                                        <a href={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </a>
                                        <DeleteBtn onClick={() => { }} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Books;
