import NewsBox from "../news-box/NewsBox";
import "./newsAndAnnouncements.css";

export default function NewsAndAnnouncements() {
  return (
    <>
      <div className="news-and-announcements">
        <div className="news-and-announcements-title">
          <h1>haberler ve duyrular</h1>
          <hr />
        </div>
        <div className="news-boxes">
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </div>
      </div>
    </>
  );
}
