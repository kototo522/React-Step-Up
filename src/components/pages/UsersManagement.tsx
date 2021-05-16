import { VFC, memo, useEffect, useCallback } from "react";
import { WrapItem,Wrap, Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hocks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hocks/useSelectUsers";
import { useLoginUser } from "../../hocks/useLoginUser";

export const UserManagement: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getUsers, users, loading } = useAllUsers()
    const { onSelectUser, selectedUser } = useSelectUser();
    const { LoginUser } = useLoginUser();
    console.log(LoginUser);

    useEffect(() => getUsers(), [])

    const onClickUser = useCallback((id: number) => {
        console.log(id);
        onSelectUser({ id, users, onOpen })
    }, [users, onSelectUser, onOpen])

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
                            id={user.id}
                            imageUrl="https://source.unsplash.com/random"
                            userName={user.username}
                            fullName={user.name}
                            onClick={onClickUser}
                            />
                        </WrapItem>
                    ))}
            </Wrap>
        ) }
        <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
        </>
    );
});