import { surpriseMePrompts  } from "../constants";
import Filesaver from 'file-saver'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt =  surpriseMePrompts[randomIndex]
    
    if(randomPrompt === prompt) return getRandomPrompt(prompt)
    
    return randomPrompt
}

export async function downloadImage(_id,photo) {
    Filesaver.saveAs(photo, `image-${_id}.jpg`)
}