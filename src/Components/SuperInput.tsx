import React, {ChangeEvent} from 'react';


type SuperInputPropsType = {
    setTitle: (title:string)=> void
    title: string
}

export const SuperInput = (props:SuperInputPropsType ) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)

    }
    return (
        <input  value={props.title} onChange={onChangeHandler}/>
    )
}