import { VFC, memo, useEffect } from "react";
import { WrapItem, Wrap, Spinner, Center } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hocks/useAllUsers";

export const UserManagement: VFC = memo(() => {
    const { getUsers, users, loading } = useAllUsers()

    useEffect(() => getUsers(), [])
    return(
        <>
        {loading ? (
            <Center h="100vh">
                <Spinner/>
            </Center>
        ) : (
            <Wrap p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mg="auto">
                            <UserCard
                        imageUrl="https://source.unsplash.com/random"
                        userName={user.username}
                        fullName={user.name}
                            />
                        </WrapItem>
                    ))}
            </Wrap>
        ) }
        </>
    );
});