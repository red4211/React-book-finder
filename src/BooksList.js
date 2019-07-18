import React, { Component } from 'react';
class BooksList extends Component{
  render(){
    var list = this.props.list.map((current,index)=>{
      let author;
      let image;

      if(current.authors){
      let authorString="" ;
      current.authors.forEach((curItem, index)=>{
        if(index==0){
          authorString+=curItem;
        }else{
          authorString+=(", "+curItem);
        }
      });

        author = <p>Author: {authorString}</p>
      }

      if(current.imageLinks){
        image = <img src={current.imageLinks.smallThumbnail} />
      }else{
        image = <img src="" />
      }
      return <li key={index}>
        {image}
        <p className="title" >{current.title} </p>
        {author}
        <p>Published: {current.publishedDate} </p>
        <p><a href={current.canonicalVolumeLink} >link</a></p>
      </li>
    });

    return(
        <ul className="bookList" >{list} </ul>
      )
  }
}

export default BooksList;