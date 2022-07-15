import starImg from "../../images/icon-star.svg";
import "./SocialProofHeader.css";

export default function SocialProofHeader() {
  const stars = new Array(5).fill(0).map((_, i) => {
    return <img src={starImg} key={i} alt="star" />;
  });
  //className="social-proof-header-rating-star"
  return (
    <header className="social-proof-header">
      <div className="social-proof-header-info">
        <h1>10,000+ of our users love our products.</h1>
        <p>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="social-proof-header-ratings">
        <div className="social-proof-header-ratings-item align-left">
          <div className="social-proof-header-ratings-item-stars">{stars}</div>
          <p>Rated 5 stars in BestTech</p>
        </div>
        <div className="social-proof-header-ratings-item align-center">
          <div className="social-proof-header-ratings-item-stars">{stars}</div>
          <p>Rated 5 stars in Report Guru</p>
        </div>
        <div className="social-proof-header-ratings-item align-right">
          <div className="social-proof-header-ratings-item-stars">{stars}</div>
          <p>Rated 5 stars in reviews</p>
        </div>
      </div>
    </header>
  );
}
