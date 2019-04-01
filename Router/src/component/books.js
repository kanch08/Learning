import React,{Component} from 'react';
import './main.css';

class Books extends Component{
    constructor(props){
        super(props);
        this.books = [
            {
             id:1,
             name:'Fault in our Stars',
             author:'John Green',
             price:300,
             category:'motivation'},
            {
             id:2,
             name:'Story of my life',
             author:'Stephen Hawking',
             price:400,
             category:'innovating'},
            {
             id:3,
             name:'In Heaven',
             author:'William blake',
             price:500,
             category:'Horror Story'},
            {
             id:4,
             name:'five point Someone',
             author:'Chetan Bhagat',
             price:550,
             category:'Inspirational'
            },
          ];
    }
    render(){
        // const {bookname: name,author,category,price}.=this.books;
        console.log(this.books.name);
       let bookData = this.books;
        return(
                bookData.map(book=>{
                // console.log(this.books);
                return (
                    <div className="books">
                    <h1>Books Details</h1>
                        <div key={book.name}>
                            <h1>{book.name}</h1>
                            <p>{book.author}</p>
                            <p>{book.price}</p>
                            <p>{book.category}</p>
                        </div>
                    </div>
                )
              })
    
            
        )
    }
}

export default Books;