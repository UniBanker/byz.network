const byz = {
    oldSwapAddress: "0xe28f2c18a1ad3053ed7a6ca9006bb821f593f323",
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

window.addEventListener('load', async () => {

    $("#agreeCheckbox").change((e) => {
        console.log("agreeCheckbox");
        if($("#agreeCheckbox").is(':checked')) {
            console.log("agreeCheckbox T");
            $("#agreeButton").prop('disabled', false);
        }
        else {
            console.log("agreeCheckbox F");
            $("#agreeButton").prop('disabled', true);
        }
    });
    $("#agreeButton").click((e) => {
        $("#agreeTerms").hide();
        $("#swapDiv").fadeIn(250);
    });

    if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        let userETHAddress = web3.eth.accounts[0];

        let SwapContractType = web3.eth.contract(byz.abi);
        let liveSwap = SwapContractType.at(byz.swapAddress);

        // let liveSwap = web3.eth.contract(byz.swapAddress).at(byz.swapAddress);
        let liveBlue = web3.eth.contract(byz.blueABI).at(byz.blueAddress);

        let urlParams = new URLSearchParams(window.location.search);
        let blue = urlParams.get('blue');
        let byzAddress = `BYZ${urlParams.get('btcAddress')}`;

        $("#blueQty").val(blue);
        $("#byzQty").val(5*blue);
        $("#byzAddress").val(byzAddress);
        
        web3.settings.defaultAccount = web3.eth.accounts[0];

        function approveTheSwap() {
            $("#approve").hide();
            liveBlue.approve(byz.swapAddress, (new BigNumber(blue).multipliedBy(1e8)).toString(), {gas: 300000, gasPrice: 32000000000}, function(err, resp) {
                if(typeof(err) != 'undefined' && err != null) {
                    $("#bottomDiv").fadeIn(250);
                    $("#bottomDiv").removeClass("alert-danger alert-success alert-info").addClass("alert-danger");
                    $("#msg").html(err);
                }
                else {
                    // $("#msg").html(`Please wait for your transaction to be mined:<br /><a href="https://etherscan.io/tx/${resp}">${resp}</a><br />Then reload this page.`);
                    $("#bottomDiv").fadeIn(250);
                    $("#bottomDiv").removeClass("alert-danger alert-success alert-info").addClass("alert-info");
                    $("#msg").html(`<img src="notification.png" class="notificationBell" />BYZ Swap Step 2: Approve second transaction...`);
                    doTheSwap();
                }
            });
        }
        
        function doTheSwap() {
            // Perform swap
            //function deposit(uint256 tokens, string memory btcAddress) public payable {
            liveSwap.deposit((new BigNumber(blue).multipliedBy(1e8)).toString(), byzAddress, {gas: 600000, gasPrice: 4000000000}, function(err, resp) {
                if(typeof(err) != 'undefined' && err != null) {
                    $("#bottomDiv").fadeIn(250);
                    $("#bottomDiv").removeClass("alert-danger alert-success alert-info").addClass("alert-danger");
                    $("#msg").html(err) ? $("#msg").html(err) : $("#msg").html("Generic Error, check if you have enough gas or BLUE") ;
                }
                else {
                    $("#bottomDiv").fadeIn(250);
                    $("#bottomDiv").removeClass("alert-danger alert-success alert-info").addClass("alert-success");
                    $("#msg").html(`Swap complete! Please wait for your transaction to be mined:<br /><a href="https://etherscan.io/tx/${resp}">${resp}</a>`);
                }
            });

            console.log(`liveSwap.deposit(${(new BigNumber(blue).multipliedBy(1e8)).toString()}, ${byzAddress})`);
        }

        try {
            liveBlue.allowance(userETHAddress, byz.swapAddress, function(err, val) {
                if(typeof(err) != 'undefined' && err != null) {
                    alert(err);
                }
                let str = `BLUE allowed for swap: ${val.toString()}`;
                if(blue > val.dividedBy(1e8)) {
                    str = `<img src="notification.png" class="notificationBell" />Step 1 of 2: Approve swap smart contract`;
                    $("#approve").show();
                    $("#approve").click(function() {
                        approveTheSwap();
                    });
                }
                else {
                    str = `Swapping ${blue} BLUE for ${blue * 5} BYZ`;
                    $("#swap").show();
                    $("#swap").click(function() {
                        doTheSwap();
                    });
                }
                
                $("#msg").html(str);
            })
        }
        catch (e) {
            location.reload();
        }

    }
    // Non-dapp browsers...
    else {
        alert('Non-Ethereum browser detected. You should install the Blue Wallet first!');
    }
});