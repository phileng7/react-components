import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

//Fazer um novo App component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45pm" 
        content="Nice blog test!"
        avatar={faker.image.avatar()} />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00Am" 
        content="I like the subject"
        avatar={faker.image.avatar()} />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 5:00pm" 
        content="I like the writing"
        avatar={faker.image.avatar()} />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#root'));