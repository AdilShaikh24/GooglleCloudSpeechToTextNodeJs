var port = null;

function setPort(p) {
    port = p;
    console.log("Your port is:"+port);
}

module.exports = {setPort:setPort}

