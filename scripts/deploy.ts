import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyflowHelloWorld...')

    const args = [
        "Hello, World!", // _helloMessage
    ] as const;

    const contract = await hre.viem.deployContract("AnyflowHelloWorld", args);

    const contractAddress = contract.address

    console.log('AnyflowHelloWorld deployed to:', contractAddress);
}

main()