export default function Hero() {
    return (
        <section className="landing-hero-area d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center text-center" dir="rtl">
                    <div className="col-lg-9">

                        <h1 className="hero-main-heading fw-bold mb-3 heading-size-large">
                            اكتشف
                            <span className="hero-heading-accent"> فن </span>
                            التصوير الفوتوغرافي
                        </h1>

                        <p className="hero-description-text lead mb-4 fs-4">
                            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
                        </p>

                        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                            <button className="btn primary-action-button px-4 py-2 rounded-pill fw-semibold">
                                استكشف المقالات ←
                            </button>
                            <button className="btn btn-outline-light px-4 py-2 rounded-pill">
                                اعرف المزيد
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row  g-1 justify-content-center g-3 mx-auto w-75">
                        <div className="col-3 col-md-3">
                            <div className="hero-stat-box text-center">
                                <div className="hero-stat-icon mb-2">
                                    <i className="fa-solid fa-pen-nib"></i>
                                </div>
                                <div className="hero-stat-value">6</div>
                                <div className="hero-stat-caption">كاتب</div>
                            </div>
                        </div>

                        <div className="col-3 col-md-3">
                            <div className="hero-stat-box text-center">
                                <div className="hero-stat-icon mb-2">
                                    <i className="fa-solid fa-folder-open"></i>
                                </div>
                                <div className="hero-stat-value">4</div>
                                <div className="hero-stat-caption">تصنيفات</div>
                            </div>
                        </div>

                        <div className="col-3 col-md-3">
                            <div className="hero-stat-box text-center">
                                <div className="hero-stat-icon mb-2">
                                    <i className="fa-solid fa-users"></i>
                                </div>
                                <div className="hero-stat-value">+10 ألف</div>
                                <div className="hero-stat-caption">قارئ</div>
                            </div>
                        </div>

                        <div className="col-3 col-md-3">
                            <div className="hero-stat-box text-center">
                                <div className="hero-stat-icon mb-2">
                                    <i className="fa-solid fa-newspaper"></i>
                                </div>
                                <div className="hero-stat-value">50+</div>
                                <div className="hero-stat-caption">مقالة</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

