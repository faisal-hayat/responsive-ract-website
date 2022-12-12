import { clients } from "../constants";
import styles from "../style";

function Clients(props){
  return (
   <section className={`${styles.flexCenter} my-4`} id="">
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="logo image" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>   
   </section>
  )
}

export default Clients;