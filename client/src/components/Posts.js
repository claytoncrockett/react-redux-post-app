import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Card key={post.id}>
        <Card.content>
          <Card.header> {post.author}</Card.header>
          </Card.content>
          <Card.content>
            {post.body}
        </Card.content>
        <Card.content extra>
        <button> Edit </button>
        <button> Delete </button>
        </Card.content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
          <Card.Group itemsPerRow={4}>
           { this.posts() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);