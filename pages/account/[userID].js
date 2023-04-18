import { useRouter } from "next/router";
import AccountSettings from "../../components/AccountSettings";

export default function UserAccount({userID, accountSettings}) {
    const router = useRouter;

    return <div>Account setting for user {userID}</div>;
}

export async function getStaticPaths() {
    // Fetch a list of user ID's from daabase.
    const accountSettings = await fetch('http://')
    const userIds = ["user1", "user2", "user3"];
    // Map the user IDs to an array of objects with the `params` key
    const paths = userIds.map((userID) => ({
        params: { userID },
  }));


// Return the paths to Next.js
    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch the users account setting from database
    const accountSettings = await fetch()
}