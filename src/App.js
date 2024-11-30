
import "./css/App.css";
import { User } from "./User";

const users=
  [
    {name:"Sudhakar A",
    city:"Dharmapuri" ,
    destination:"Full Stack Developer",
    skills:["Java","J2EE","Hibernate","SpringBoot","HTML","CSS","JavaScript","ReactJS"],
    image:"sudhakar.jpg",
      status:true},
      {name:"Umashankar",
    city:"Dharmapuri" ,
    destination:"Front End Developer",
    skills:["HTML","CSS","JavaScript","ReactJS"],
    image:"sudhakar.jpg",
      status:false}
  ]
function App() {
  return (
    <>
      {
        users.map((user,index)=>(<User key={index} name={user.name} city={user.city} destination={user.destination} skills={user.skills} image={user.image} status={user.status}/>))
      } 
    </>

  );
}

export default App;
