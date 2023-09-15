import { useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ArrowSmallRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const ContractInteraction = () => {
  const [visible, setVisible] = useState(true);
  const [newGreeting, setNewGreeting] = useState("");

  const { writeAsync: writeMintAsync, isLoading: isMintLoading } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "mint",
    args: [],
    value: "0.03",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  //Duplicate Code

  const { writeAsync: writeTransferAsync, isLoading: isTransferLoading, isMining } = useScaffoldContractWrite({
    contractName: "MintContract",
    functionName: "transferTokens",
    args: [1000000000000000000],
    amount: "1000000000000000000",
    value: "0.003",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync: writeNoTransferAsync, isLoading: isNoTransferLoading, isNoMining } = useScaffoldContractWrite({
    contractName: "MintContract",
    functionName: "notransferTokens",
    value: "0.003",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className="flex bg-base-300 relative pb-10">
      <DiamondIcon className="absolute top-24" />
      <CopyIcon className="absolute bottom-0 left-36" />
      <HareIcon className="absolute right-0 bottom-24" />
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className={`mt-10 flex gap-2 ${visible ? "" : "invisible"} max-w-2xl`}>
          <div className="flex gap-5 bg-base-200 bg-opacity-80 z-0 p-7 rounded-2xl shadow-lg">
            <span className="text-3xl">👋🏻</span>
            <div>
              <div className="mt-2">
              Welcome to our coffee shop! We incentivize carbon negative behavior with our native token!
Buy our mug, and bring it over for coffee. For every{" "}
                <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem]">
                  disposable  
                </code>{" "}
                cup you avoid, we will {" "}
                <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem]">
                  REWARDYOU!  
                </code>{" "}
              </div>
            </div>
          </div>
          <button
            className="btn btn-circle btn-ghost h-6 w-6 bg-base-200 bg-opacity-80 z-0 min-h-0 drop-shadow-md"
            onClick={() => setVisible(false)}
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-4xl text-black">Buy Coffee Mug</span>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className="btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                  onClick={() => writeMintAsync()}
                  disabled={isMintLoading}
                >
                  {isMintLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      Buy <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Price:</span>
            <div className="badge badge-warning">0.03 ETH + Gas</div>
          </div>
          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Rewards</span>
            <div className="badge badge-warning">1 CNFT (Carbon Non-Fungible Token)</div>
          </div>
        </div>
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-4xl sm:text-4xl text-black">Buy Coffee</span>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className="btn btn-primary rounded-full capitalize font-normal font-white w-34 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                  onClick={() => writeTransferAsync()}
                  disabled={isMintLoading}
                >
                  {isTransferLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      BUY - I have a mug, I don't need a disposable cup <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Price:</span>
            <div className="badge badge-warning">0.0003 ETH + Gas</div>
            
          </div>
          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Rewards</span>
            <div className="badge badge-warning">1 CTN (Carbon Token)</div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className="btn btn-secondary rounded-full capitalize font-normal font-white w-34 flex items-center gap-1 hover:gap-2 transition-all tracking-widest"
                  onClick={() => writeNoTransferAsync()}
                  disabled={isMintLoading}
                >
                  {isNoTransferLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <>
                      BUY - I Don't have a mug, I need a disposable cup <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Price:</span>
            <div className="badge badge-warning">0.0003 ETH + Gas</div>
          </div>
          <div className="mt-4 flex gap-2 items-start">
            <span className="text-sm leading-tight">Reward:</span>
            <div className="badge badge-warning">No rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
};
