import React from "react";
import { useInView } from "react-intersection-observer";
import "./newsBox.css";

export default function NewsBox() {
  const { ref, inView } = useInView({
    threshold: 0.1, // %10 görünürlükte animasyonu başlat
    triggerOnce: true, // Animasyonu sadece bir kez tetikleyin
  });

  return (
    <div className={`news-box ${inView ? "visible" : ""}`} ref={ref}>
      <div className="img-of-news-box">
        <img src="/assets/1.photo.jpg" alt="hata" />
      </div>
      <div className="news-box-content">
        <h3>duyrunun basligi burada yazilir databaseten gelmesi lazim</h3>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          repellat eligendi accusantium consequuntur voluptatibus aut
          consectetur! Quisquam consectetur dolor ad reprehenderit adipisci?
          Iusto, numquam at sed molestiae ducimus doloremque praesentium!
        </p>
      </div>
    </div>
  );
}
