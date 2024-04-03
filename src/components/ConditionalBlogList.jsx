import FormattedDate from './FormattedDate';
import { useState } from 'preact/hooks';

const ConditionalBlogList = ({allPosts, filteredPosts}) => {
  const [showProjects, setShowProjects] = useState(false);
  const [posts, setPosts] = useState(showProjects ? allPosts :filteredPosts);


  const handleClick = () => {
    console.log('click');
    setShowProjects((prevShowProjects) => {
      const newShowProjects = !prevShowProjects;
      setPosts(newShowProjects ? allPosts: filteredPosts);
      return newShowProjects;
    })
  }
  return (
  <section>
      <h2>Blog</h2>
    <input type="checkbox" id="show-projects" checked={showProjects} onClick={(handleClick)}/>
    <label htmlFor="show-projects">Show Project Posts</label>
    <ul className="blog-list">
      {
        posts.map((post) => (
          <li>
            <a href={`/blog/${post.slug}/`}>
              <img width={720} height={360} src={post.data.heroImage} alt="" />
              <h4 className="title">{post.data.title}</h4>
              <p className="date">
                <FormattedDate date={post.data.pubDate} />
              </p>
            </a>
          </li>
        ))
      }
    </ul>
  </section>
  )
};

export default ConditionalBlogList;