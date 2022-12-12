import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

function Testimonials(props){
  return(
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id="clients">
      {/* TODO: we need to complete it */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-ful blue__gradient" />
      <div className="w-full flex justify-between items-centermd:flex-row flex-col sm:mb-16 mb-6 relative z-[1px]">
        <h1 className={styles.heading2}>
          What are <br className="sm:block hidden" /> people saying about us 
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials;