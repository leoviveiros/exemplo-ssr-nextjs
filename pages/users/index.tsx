import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';

type User = {
    name: string;
}

type UserPageProps = {
    users: User[];
}

const UsersPage: NextPage<UserPageProps> = (props) => {
    const { users } = props;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users &&
                    users.map((user: any, key) => (
                        <li key={key}>
                            <Link href={'/users/' + user.id}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export const getServerSideProps = async () => {
    const { data } = await axios.get('http://localhost:3001/db.json');

    return {
        props: {
            users: data.users,
        },
    };
}

export default UsersPage;