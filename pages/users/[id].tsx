import { GetServerSideProps, NextPage } from 'next';

import axios from 'axios';

type User = {
    id: number;
    name: string;
};

type UserDetailPageProps = {
    user: User;
};

const UserDetailsPage: NextPage<UserDetailPageProps> = (props) => {
    const { user } = props;

    return (
        <div>
            <h1>User Details</h1>
            <h3>ID: { user.id }</h3>
            <h3>Name: { user.name }</h3>
        </div>
    );
};

export default UserDetailsPage;

// *** STATIC *** //
// export const getStaticPaths = async () => {
    // TODO get the ids of the most accessed users to build the static pages
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data } = await axios.get('http://localhost:3001/db.json');
    const id = Number(context.query.id);
    const user = data.users.find((user: User) => user.id === id);

    return {
        props: { user },
    };
};