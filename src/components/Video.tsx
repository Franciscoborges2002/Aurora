import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { LogoEvent } from "./LogoEvent";

import '@vime/core/themes/default.css'; 
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
 
const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
        videoId
        title
        description
        teacher {
            avatarURL
            bio
            name
        }
    }
    }
`

interface GetLessonBySlugResponse{
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video (props: VideoProps){

    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug
        }
    });

    if(!data){
        return(
            <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-bold text-2xl">A carregar aula.</p>
                    <Loader />
                </div>
                
            </div>
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-colors-black-900 flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi  />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img 
                            className="h-16 w-16 rounded-full border-2 border-colors-blue-500"
                            src={data.lesson.teacher.avatarURL} 
                            alt="" />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm bg-colors-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-colors-green-700 transition-colors focus:opacity-50">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href="#" className="p-4 text-sm border border-colors-blue-500 text-colors-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-colors-blue-500 hover:text-colors-gray-900 transition-colors focus:opacity-50">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2 ">
                    <a href="#" className="bg-colors-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-colors-gray-600 transition-colors">
                        <div className="bg-colors-green-700 h-full p-6  flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-colors-gray-200">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    
                    <a href="#" className="bg-colors-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-colors-gray-600 transition-colors">
                        <div className="bg-colors-green-700 h-full p-6  flex items-center">
                            <Image size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sm text-colors-gray-200">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}