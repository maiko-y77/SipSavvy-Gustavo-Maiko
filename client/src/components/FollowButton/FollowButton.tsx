"use client"
import { ButtonHTMLAttributes, MouseEvent } from 'react'
import "@/components/FollowButton/FollowButton.scss"
type FollowButtonType = ButtonHTMLAttributes<HTMLButtonElement>

const BASE_CLASS = "follow-button"

export function FollowButton({ className, ...rest }: FollowButtonType) {
    const onClickFollow = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        // do something to follow

    }


    return (
        <button className={`${BASE_CLASS} ${className}`} onClick={onClickFollow} {...rest}>Follow</button>
    )
}
