import { Paper, Text } from '@mantine/core';

type QuestionProps = {
    question: string
}

export default function Question({ question }: QuestionProps) {
    return (
        <Paper p={'xl'} mx={15} radius="md" shadow='xl' pos="absolute" bottom={-60}>
            <Text ta="center" size='md'>
                {question}
            </Text>
        </Paper>
    )
}
