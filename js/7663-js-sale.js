const CONTRACT_ADDR = "0x636A88e9360842a410f29143b978062584B76bE9";

const abi = [{"inputs":[{"internalType":"address","name":"genesisAddress","type":"address"},{"internalType":"address","name":"dogTagAddress","type":"address"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"uint256","name":"_mintStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burnCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dogTag","outputs":[{"internalType":"contract DogTag","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"genesis","outputs":[{"internalType":"contract IERC721A","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakedNftCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_burningTokenIdList","type":"uint256[]"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorFilteringEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint96","name":"feeNumerator","type":"uint96"}],"name":"setDefaultRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"dogTagAddress","type":"address"}],"name":"setDogtag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"genesisAddress","type":"address"}],"name":"setGenesis","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isRevealed","type":"bool"}],"name":"setIsReveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintStartTime","type":"uint256"}],"name":"setMintStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setOperatorFilteringEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract = null;
let account = null;

var totalSupply = null;
var maxSupply = 4444;
var maxPerTx = null;
var cost = null;
var value = null;

var amount = null;
var newMintAmount = null;

let web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/eth'));

// Initialize contract with ABI and contract address
contract = new web3.eth.Contract(abi, CONTRACT_ADDR);

async function loadTotalSupply() {
  try {
    // Call totalSupply without needing the user to be connected
    totalSupply = await contract.methods.totalSupply().call();
    maxSupply = await contract.methods.MAX_SUPPLY().call();

    // Assuming you have an element with the id "tokens_available" to display the supply
    document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;  // Example max supply is 4444
  } catch (error) {
    console.error("Error loading total supply:", error);
    document.getElementById("tokens_available").innerHTML = "Error fetching supply";
  }
}

// Call the function to display the supply on page load
window.addEventListener('load', async () => {
  await loadTotalSupply();  // Show supply on page load
});

async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
      // MetaMask connection
      web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      account = accounts[0];
      await loadContractData();
  } else {
      // WalletConnect connection (fallback)
      const provider = new WalletConnectProvider({
          rpc: {
              1: "https://rpc.ankr.com/eth" // Ethereum Mainnet RPC
          }
      });

      // Enable provider
      await provider.enable();
      web3 = new Web3(provider);

      const accounts = await web3.eth.getAccounts();
      account = accounts[0];

      await loadContractData();
  }

  // Update button with account address
  if (account) {
      document.getElementById("connect_button").innerHTML = account.substr(0, 10) + "..." + account.substr(-4);
  } else {
      document.getElementById("connect_button").innerHTML = "Connect Wallet";
  }
}

async function loadContractData() {
  contract = new web3.eth.Contract(abi, CONTRACT_ADDR);

  maxSupply = await contract.methods.MAX_SUPPLY().call();
  totalSupply = await contract.methods.totalSupply().call();
  const paused = await contract.methods.paused().call();
  maxPerTx = await contract.methods.maxPerTx().call();
  cost = await contract.methods.cost().call();

  if (paused) {
    document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED";
  } else {
    document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TX";
    document.getElementById("price").innerHTML = "0.01 APE EACH";
  }

  if (totalSupply < maxSupply) {
    document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
  } else {
    document.getElementById("tokens_available").innerHTML = "SOLD OUT";
  }
}

const decrementMintAmount = async (e) => {
  mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  amount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = "";
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  costMath = String(cost / 1e18);
  costFinal = newMintAmount * costMath;
  costFinal2 = String(costFinal);

  if (amount >= 1) {
  	document.getElementById("cost").innerHTML = "TOTAL COST: " + costFinal2.substr(0,6) + " APE";
  }
};

const incrementMintAmount = async (e) => {
  mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  amount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  costMath = String(cost / 1e18);
  costFinal = newMintAmount * costMath;
  costFinal2 = String(costFinal);

  if (amount >= 1) {
	  document.getElementById("cost").innerHTML = "TOTAL COST: " + costFinal2.substr(0,6) + " APE";
  }
};

// Retrieve values from contract on page load
window.addEventListener('load', async () => {
    const web3 = new Web3(window.ethereum);
    const contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR);
    const supply = await contract1.methods.totalSupply().call();
    console.log(supply);

    document.getElementById("tokens_available").innerHTML = supply + " / " + maxSupply;
    })

// PUBLIC MINT
const mint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          account = accounts[0];

          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const cost = await contract.methods.cost().call();
		
	        value = cost * _mintAmount;

          const gas = Math.round( await contract.methods.mint(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mint(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "mint";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
          alert("Error: " + e.message);
          console.log("Error: ",e);
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
          }
        }
    }     
}

const connect = async (e) => {
  let account;

  // Check if MetaMask is installed
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    
    // Request accounts from MetaMask
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];

    // Check if account exists
    if (account && account.length > 0) {
      document.getElementById("connect_button").innerHTML = account.substr(0, 10) + "..." + account.substr(-4);

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);

      try {
        maxSupply = await contract.methods.MAX_SUPPLY().call();
        totalSupply = await contract.methods.totalSupply().call();
        paused = await contract.methods.paused().call();
        maxPerTx = await contract.methods.maxPerTx().call();
        cost = await contract.methods.cost().call();

        if (paused) {
          document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED";
        } else {
          document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TX";
          document.getElementById("price").innerHTML = "0.01 APE EACH";
        }

        if (totalSupply < maxSupply) {
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
        } else {
          document.getElementById("tokens_available").innerHTML = "SOLD OUT";
        }
      } catch (error) {
        console.error("Error fetching contract data:", error);
        document.getElementById("phase").innerHTML = "Error fetching contract data";
      }
    }
  } else {
    // If MetaMask isn't installed, use WalletConnect
    console.log('MetaMask is not installed, using WalletConnect');
    
    if (typeof WalletConnectProvider !== 'undefined') {
      const provider = new WalletConnectProvider({
        rpc: { 1: "https://rpc.ankr.com/eth" }, // Example RPC URL
      });

      await provider.enable(); // Triggers the modal to scan the QR code

      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];

      if (account && account.length > 0) {
        document.getElementById("connect_button").innerHTML = account.substr(0, 10) + "..." + account.substr(-4);

        // Initialize contract instance and fetch data
        const contract = new web3.eth.Contract(abi, CONTRACT_ADDR);
        try {
          maxSupply = await contract.methods.MAX_SUPPLY().call();
          totalSupply = await contract.methods.totalSupply().call();
          paused = await contract.methods.paused().call();
          maxPerTx = await contract.methods.maxPerTx().call();
          cost = await contract.methods.cost().call();

          if (paused) {
            document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED";
          } else {
            document.getElementById("phase").innerHTML = "PUBLIC MINT | MAX " + maxPerTx + " PER TX";
            document.getElementById("price").innerHTML = "0.01 APE EACH";
          }

          if (totalSupply < maxSupply) {
            document.getElementById("tokens_available").innerHTML = totalSupply + " / " + maxSupply;
          } else {
            document.getElementById("tokens_available").innerHTML = "SOLD OUT";
          }
        } catch (error) {
          console.error("Error fetching contract data:", error);
          document.getElementById("phase").innerHTML = "Error fetching contract data";
        }
      }
    } else {
      console.error("WalletConnectProvider is not defined.");
    }
  }
};

// Event listeners
document.getElementById('connect_button').onclick = connect;
document.getElementById('mint_button').onclick = mint;

window.addEventListener('load', async () => {
  await connect();
});
