import { VFC, memo, useEffect, useCallback } from "react";
import { WrapItem,Wrap, Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hocks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getUsers, users, loading } = useAllUsers()

    useEffect(() => getUsers(), [])

    const onClickUser = useCallback(() => onOpen(), [])

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
                        onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
            </Wrap>
        ) }
        <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    );
});