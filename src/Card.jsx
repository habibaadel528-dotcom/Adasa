export default function Card({ post }) {


  const isFeatured = post.featured;

  return (
    <article className="home-article-card mb-4">
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-5">
          <div className="home-article-card-image-wrap">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid h-100 w-100 object-fit-cover rounded-end-4 rounded-start-4 rounded-lg-start-0"
              />
            )}

            {isFeatured && (
              <span className="home-article-badge">مميز</span>
            )}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="home-article-card-content h-100 d-flex flex-column justify-content-between">

            <div>
              {post.readTime && (
                <small className=" mb-4">
                  {post.readTime}
                </small>
              )}

              <h3 className="home-article-card-title mb-3">
                {post.title}
              </h3>

              <p className="home-article-card-excerpt mb-4">
                {post.excerpt}
              </p>

              <button className="btn btn-link text-warning p-0 text-decoration-none">
                اقرأ المقال ←
              </button>
            </div>

            <div className="d-flex align-items-center gap-2 mt-4">
              {post.author?.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="rounded-circle"
                  style={{ width: 40, height: 40, objectFit: "cover" }}
                />
              )}

              <div className="text-end">
                <div className="fw-semibold">
                  {post.author?.name}
                </div>
                <small>
                  {post.date}
                </small>
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}
