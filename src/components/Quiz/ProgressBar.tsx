import { Progress, Stack } from '@mantine/core'

type ProgressBarProps = {
    value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
    return (
        <Stack h="14vh" justify='end' m={15}>
            <Progress size="xl" value={value}/>
        </Stack>
    )
}
