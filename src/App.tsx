import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { USER_TYPE } from './store/UserReducer';
import UserDisplay from './components/UserDisplay';
import { POST_TYPE } from './store/PostReducer';
import PostDisplay from './components/PostDisplay';
import ContextTester from './components/ContextTester';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ScreenC from './components/ScreenC';
import ApiProducts from './components/ApiProducts';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {

  const [userid, setUserid] = useState(0);
  const dispatch = useDispatch();
  const [postid, setPostId] = useState(0);

  const onChangeUserId = async (e:
    React.ChangeEvent<HTMLInputElement>) => {
    const useridFromInput = e.target.value ? Number(e.target.value) : 0;
    console.log("userid", useridFromInput);
    setUserid(useridFromInput);
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      console.log("users", users);
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id ===
          useridFromInput;
      });
      console.log("usr", usr);
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      });
    }
  }

  const onChangePostId = async (e:
    React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;
    setPostId(postIdFromInput);
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/" + postIdFromInput);
    if (postResponse.ok) {
      const post = await postResponse.json();
      console.log("post", post);
      dispatch({
        type: POST_TYPE,
        payload: {
          id: post.id,
          title: post.title,
          body: post.body
        }
      })
    }
  }

  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is ScreenC" />;
    };
  return (
    <div className="App">
      <Header />
      
        <Switch>
          <Route exact={true} path="/" component = {Home} />
          <Route path="/apiproducts" component = {ApiProducts} />
          <Route path="/c/:userid" render={renderScreenC} />
          <Route path="/context" component = {ContextTester} />
          <Route path="/about" component = {About} />
          {/* <React.Fragment>
          <div style={{ width: "300px" }}>
            <div className="App">
              <label>user id</label>
              <input value={userid} onChange=
                {onChangeUserId} />
            </div>
            <UserDisplay />
          </div>
          <br />
          <div style={{ width: "300px" }}>
            <div className="App">
              <label>post id</label>
              <input value={postid} onChange={onChangePostId}
              />
            </div>
            <PostDisplay />
          </div>
          <ContextTester />
        </React.Fragment> */}
        </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
