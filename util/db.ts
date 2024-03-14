"use server"

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

export async function generateTask(task:string){
    const createdTask = await prisma.user.create({
        data:{
            name:task
        }
    })

    if(!createdTask){
        console.log("Failed to create Task");
    }
    revalidatePath("/animal")
    return createdTask

}

export const getTasks = async ()=>{
    const getTasks = await prisma.user.findMany();

    if(!getTasks){
        console.log("Failed to fetch the tasks");
    }

    return getTasks;
}

