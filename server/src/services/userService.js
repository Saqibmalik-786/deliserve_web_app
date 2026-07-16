import {
    findUserBySupabaseId,
    createUser,
} from "../repositories/userRepo.js";

const syncUser = async (user) => {

    const existingUser = await findUserBySupabaseId(user.id);

    if (existingUser) {
        return existingUser;
    }

    return await createUser({
        supabaseUserId: user.id,
        fullName: user.user_metadata.full_name || "",
        email: user.email,
    });

};

export { syncUser };