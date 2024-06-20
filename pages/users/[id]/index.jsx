'use client'
import { useState , useEffect } from "react";
import { useRouter } from "next/router";

const Userinfopage = () =>{

    const [userinfo, setUserinfo] = useState();
    const router = useRouter();
    console.log(userinfo);
    useEffect (()=>{
      const id = router.query.id;
      async function getUserById(id){
        const data  = await fetch(`https://dummyjson.com/users/${id}`);
        setUserinfo( await data.json());
    }
    getUserById(id);

   },[router.query.id]);

    return (
        <div>
            <h1>{ userinfo?.firstName }</h1>
            <p>{ userinfo?.email}</p>
        </div>
    )
}

export default Userinfopage;