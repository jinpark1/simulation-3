import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux'
import { username, getPosts, userData } from '../../ducks/reducer'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state ={
      posts: ''
    }
  }
  componentDidMount(){

    function userData(){
      return axios.get('/user-data')
    }

    function getPosts(){
      return axios.get('/api/posts')
    }

    axios.all([userData(), getPosts()]).then(axios.spread((userData, Posts)=> {
        console.log(userData.data)
        this.setState({
          posts: Posts.data
        })
        this.props.getPosts(Posts.data)
        this.props.userData(userData.data)
    })

    )

    // axios.get('/user-data').then(response => {
    //   this.props.username(response.data.username)
    // })

    // axios.get('/api/posts').then(response =>{
    //   console.log('api posts props---', this.props)
    //   console.log('api posts------', response)
    //   this.props.posts(response.data)
    // })
  }

  // componentWillMount(){

  //   axios.get('/api/posts').then(response =>{
  //     console.log('api posts props---', this.props)
  //     console.log('api posts------', response)
  //     this.props.posts(response.data)
  //   })

  // }


  render() {
    console.log('Dashboard---', this.props)
    console.log('Dashboard---state', this.state.posts)

  let navbar = this.props.location.pathname != '/' ? <Nav /> : '';

  let showPost = this.props.posts.map( e => {
    return (
      <div className="posts" key={e.id}>
        <p>Title: {e.title}</p>
        <p>image: {e.img}</p>
        <p>content: {e.content}</p>
      </div>
    )
  })


    return (
      <div>
        <Nav/>
        <div className="dashboard">
          <div>Dashboard Component Test</div>
          <div>{showPost}</div>
        </div>
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    posts: state.posts,
    username: state.username
  }
}

const mapDispatchToProps = {
  getPosts,
  userData
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
