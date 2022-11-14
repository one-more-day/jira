import { Select } from 'antd'
import { NAS } from 'types'

interface IdSelectProps extends Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange' | 'options'> {
    value?: NAS | null | undefined
    onChange: (value?: number) => void
    defaultOptionName?: string
    options?: { name: string; id: number }[]
}
export const IdSelect = (props: IdSelectProps) => {
    const { value, onChange, defaultOptionName, options, ...restProps } = props
    return (
        <Select value={toNumber(value)} onChange={(value) => onChange(toNumber(value) || undefined)} {...restProps}>
            {defaultOptionName ? <Select.Option value={0}>{defaultOptionName}</Select.Option> : null}
            {options?.map((option) => (
                <Select.Option key={option.id} value={option.id}>
                    {option.name}
                </Select.Option>
            ))}
        </Select>
    )
}
const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0: Number(value))
