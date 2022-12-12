import { quotes } from "../assets";

function FeedbackCard(props){
  return(
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="Image" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins fonts-normal text-[18px] leading-[32px] text-white my-10">
        {props.content}
      </p>
      <div className="flex flex-row">
        <img src={props.img} alt="Image" className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px]">
            {props.name}
          </h4>
          <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[20px]">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard;