import { VFC, memo } from "react";
import { WrapItem, Wrap } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: VFC = memo(() => {
    return(
        <Wrap p={{ base: 4, md: 10 }}>
            <WrapItem>
                {/* <UserCard
                    imageUrl="https://source.unplash.com/random"
                    userName="ことりん"
                    fullName="yoshimoto kotoha"
                /> */}
            </WrapItem>
        </Wrap>
    );
});