import photoOfKindergarten from "../../assets/photo-of-kindergarten/Screenshot 2025-02-22 202947.png";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <>
      <div className="about-title">
        <h1>Fanasan Okuluna Hosgeldiniz</h1>
      </div>
      <div className="about-container">
        <h3>Biz Kimiz ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          optio iste dignissimos consequatur dolor corporis similique quia
          necessitatibus enim nobis minima est esse quod iure commodi
          accusantium, quibusdam dolores possimus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quibusdam debitis qui consequatur
          quaerat dicta, maiores nostrum sit deserunt sed tenetur harum delectus
          laborum consectetur, dolorem dolor nam eveniet cumque aspernatur.
        </p>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src={photoOfKindergarten} alt="hata" />
        </div>
      </div>
    </>
  );
}
