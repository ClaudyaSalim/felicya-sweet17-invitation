type TextAreaProps = {
    name: string
    id: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>)=>void
}

export default function TextArea(props: TextAreaProps){
    return <textarea name={props.name} id={props.id} placeholder={props.placeholder} className="" rows={5} onChange={props.onChange} />
}