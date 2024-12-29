// Sample Component

import UseLayoutEffectHook from "./useLayoutEffectHook";
import FunctionBasedSample from "./FunctionBasedSample";
import { ReactRouterDemo } from "./ReactRouterDemo";
import UseCallbackHook from "./UseCallbackHook";
import UseContextHook from "./UseContextHook";
import UseMemoHook from "./UseMemoHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import UseStateHook from "./UseStateHook";
import User from "./User";
import UseEffectHook from "./useEffectHook";
import ClassBasedSample from "./ClassBasedSample";
import ProtectedRoutes from "./ProtectedRoutes";
import ReduxDemo from "./ReduxDemo";
import HOC from "./HOC";
import ApiCall from "./ApiCall";




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
    {/* <ReactRouterDemo /> */}
    {/* <FunctionBasedSample /> */}
    {/* <ClassBasedSample /> */}
    {/* <ProtectedRoutes /> */}
    {/* <ReduxDemo /> */}
    {/* <HOC /> */}
    <ApiCall />

    </>
}

export default App;