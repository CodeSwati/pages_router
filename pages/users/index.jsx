
// import { useEffect ,useState} from "react";
import  Link from 'next/link'

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Userpage =()=>{

    const {data, error} = useSWR("https://dummyjson.com/users", fetcher);
     console.log("data", data);
 
     if(error){
        return <h1>Error happened!</h1>;
     }

     if(!data) return <h1>loading......</h1>;

//    const [users, setUsers] = useState ([]);
//    console.log('users', users);
//    useEffect (()=>{
//        async function fetchUsers(){
//            const data  = await fetch("https://dummyjson.com/users");
//            setUsers( await data.json());
//        }
//        fetchUsers();
//    },[]);


   return(
       <div>
           <h1 className='text-5xl'>Users</h1>
           {
               data.users && data.users.map(
                   user => (<Link href={`/users/${user.id}`} key={user.id}>
                       <div>{user.firstName}</div>
                       </Link>
                       ))
           }
       </div>
   )
}

export default Userpage;