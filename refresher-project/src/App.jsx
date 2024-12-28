// Sample Component

// import UseLayoutEffectHook from "./useLayoutEffectHook";
import { ReactRouterDemo } from "./ReactRouterDemo";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import UseStateHook from "./UseStateHook";
import User from "./User";
import UseEffectHook from "./useEffectHook";



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

    {/* <UseStateHook /> */}
    {/* <UseEffectHook /> */}
    {/* <UseRefHook /> */}
    {/* <UseMemoHook /> */}
    {/* <UseCallbackHook /> */}
    {/* <UseContextHook /> */}
    {/* <UseReducerHook /> */}
    {/* <UseLayoutEffectHook /> */}
    <ReactRouterDemo />

    </>
}

export default App;