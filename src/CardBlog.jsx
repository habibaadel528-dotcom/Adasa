import { Link } from "react-router-dom";

export default function CardBlog({ post }) {
  if (!post) return null;

  const { id, title, excerpt, readTime, category, image, author, date } = post;
  const authorName = author?.name;
  const authorAvatar = author?.avatar;
  const authorRole = author?.role;

  return (
    <article className="blogs-article-card card border-0 bg-dark text-light h-100 overflow-hidden">
      
      <div className="blogs-article-card-image-wrap position-relative">
        {image && (
          <img
            src={image}
            alt={title}
            className="card-img-top object-fit-cover"
            style={{ height: "200px" }}
          />
        )}
        {category && (
          <span className="blogs-article-category-tag position-absolute rounded-pill">
            {category}
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <small className="text-muted d-flex align-items-center gap-2 mb-2">
          <i className="fa-regular fa-clock"></i>
          {readTime || ""} — {date}
        </small>

        <h5 className="card-title fw-bold mb-2">{title}</h5>
        <p className="card-text text-secondary small flex-grow-1 mb-3">
          {excerpt}
        </p>

        <div className="d-flex align-items-center justify-content-between mt-auto">
          <div className="d-flex align-items-center gap-2">
            {authorAvatar && (
              <img
                src={authorAvatar}
                alt={authorName}
                className="rounded-circle"
                style={{ width: 36, height: 36, objectFit: "cover" }}
              />
            )}
            <div>
              <div className="small fw-semibold">{authorName}</div>
              {authorRole && (
                <div className="small text-muted">{authorRole}</div>
              )}
            </div>
          </div>
          <Link
            to={`/blogs/${id}`}
            className="blogs-article-link-button btn btn-warning rounded-circle p-0 d-flex align-items-center justify-content-center"
            style={{ width: 36, height: 36 }}
            aria-label="اقرأ المقال"
          >
            <i className="fa-solid fa-arrow-left small"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}
