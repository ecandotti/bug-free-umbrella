export const getProbeByGPIO = (GPIO: any) => {
    switch (GPIO) {
        case 4:
            return 1
        case 27:
            return 27
        case 22:
            return 22
        case 23:
            return 23
        case 24:
            return 24
        case 25:
            return 25
        default:
            return 0
    }
}
