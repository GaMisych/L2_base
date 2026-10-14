function ipv4Parser(ip, mask){
  const ipParts = ip.split('.')
  const maskParts = mask.split('.')

  let netResult = []
  let hostResult = []

  for (let i = 0; i < ipParts.length; i++)
  {
      let ipOctet = Number(ipParts[i])
      let maskOctet = Number(maskParts[i])

      let netOctet = ipOctet & maskOctet
      let hostOctet = ipOctet & (255 - maskOctet)

      netResult.push(netOctet)
      hostResult.push(hostOctet)
  }

  return [netResult.join('.'), hostResult.join('.')]
}
