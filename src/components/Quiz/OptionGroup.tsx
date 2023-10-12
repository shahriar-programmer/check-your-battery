import { Stack } from '@mantine/core';
import OptionSingle from './OptionSingle';
import { OptionSingleType } from '../../views/Quiz/Quiz';

type OptionGroupProps = {
    selectOption: (option: OptionSingleType) => void;
    allOption: OptionSingleType[]
}

export default function OptionGroup({ selectOption, allOption }: OptionGroupProps) {

    return (
        <Stack h="40vh" mt={100} justify='center' m={15}>
            {
                allOption?.map((option: OptionSingleType) => (
                    <OptionSingle key={option?.value} option={option} selectOption={selectOption} />
                ))
            }
        </Stack>
    )
}
