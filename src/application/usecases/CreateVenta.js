import Venta from "../../domain/entities/Venta.js";
export default class CreateVenta {
    constructor(VentaRepository) {
        this.VentaRepository = VentaRepository;
    }

    async execute({ num_venta, price }) {
        const venta = new Venta({ num_venta, price });
        return await this.VentaRepository.save(venta);
    }
}