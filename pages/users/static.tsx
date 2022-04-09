import axios from 'axios';
import { NextPage } from 'next';

type User = {
    name: string;
}

type UserPageProps = {
    users: User[];
}

const UsersStaticPage: NextPage<UserPageProps> = (props) => {
    const { users } = props;

    return (
        <div>
            <h1>Users</h1>
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
        },
    };
}

export default UsersStaticPage;