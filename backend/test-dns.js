import dns from "dns/promises";

try {
  const records = await dns.resolveSrv(
    "_mongodb._tcp.kela-gang-3.tibtjlq.mongodb.net"
  );

  console.log(records);
} catch (err) {
  console.error(err);
}