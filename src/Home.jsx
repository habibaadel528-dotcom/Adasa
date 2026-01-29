import { useEffect, useState } from "react";
import Hero from "./Hero";
import Card from "./Card";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch("posts.json");
        const data = await response.json();
        setPosts(data.posts || data);
      } catch {
        setErrorMessage("فشل تحميل المقالات");
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      <Hero />

      <section className="home-articles-section py-5 text-light" dir="rtl">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div>
              <h2 className="fw-bold display-6 mb-1">مقالات مختارة</h2>
              <p className=" mb-0">
                محتوى منتقى لبدء رحلة تَعَلُّمَك في التصوير.
              </p>
            </div>

            <button className="btn btn-warning rounded-pill px-4">
              عرض الكل ←
            </button>
          </div>

          {isLoading && <p>جاري تحميل المقالات...</p>}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          {!isLoading && !errorMessage &&
            posts.slice(0, 3).map((post, index) => (
              <Card key={post.id || index} post={post} />
            ))
          }

        </div>
      </section>
    </>
  );
}
