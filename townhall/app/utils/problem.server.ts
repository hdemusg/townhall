import { prisma } from './prisma.server'

export const getProblems = async () => {
    const res = await prisma.problem.findMany({
        select: {
            id: true,
            problem: true,
            category: true,
            magnitude: true
        },
    })
    return res
}

export const getProblemsByCategory = async (cat: string) => {
    let res = prisma.problem.findMany({
        select: {
            id: true,
            problem: true,
            category: true,
            magnitude: true
        },
        where: {
            category: cat
        }
    })
    return res
}

export const getProblemById = async (id: string) => {
    let res = prisma.problem.findUnique({
        select: {
            id: true,
            problem: true,
            category: true,
            magnitude: true
        },
        where: {
            id: id
        }
    })
    console.log(res)
    return res
}