import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyflowHelloWorld...')

    const args = [
        "Hello, World!", // _helloMessage
    ] as const;

    const { deploymentTransaction } = await hre.viem.sendDeploymentTransaction("AnyflowHelloWorld", args);

    console.log(`Waiting for AnyflowHelloWorld to be deployed... tx: ${deploymentTransaction.hash}`);

    const publicClient = await hre.viem.getPublicClient();
    const { contractAddress } = await publicClient.waitForTransactionReceipt({
        hash: deploymentTransaction.hash,
    });

    console.log('AnyflowHelloWorld deployed to:', contractAddress);
}

main()