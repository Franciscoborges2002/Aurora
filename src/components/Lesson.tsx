import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns';  
import pt from 'date-fns/locale/pt'

interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson (props: LessonProps){
const isLessonAvailable = isPast(props.availableAt);
const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: pt
})

    return(
        <a href="#">
            <span className="text-colors-gray-300">
                {availableDateFormated}
            </span>

            <div className="rounded border border-colors-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-colors-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Conteúdo Disponível
                        </span>
                    ) : (
                        <span className="text-sm text-colors-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em Breve
                        </span>
                    )}


                    <span className="rounded border border-colors-green-300 text-colors-white font-medium text-xs px-2 py-[0.125rem]">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-colors-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}