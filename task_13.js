function hexStringToRGB(hexString) {
    const rHex = hexString.slice(1, 3)
    const gHex = hexString.slice(3, 5)
    const bHex = hexString.slice(5, 7)

    const r = parseInt(rHex, 16)
    const g = parseInt(gHex, 16)
    const b = parseInt(bHex, 16)
    
    return {
        r: r,
        g: g,
        b: b
    }
}
