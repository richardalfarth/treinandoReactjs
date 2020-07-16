import React from 'react';
import Post from './Post';
import Routes from '../routes';
import TodoItem from './TodoList/TodoItem';

export default class App extends React.Component{
    render(){
        return(
            
            <div>
                <Routes/>
                <h1>Hello World</h1>
                <Post title ="Aprendendo  ReactJS com a RocketSeat"/>
                <Post title ="ReactJS é demais" />
                <Post title ="Em breve mais vídeos de ReactJS" />

            </div>
        );
    }
}