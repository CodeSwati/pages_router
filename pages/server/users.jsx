const UserPage = (props) =>{

    console.log('props', props);
    return (
        <div>
            <h1> users (server side render page)</h1>
            {
                props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)
            }
        </div>
    )
}

export const getServerSideProps = async() =>{
    console.log('a task is going on in server');

    const data = await (await fetch('https://dummyjson.com/users')).json();
    return {
        props : {
           data,
        },
    };
};


export default UserPage;