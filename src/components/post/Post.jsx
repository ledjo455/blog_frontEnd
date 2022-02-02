import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
        alt="post"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et hic ea possimus ullam
        nesciunt officia ducimus velit. Eos laborum repellendus, laudantium vel distinctio corporis
        corrupti quos dolorem quod facilis.rhrerehrehr
      </p>
    </div>
  );
}

export default Post;
