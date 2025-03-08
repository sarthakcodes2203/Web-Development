import { useState } from "react";
import "./index.css";
import "./App.css";

import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import DemoRedux from "./components/DemoRedux";

import { useForm, } from "react-hook-form"


import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./redux/counter/counterSlice";


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()
    

  const networkDelay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  const onSubmit = async (data) => {
    await networkDelay(2000);
    let r= await fetch('http://localhost:3000/', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    )
    let res= await r.text()
    console.log(data, res)
    if (data.username === "admin") {
      setError("myForm", {
        type: "manual",
        message: "Username cannot be admin",
      });
    }
    else if(data.password === "password"){
      setError("myForm", {
        type: "manual",
        message: "Password cannot be password",
      });
    }
    else {
      console.log("Submitted");
    }
    if(data.username === "sarthak" ){
      setError("blocked", {
        type: "manual",
        message: "Sorry, you are blocked",
      });
    }
    

  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);


  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />

      <div className="container">
        <h2>Form Handling:</h2>

        <br />
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder="Username" type="text" {...register("username",{ required: {value:true, message:"Username cannot be empty"}, minLength:{value:3, message:"Username must be more than 3characters long"} })} />
          <br />
          {errors.username && <span className='redMessage'>{errors.username.message}</span>}
          <br />
          <input placeholder="Password" type="password" {...register("password", {minLength:6})} />
          <br />
          {errors.password && errors.password.type === "minLength" && <span className='redMessage'>Password must be at least 6 characters</span>}
          
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {isSubmitting && <span className='greenMessage'>Submitting...</span>}

          {errors.myForm && <span className='redMessage'>{errors.myForm.message}</span>}
          {errors.blocked && <span className='redMessage'>{errors.blocked.message}</span>}


        </form>
      </div>

      <div className="container">
        <h1>Redux DEMO</h1>
        <h2>Counter:</h2>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(3))}>IncrementBy</button>
      <DemoRedux />
      </div>

    </>
  );
}

export default App;
