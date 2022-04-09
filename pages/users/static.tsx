import axios from 'axios';
import { NextPage } from 'next';

type User = {
    name: string;
}

type UserPageProps = {
    users: User[];
    date: string;
}

const UsersStaticPage: NextPage<UserPageProps> = (props) => {
    const { users, date } = props;

    return (
        <div>
            <h1>Users - {date}</h1>
            <ul>
                {users && users.map((user: any, key) => <li key={key}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const { data } = await axios.get('http://localhost:3001/db.json');

    return {
        props: {
            users: data.users,
            date: new Date().toISOString(),
        },
        revalidate: 10, // rebuild the page every 10 seconds
    };
}

export default UsersStaticPage;