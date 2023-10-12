import { Group, Paper, Text } from "@mantine/core";
import { IconCircle, IconCircleCheckFilled } from "@tabler/icons-react";
import { OptionSingleType } from "../../views/Quiz/Quiz";

type OptionSingleProps = {
    selectOption: (option: OptionSingleType) => void;
    option: OptionSingleType
}

export default function OptionSingle({ selectOption, option }: OptionSingleProps) {
    return (
        <>
            {
                option?.selected ? (
                    <Paper onClick={() => selectOption(option)} shadow='md' p="md" withBorder radius="md" style={{ border: "2px solid" }} c='blue' styles={{ root: { cursor: "pointer" } }}>
                        <Group justify='space-between'>
                            <Text size="sm" fw="bold">{option?.label}</Text>
                            <IconCircleCheckFilled stroke={0.7} style={{ width: 20, height: 20 }} />
                        </Group>
                    </Paper>
                ) : (
                    <Paper onClick={() => selectOption(option)} shadow='sm' p="md" withBorder radius="md" styles={{ root: { cursor: "pointer" } }}>
                        <Group justify='space-between'>
                        <Text size="sm">{option?.label}</Text>
                            <IconCircle stroke={0.7} style={{ width: 20, height: 20 }} />
                        </Group>
                    </Paper>
                )
            }
        </>
    )
}
