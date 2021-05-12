import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import {
    WrapItem,Wrap, Spinner, Center, Modal, ModalOverlay, ModalContent,
    useDisclosure, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input
    } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo(props => {
  const { isOpen, onClose } = props;

  return (
    <>
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInBottom"
    >
        <ModalOverlay />
        <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>名前</FormLabel>
                        <Input value="Kottlin" isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>フルネーム</FormLabel>
                        <Input value="Kotoha Yosimoto" isReadOnly />
                    </FormControl>
                    <FormControl>
                        <FormLabel>MAIL</FormLabel>
                        <Input value="1234@mail.com" isReadOnly />
                    </FormControl>
                    <FormControl>
                    <FormLabel>TEL</FormLabel>
                        <Input value="090-8872-0000" isReadOnly />
                    </FormControl>
                </Stack>
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  );
});