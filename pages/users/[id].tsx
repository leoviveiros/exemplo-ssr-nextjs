import { NextPage } from 'next';
import { useRouter } from 'next/router';

const UserDetailsPage: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <h1>User {id} Details</h1>;
};

export default UserDetailsPage;

// *** STATIC *** //
// export const getStaticPaths = async () => {
    // TODO get the ids of the most accessed users to build the static pages
// };