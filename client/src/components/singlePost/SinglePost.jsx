import "./singlePost.css";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-137144955.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>James</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae ab similique eum
          assumenda culpa blanditiis delectus dolores a minus ipsam reprehenderit, eveniet totam
          libero aut reiciendis quasi neque. Dolorum. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque, nesciunt ducimus alias beatae eveniet fugiat ullam quisquam
          nobis, sint accusantium ad similique tempora repudiandae! Reprehenderit voluptatem
          inventore facere reiciendis excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quod nobis mollitia natus, expedita laboriosam soluta non, recusandae exercitationem
          hic iste sit velit. Praesentium incidunt laboriosam corporis expedita, minima libero
          assumenda.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
