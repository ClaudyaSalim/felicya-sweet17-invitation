type InputFieldProps = {
    type: string
    name: string
    id: string
    placeholder?: string
}

export default function InputField(props: InputFieldProps){
    return <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
}