import Ternero from "../../domain/entities/Ternero.js";
export default class CreateTernero {
    constructor(TerneroRepository) {
        this.TerneroRepository = TerneroRepository;
    }

    async execute({ sku, weight }) {
        const ternero = new Ternero({ sku, weight });
        return await this.TerneroRepository.save(ternero);
    }
}

