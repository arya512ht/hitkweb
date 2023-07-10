import "./ReviewStyles.css";
import ReviewData from "./ReviewData";
import Review1 from "../assets/5.jpg";
import Review2 from "../assets/8.jpg";
import Review3 from "../assets/6.jpg";

function Review() {
  return (
    <div className="review">
      <h1>What Our Student Says</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="reviewcard">
        <ReviewData
          image={Review1}
          heading="Tathagata Ghosh"
          text="Indonesia, officially the Republic of Indonesia, is a country in
          Southeast Asia and Oceania between the Indian and Pacific oceans. It
          consists of over 17,000 islands, including Sumatra, Java, Sulawesi,
          and parts of Borneo and New Guinea."
        />
        <ReviewData
          image={Review2}
          heading="Saikat Karar"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />
        <ReviewData
          image={Review3}
          heading="Arya Das"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Review;
