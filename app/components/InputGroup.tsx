type InputGroupProps = {
    labelName: string
    labelFor: string
    children: React.ReactNode
}

export default function InputGroup({labelName, labelFor, children}:InputGroupProps){
    return <div className="flex flex-col gap-2 w-full">
        <label htmlFor={labelFor}>{labelName}</label>
        {children}
    </div>
}