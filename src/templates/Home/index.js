import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 53,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const next = page + postsPerPage;
    const nextPosts = allPosts.slice(next, next + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: next })
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const { posts } = await loadPosts();

    this.setState({
      posts: posts.slice(page, postsPerPage),
      allPosts: posts
    });

  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, allPosts, page, postsPerPage, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => post.title.toLowerCase().includes(searchValue))
      : posts;

    return (
      <section className='container'>
        <div className="search-container">
          <TextInput handle={this.handleChange}
            value={searchValue}
          />
          {!!searchValue && (<h1>Search Value: {searchValue}</h1>)}
        </div>

        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) :
          <h1>Nenhum resultado encontrado!</h1>
        }
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Load more posts"
              handle={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
export default Home;
