import { useEffect, useState, useMemo } from "react";
import Hero2 from "./Hero2";
import CardBlog from "./CardBlog";

const ALL_TAB = "جميع المقالات";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(ALL_TAB);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("posts.json");
        if (!res.ok) {
          throw new Error("فشل تحميل البيانات");
        }
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.posts || [];
        const cats = Array.isArray(data?.categories)
          ? data.categories.map((c) => c.name)
          : [...new Set(list.map((p) => p.category).filter(Boolean))];
        setPosts(list);
        setCategories(cats);
      } catch (err) {
        setError(err.message || "حدث خطأ");
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    let list = posts;
    if (activeTab !== ALL_TAB) {
      list = list.filter((p) => p.category === activeTab);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(q)) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
          (p.category && p.category.toLowerCase().includes(q))
      );
    }
    return list;
  }, [posts, activeTab, search]);

  const displayPosts = filteredPosts.slice(0, 6);
  const tabs = [ALL_TAB, ...categories];


  return (
    <>
      <Hero2 />

      <section className="blogs-listing-section py-5 text-light" dir="rtl">
        <div className="container">

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div className="blogs-search-box position-relative">
              <i className="fa-solid fa-search blogs-search-icon position-absolute text-muted"></i>
              <input
                type="text"
                className="form-control bg-dark text-light border-secondary rounded-pill ps-5"
                placeholder="ابحث في المقالات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: 280 }}
              />
            </div>
            <div className="blogs-filter-buttons d-flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`btn rounded-pill px-4 py-2 ${
                    activeTab === tab
                      ? "btn-warning text-dark fw-semibold"
                      : "btn-outline-light"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {loading && <p className="text-center py-5">جاري تحميل المقالات...</p>}
          {error && <p className="text-danger text-center">{error}</p>}

          {!loading && !error && (
            <div className="row g-4">
              {displayPosts.length === 0 ? (
                <p className="text-muted text-center py-5">لا توجد مقالات تطابق البحث أو التصنيف.</p>
              ) : (
                displayPosts.map((post) => (
                  <div key={post.id} className="col-md-6 col-lg-4">
                    <CardBlog post={post} />
                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
