export const getProbeByGPIO = (GPIO: any) => {
    switch (GPIO) {
        case 17:
            return 1
        case 27:
            return 2
        case 22:
            return 3
        case 23:
            return 4
        case 24:
            return 5
        case 25:
            return 6
        default:
            return 0
    }
}
