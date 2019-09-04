const byz = {
    swapAddress: "0x3ADcec93a8bfaCD93C0d6E32d6FEdc2F7E571AB2",
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "jetTokens",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSwapped",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "btcAddress",
                    "type": "string"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalSwapped",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "btcAddress",
                    "type": "string"
                }
            ],
            "name": "DidSwap",
            "type": "event"
        }
    ],
    blueABI: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SUPPLY_CAP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"note","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"note_","type":"string"}],"name":"setNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addresses","type":"address[]"},{"name":"amount","type":"uint256"}],"name":"drop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"incNonce","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"nonce","type":"uint256"}],"name":"NonceTick","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newNote","type":"string"}],"name":"NoteChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"count","type":"uint256"}],"name":"PerformingDrop","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    blueAddress: "0x539efe69bcdd21a83efd9122571a64cc25e0282b"
}

const readable = (n) => {
    return n.dividedBy(new BigNumber(1e8)).toString();
}
const byzQtyForEvent = (evt) => {
    return new BigNumber(evt.returnValues[1]).multipliedBy(5);
}
const byzQtyForEvents = (evts) => {
    let total = new BigNumber(0)
    for(var i=0; i< evts.length; i++) {
        total = total.plus(byzQtyForEvent(evts[i]));
    }
    return total;
}

const getByzData = (options, cb) => {
    // if (typeof web3 !== 'undefined') {
    //     window.web3 = new Web3(web3.currentProvider)
    // } else {
    //     window.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io:443'))
    // }
    let web3Inner = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io:443'))

    let address = options.address || "0x0";
    let nEvents = options.events || 5;

    var liveSwap = new web3Inner.eth.Contract(byz.abi, byz.swapAddress, {
        from:  address, // default from address
        gasPrice: '5000000000' // default gas price in wei, 5 gwei in this case
    });
    liveSwap.getPastEvents("DidSwap",
    {
        fromBlock: 0,
        toBlock: 'latest'
    })
    .then((res,y) => {
        let swapEvents = res.filter((item) => { return item.event == "DidSwap"});
        let mySwaps = swapEvents.filter((evt) => { return evt.returnValues[0].toLowerCase() == address.toLowerCase() });
        
        let totalSwapped = new BigNumber(0);
        for(var i=0;i<mySwaps.length;i++) {
            let evt = mySwaps[i];
            totalSwapped = new BigNumber(evt.returnValues[1]).plus(totalSwapped);
        }
        console.log(mySwaps);
        console.log(totalSwapped / new BigNumber(1e8));
        console.log(`BYZ: ${readable(byzQtyForEvents(mySwaps))}`);
        cb(
            {
                byzBalance: readable(byzQtyForEvents(mySwaps)),
                events: swapEvents.reverse().slice(0, nEvents),
                totalSwapped: readable(new BigNumber(swapEvents[0].returnValues.totalSwapped))
            }
        );
    });
}

getByzData({}, (data) => {
    console.log(`Total swapped: ${data.totalSwapped}`);
});