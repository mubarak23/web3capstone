## Getting Started

## Deploying Contracts

```bash
cd backend

add private key in .env file

compile the contract
npx hardhat compile

deplopy the contract
npx hardhat block-number --network sepolia

get contract address from the terminal where above command is run

```

## Run the Frontend

To run the frontend

cd frontend

update the following variable inside context/index.js
const contract_address = '';
// process.env.CONTRACT_ADDRESS; //
const sender_pvt_key = 'Your private key';

Run the frontend with
npm run dev
