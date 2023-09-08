import { Pack } from "./dto";
import { getPackById, getPackByProductId } from "./repository";

export async function getPack(id: number): Promise<Pack[] | { error:string }> {
    const packs = await getPackById(id);
    const pack = packs[0];
    if (!pack) {
        throw { message: 'Pack not found' };
    }

    return packs;
}

export async function getPackByProduct(id: number): Promise<Pack | { error:string }> {
    const packs = await getPackByProductId(id);
    const pack = packs[0];
    if (!pack) {
        throw { message: 'Pack not found' };
    }

    return pack;
}
