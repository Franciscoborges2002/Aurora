import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns';  
import pt from 'date-fns/locale/pt'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson (props: LessonProps){
const { slug } = useParams<{ slug: string }>();

const isLessonAvailable = isPast(props.availableAt);
const availableDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: pt
})

const isActiveLesson = slug == props.slug;

    return(
        <Link to={`/event/ignite-lab/lesson/${props.slug}`} className='group'>
            <span className="text-colors-gray-300">
                {availableDateFormated}
            </span>

            <div 
                className={classNames(
                    'rounded border border-colors-gray-500 p-4 mt-2 group-hover:border-colors-green-500 transition-colors',
                    { 'bg-colors-green-500 transition-colors': isActiveLesson }
                  )}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span 
                            className={classNames(
                                'text-sm font-medium flex items-center gap-2',
                                {
                                'text-colors-white-100 transition-colors': isActiveLesson,
                                'text-colors-blue-500 transition-colors': !isActiveLesson,
                                }
                            )}
                        >
                            <CheckCircle size={20}/>
                            Conteúdo Disponível
                        </span>
                    ) : (
                        <span className="text-sm text-colors-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em Breve
                        </span>
                    )}


                    <span 
                        className={classNames(
                            'text-xs rounded py-[0.125rem] px-2 text-colors-white border font-bold',
                            {
                              'border-colors-white': isActiveLesson,
                              'border-colors-green-300': !isActiveLesson,
                            }
                          )}
                    >
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong 
                    className={classNames(' mt-5 block', {
                        'text-colors-white': isActiveLesson,
                        'text-colors-gray-200': !isActiveLesson,
                      })}
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}