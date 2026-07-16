import prisma from "../config/prisma.js";

const findUserBySupabaseId = async (supabaseUserId) => {
    return await prisma.user.findUnique({
        where: {
            supabaseUserId,
        },
    });
};

const createUser = async ({ supabaseUserId, fullName, email }) => {
    return await prisma.user.create({
        data: {
            supabaseUserId,
            fullName,
            email,
        },
    });
};

export {
    findUserBySupabaseId,
    createUser,
};