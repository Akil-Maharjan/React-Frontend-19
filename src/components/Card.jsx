import panda from "../assets/panda.jpg"

const Card = ({name ="Akil", age, gender, isActive}) => {
   console.log("rendered")
  return (
    <div className="w-75 m-10  flex items-start justify-start border shadow-lg">
        <div className="flex flex-col gap-4">
              <img src={panda} alt="profile" />
              <div className="flex flex-col gap-4 p-4">
              <h1>Name: {name}</h1>
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
              <p>Active: {isActive ? "Yes" : "No"}</p>
        </div>
        </div>
    </div>
  )
}

export default Card