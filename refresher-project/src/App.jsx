// Sample Component

import UseStateHook from "./UseStateHook";
import User from "./User";

function App(){
  const userData = {
    name: "John Doe",
    age: 25,
    email: "sample@gmail.com",
    phone_number: "1234567890"
  }

  // Using react fragment to return multiple elements
    return <>
    {/* Also i can add extra variables here and update the existing one's */}
    {/* <User {...{ ...userData, address: "address", age:56 }} /> */}

    <UseStateHook />
    </>
}

export default App;