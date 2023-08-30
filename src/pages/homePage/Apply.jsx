import ButtonComponent from "../../components/ButtonComponent";
import styles from "../../styles";

function Apply() {
  return (
   <div className={`md:mt-32 flex flex-col-reverse md:flex-row justify-between ${styles.mainPaddingX} ${styles.mainPaddingy} gap-8 `}>
     <div className={`${styles.flexCol} gap-8 md:w-1/2`}>
        <h1 className="text-4xl font-bold text-blue-900">Here You can Apply!!</h1>
      <p className="text-gray-600 font-medium leading-7 ">
        TIMTOM AVIATION is calling for the public whether from Rwanda or
        international students to apply for courses offered <span className="font-bold">in Civil Aviation
        Management, Airline, Airport Management, and Travel & Tourism
        Management.</span>  These courses are professional and internationally
        recognized certificates and diplomas are awarded in partnership with  <span className="font-bold">
        IATA, ICAO, and SACCA Institute of Freight and Tourism.</span> Registration is
        done all the time during working hours and working days from Monday to
        Friday; from 08:00 AM to 05:00 PM and we have intakes in <span className="italic font-bold"> March, June,
        September, and December every year.</span>
      </p>
      <ButtonComponent title="Apply Now" className="bg-blue-400"/>
    </div>
    <div className="w-fit md:w-[450px] md:hover:w-[500px] transition-all hover:animate-pulse">
      <img src="/images/apply.png" alt="apply now" className="w-fit" />
    </div>
   </div>
  );
}

export default Apply;
