import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AnyflowHelloWorld = buildModule("AnyflowHelloWorld", (m) => {

  const helloMessage = 'Hello, World!';
  const anyflowHelloWorld = m.contract("AnyflowHelloWorld", [helloMessage]);

  return { anyflowHelloWorld };
});

export default AnyflowHelloWorld;
