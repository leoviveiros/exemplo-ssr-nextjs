import { NextPage } from 'next';
import { useRouter } from 'next/router';

const UserDetailsPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <h1>User {id} Details</h1>;
};

export default UserDetailsPage;
