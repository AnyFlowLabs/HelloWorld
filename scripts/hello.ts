import hre from "hardhat";
import { Address } from "viem";

export async function main() {
    console.log('Saying hello to AnyflowHelloWorld contract...')

    const address = process.env.CONTRACT_ADDRESS! as Address
    const contract = await hre.viem.getContractAt("AnyflowHelloWorld", address);

    const hash = await contract.write.hello();

    const client = await hre.viem.getPublicClient()

    console.log(`Waiting for hello() transaction to be confirmed... tx: ${hash}`);
    // const receipt = await client.waitForTransactionReceipt({ hash });

    // console.log('Transaction confirmed: ', receipt.transactionHash);
}

main()