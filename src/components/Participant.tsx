interface ParticipantProps{
    name: string
}

export function Participant(props: ParticipantProps){
    return(
        <div className="text-lg hover:font-bold hover:text-colors-green-500">
            {props.name}
        </div>
    );
}