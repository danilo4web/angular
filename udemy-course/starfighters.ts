import { Spacecraft, ContainerShip } from './base-ships'

export class MillenniumFalcon extends Spacecraft implements ContainerShip{
    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 3
    }

    jumpIntoHyperspace() {
        if(Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Mission Failed')
        }
    }
}