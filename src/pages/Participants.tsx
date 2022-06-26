import { gql, useQuery } from "@apollo/client";
import { Users } from "phosphor-react";
import { Header } from "../components/Header";
import { Participant } from "../components/Participant";

const GET_PARTICIPANTS_QUERY = gql`
    query {
        subscribers(stage: PUBLISHED) {
            name
        }
    }
`

interface GetParticipantsQueyResponse{
    subscribers: Array<{
        name: string
    }>
}

export function Participants(){
    const { data } = useQuery<GetParticipantsQueyResponse>(GET_PARTICIPANTS_QUERY);
    var numParticipantes = 0;

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat">
            <Header />
            <div className="flex flex-col gap-12 pb-10">
                <div className="flex items-center justify-center pt-20">
                    <h1 className="font-bold uppercase text-5xl">Participantes:</h1>
                </div>
                <div className="flex flex-col gap-2 items-center select-none">
                    {data?.subscribers.map(subscriber =>{
                        numParticipantes++;
                        return(
                            <Participant 
                                name={subscriber.name}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center text-2xl">
                <Users size={32} /> {numParticipantes}
            </div>
        </div>
    );
}