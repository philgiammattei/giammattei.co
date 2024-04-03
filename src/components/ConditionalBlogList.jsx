import FormattedDate from "./FormattedDate";
import { useState } from "preact/hooks";

const ConditionalBlogList = ({ allPosts, filteredPosts }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [posts, setPosts] = useState(showProjects ? allPosts : filteredPosts);

  const handleClick = () => {
    console.log("click");
    setShowProjects((prevShowProjects) => {
      const newShowProjects = !prevShowProjects;
      setPosts(newShowProjects ? allPosts : filteredPosts);
      return newShowProjects;
    });
  };
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="mb-0">Blog</h2>
        <div class="checkbox">
          <input
            type="checkbox"
            id="show-projects"
            checked={showProjects}
            onClick={handleClick}
            className="mr-2"
          />
          <label htmlFor="show-projects">Show Project Posts</label>
        </div>
      </div>

      <ul className="blog-list">
        {posts.map((post) => (
          <li>
            <a href={`/blog/${post.slug}/`}>
              <img src={post.data.heroImage} alt="" />
            </a>
            <div className="flex flex-col items-start">
              <p className="date">
                <FormattedDate date={post.data.pubDate} />
              </p>
              <a href={`/blog/${post.slug}/`}>
                <h4 className="title">{post.data.title}</h4>
              </a>
              <p>{post.data.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ConditionalBlogList;
